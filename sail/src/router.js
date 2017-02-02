import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// layout
const SlideBar = resolve => require(['./components/layout/SlideBar'], resolve)
const Header = resolve => require(['./components/layout/Header'], resolve)
const Content = resolve => require(['./components/layout/Content'], resolve)

const Hello = resolve => require(['./components/Hello'], resolve)

const routes = [
    {
        path: '/',
        components: {
            'header': Header,
            'slide-bar': SlideBar,
            'content': Content
        },
        children: [
            {
                path: 'home',
                component: Hello
            },
            {
                path: 'student',
                component: Hello
            },
            {
                path: 'major',
                component: Hello
            },
            {
                path: 'class',
                component: Hello
            },
            {
                path: 'grade',
                component: Hello
            },
            {
                path: 'graduation',
                component: Hello
            },
            {
                path: 'poverty',
                component: Hello
            },
            {
                path: 'system',
                component: Hello
            }
        ]
    }
]

const router = new VueRouter({
    routes
})
export default router
