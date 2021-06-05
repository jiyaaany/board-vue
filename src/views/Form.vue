<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-8 offset-2">
                <h3 v-if="!edit" class="text-center mb-3">글쓰기</h3>
                <form @submit.prevent="submit">
                    <b-form-group>
                        <b-form-input 
                            type="text" 
                            v-model="title"
                            placeholder="제목"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-textarea 
                            v-model="body"
                            rows="6"
                            placeholder="내용"
                        ></b-form-textarea>
                    </b-form-group>
                    <div class="d-flex justify-content-end">
                        <b-button type="submit" :disabled="disabled" variant="danger">저장</b-button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from '@/plugins/axios.js';

export default {
    name: 'Form',

    data: () => ({
        title: '',
        body: '',
        disabled: true,
        edit: false,
    }),

    watch: {
        /* title: function (title, previousTitle) {

        }, */
        title() {
            this.validate();
        },
        body() {
            this.validate();
        },

        '$route' (to) {
            if (!to.params.id) {
                this.edit = false;
                this.title = '';
                this.body = '';
                this.$root.isWriting = true;
            }
        }
    },

    created() {
        // true -> true, 1, 'asd', [], {}
        // false -> false, 0, '', null, undefined

        if (this.$route.params.id) {
            axios.get(`posts/${this.$route.params.id}`)
                .then(post => {
                    this.edit = true;
                    this.title = post.title;
                    this.body = post.body;
                    this.$root.isWriting = false;
                });
        } else {
            this.$root.isWriting = true;
        }
    },

    destroyed() {
        this.$root.isWriting = false;
    },

    methods: {
        submit() {
            if (this.edit) {
                axios.put(`posts/${this.$route.params.id}`, this.$data)
                    .then(post => {
                        alert('수정 되었습니다.');
                        this.$router.push({ name: 'Detail', params: { id: post.id } });
                    });
            } else {
                axios.post('posts', this.$data)
                    .then(post => this.$router.push({ name: 'Detail', params: { id: post.id } }));
            }
        },

        validate() {
            if (this.body != '' && this.title != '') {
                this.disabled = false;
            }
        }
    }
  }
</script>