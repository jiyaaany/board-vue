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
                    <b-button @click.prevent="del" variant="danger">삭제</b-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    created() {
        // console.log(this.$route);
    },

    methods: {
        del() {
            console.log("삭제");
        }
    }
}
</script>