<template>
    <div class="container">
        <div class="row">
            <Post v-for="(post, index) in posts" :key="index" :post="post"></Post>  
        </div>
    </div>
</template>

<script>
import Post from '@/components/Post';
import axios from '@/plugins/axios';

export default {
    name: 'Posts',

    data: () => ({
        /* posts: [...Array(10).keys()]
            .map(v => v + 1)
            .map(v => ({
                id: v,
                title: `title${v}`,
                body: `body${v}`,
                reg_date: moment().format('YYYY-MM-DD H:m:s'),
            })) */
        posts: []
    }),

    components: { Post },

    /*async * */ created() {
        axios.get('post')
            .then(posts => this.posts = posts)
            .catch(message => alert(message));
        // try {
        //     const response = await /* * */ axios.get('post');
        // } catch (message) {
        //     alert(message);
        // }

        // new Promise((resolve, reject) => {
        //     asdfasdjflksadjf

        //     resolve('foo');
        //     reject('good');
        // });
        
        // .then(function (response) {
        //     this.posts = response;
        // })
        // .then(response => ({
        //     foo: 'bar',
        // }));
    }
}
</script>