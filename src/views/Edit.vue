<template>
    <div class="container">
        <div class="row pt-5">
            <div class="col-8 offset-2">
                <h3 class="text-center mb-3">글쓰기</h3>
                <form @submit.prevent="submit">
                    <b-form-group>
                        <b-form-input 
                            type="text" 
                            placeholder="제목"
                        ></b-form-input>
                    </b-form-group>
                    <b-form-group>
                        <b-form-textarea 
                            rows="6"
                            placeholder="내용"
                        ></b-form-textarea>
                    </b-form-group>
                    <div class="d-flex justify-content-end">
                        <b-button type="submit" variant="danger">저장</b-button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>