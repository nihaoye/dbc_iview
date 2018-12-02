/*const routers = [
    {
        path: '/',
        meta: {
            title: ''
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    }
];*/
const routers=[
    {path:"/",component:(resolve)=>{require(['./views/index.vue'], resolve);}},
    {path:"/sjxq",component:(resolve)=>{require(['./views/sjxq.vue'], resolve);}},
];
export default routers;
