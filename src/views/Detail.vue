<template>
    <div v-if="post" class="container">
        <div class="row pt-5">
            <div class="col-8 offset-2">
                <h3 class="text-center mb-3" v-text="post.title">제목</h3>
                <p v-text="post.body"></p>
                <p>
                    {{ post.reg_date | moment('YYYY-MM-DD') }}
                </p>
                <div class="d-flex justify-content-end">
                    <router-link :to="{ name: 'Form', params: { id: post.id }}">
                        <b-button variant="primary mr-4">수정</b-button>
                    </router-link>
                    <b-button @click="$bvModal.show('removeModal')" variant="danger">삭제</b-button>
                </div>
                <AcceptModal id="removeModal" text="삭제하시겠습니까?" :event="remove"></AcceptModal>
            </div>
        </div>
        <transition-group tag="div" class="row" leave-active-class="animate__animated animate__fadeOutRight" >
            <Comment v-for="comment in comments" :key="comment.id" :comment="comment" @update="updateComment" @remove="removeComment"></Comment>
        </transition-group>
    </div>
</template>

<script>
import Comment from '@/components/Comment';
import AcceptModal from '@/components/AcceptModal';
import axios from '@/plugins/axios';

export default {
    data: () => ({
        comments: undefined,
        post: undefined
    }),

    components: {
        Comment,
        AcceptModal
    },

    created() {
        axios.get(`posts/${this.$route.params.id}`)
            .then(post => this.post = post);

        axios.get(`posts/${this.$route.params.id}/comments`)
            .then(comments => this.comments = comments.map(comment => ({...comment, reg_date: new Date()})));
    },

    methods: {
        remove() {
            axios.delete(`posts/${this.post.id}`)
                .then(() => {
                    alert('삭제되었습니다.');
                    this.$router.push({ name: 'Home' });
                });
        },

        updateComment(comment) {
            this.comments = this.comments.map(value => value.id === comment.id ? comment : value);

            // this.comments.forEach(element => {
            //     if (element.id == id) {
            //         element.body = body;
            //     }
            // });
        },

        removeComment(comment) {
            this.comments = this.comments.filter(value => value.id != comment.id);
        }
    }
}
</script>