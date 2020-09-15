<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-8 offset-2">
                <h3 class="text-center mb-3">제목</h3>
                <p>
                    내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
                </p>
                <p>
                    2020-09-11
                </p>
                <div class="d-flex justify-content-end">
                    <router-link :to="{ name: 'Form', params: {id: 1}}">
                        <b-button variant="warning mr-4">수정</b-button>
                    </router-link>
                    <b-button @click.prevent="remove" variant="danger">삭제</b-button>
                </div>
                <b-modal id="modal-1" centered v-model="isShow" :hide-header="true" footer-class="p-0" body-class="p-0">
                    <p class="my-4">Hello from modal!</p>
                </b-modal>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        isShow: true
    }),

    created() {
        // console.log(this.$route);
    },

    methods: {
        remove() {
            console.log("삭제");
            this.$bvModal.show('modal-1');
            
        }
    }
}
</script>