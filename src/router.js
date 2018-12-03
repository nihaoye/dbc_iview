const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/sjxq',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/sjxq.vue'], resolve)
    },
    {
        path: '/clzs',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/clzs.vue'], resolve)
    },
    {
        path: '/sjhj',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/sjhj.vue'], resolve)
    },
    {
        path: '/cwry',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/cwry.vue'], resolve)
    },
    {
        path: '/jgsz',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/jgsz.vue'], resolve)
    }
];
export default routers;
