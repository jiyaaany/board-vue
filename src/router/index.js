import Vue from 'vue';
import VueRouter from 'vue-router';
import Posts from '@/views/Posts.vue';
import Form from '@/views/Form.vue';
import Detail from '@/views/Detail.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Posts
    },
    {
        path: '/form/:id?',
        name: 'Form',
        component: Form
    },
    {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail
    },
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
