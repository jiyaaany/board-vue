<template>
    <div class="col-4">
        <b-card
            no-body
            img-src="http://lorempixel.com/300/200"
            img-alt="Image"
            img-top
        >
            <b-card-body>
                <router-link :to="{ name: 'Detail', params: { id: post.id }}">
                    <b-card-title v-text="post.title"></b-card-title>
                </router-link>
                <b-card-text v-text="post.body"></b-card-text>
            </b-card-body>
            
             
        <!-- 
            .d-flex -> display: flex
            .align-items-center -> align-items: center;
            .justify-content-center -> justify-content: center;
         -->

            <b-card-footer class="d-flex align-items-center">
                <i class="xi-clock-o mr-1"></i>
                {{fromNow}}
            </b-card-footer>
        </b-card>
    </div>
</template>
<script>
import moment from 'moment';

export default {
    props: {
        post: {
            type: Object,
            required: true,
        },
    },

    computed: {
        fromNow() {
            return moment(this.post.reg_date).fromNow();
        }
    },
}
</script>