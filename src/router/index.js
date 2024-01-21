import Vue from "vue";
import Router from 'vue-router';
import IndexPage from '@/components/pages/IndexPage.vue';
import BlogPage from '@/components/pages/BlogPage.vue';
import BlogDetailsPage from '@/components/pages/BlogDetailsPage.vue';
import ProjectPage from '@/components/pages/ProjectPage.vue';
import ProjectDetail from '@/components/pages/ProjectDetail.vue';
import NotFoundPage from '@/components/pages/NotFoundPage.vue';


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: IndexPage
        },
        {
            path: '/blog',
            name: 'blogList',
            component: BlogPage
        },
        {
            path: '/blog/detail',
            name: 'blogDetail',
            component: BlogDetailsPage
        },
        {
            path: '/project',
            name: 'projectList',
            component: ProjectPage
        },
        {
            path: '/project/detail',
            name: 'projectDetail',
            component: ProjectDetail
        },
        {
            path: '/404',
            name: 'NotFound',
            component: NotFoundPage
        },
        {
            path: '*',
            redirect: '/404'
        }

    ]
})