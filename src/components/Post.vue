<template>
    <div class="col-4 mt-50">
        <!-- <header>
            <slot name="header"></slot>
        </header> -->
        <b-card
            no-body
            img-src="https://picsum.photos/300/200"
            img-alt="Image"
            img-top
        >            
            <b-card-body>
                <router-link :to="{ name: 'Detail', params: { id: post.id }}">
                    <b-card-title v-text="post.title"></b-card-title>
                </router-link>
                <b-card-text v-text="post.body"></b-card-text>
            </b-card-body>

            <b-card-footer class="d-flex align-items-center">
                <i class="xi-clock-o mr-1"></i>
                {{ post.reg_date | moment('YYYY-MM-DD') }}
            </b-card-footer>
        </b-card>

        <!-- <footer>
            <slot name="footer"></slot>
        </footer> -->
    </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
}
</script>  