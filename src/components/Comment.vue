<template>
    <div class="col-8 offset-2 mt-20">
        <b-card-group deck>
            <b-card>
                <template slot="header">
                    <div class="d-flex align-items-center">
                        <i class="xi-user-o font-size-22"></i>
                        <h6 class="ml-3" v-text="comment.name"></h6>    
                        <i @click="$bvModal.show(`EditModal${ comment.id }`)" class="xi-list-dot ml-auto"></i>
                    </div>
                </template>
                <form v-if="editing" @submit.prevent="submit">
                    <b-form-group>
                        <b-form-input 
                            type="text"
                            v-model="body"
                        ></b-form-input>
                    </b-form-group>
                    <div class="d-flex justify-content-end">
                        <b-button type="submit" variant="warning">수정</b-button>
                        <b-button variant="outline-warning" class="ml-4" @click="cancel">취소</b-button>
                    </div>
                </form>
                <b-card-text v-else v-text="comment.body"></b-card-text>
                
                <template slot="footer">
                    <em>{{ comment.reg_date | moment("from", "now") }}</em>
                </template>
            </b-card>
            <EditModal :id="`EditModal${ comment.id }`" @edit="edit" @remove="remove"></EditModal>
        </b-card-group>
    </div>
</template>

<script>
import EditModal from '@/components/EditModal.vue';

export default {
    data: () => ({
        editing: false,
        body: '',
    }),

    props: {
        comment: {
            type: Object,
            required: true
        }
    },

    components: {
        EditModal
    },

    methods: {
        edit() {
            this.body = this.comment.body;
            this.editing = true;
            this.$bvModal.hide(`EditModal${ this.comment.id }`);
        },

        submit() {
            this.$emit('update', { ...this.comment, body: this.body });
            this.editing = false;
        },

        cancel() {
            this.editing = false;
        },

        remove() {
            this.$emit('remove', this.comment);
            this.$bvModal.hide(`EditModal${ this.comment.id }`);
        }
    }
}
</script>