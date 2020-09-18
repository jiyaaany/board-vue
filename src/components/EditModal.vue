<template>
    <b-modal :id="id" :centered="true" :hide-header="true" :hide-footer="true" body-class="p-0" content-class="overflow-hidden" dialog-class="max-width">
        <div class="d-flex align-items-center justify-content-center flex-column" style="width: 530px; height: 220px;">
            <b-button style="flex: 1" class="font-size-34 w-relative-100" variant="light" @click="edit">수정하기</b-button>
            <b-button style="flex: 1" class="font-size-34 border-top w-relative-100 border-gray-100" variant="light" @click="remove">삭제하기</b-button>
        </div>
    </b-modal>
</template>

<script>
export default {
    props: {
        id: {
            type: String,
            required: true
        }
    },

    methods: {
        edit() {
            this.$emit('edit');
        },

        remove() {
            this.$emit('remove');
        }
    }

    // 
}
</script>