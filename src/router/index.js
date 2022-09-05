import Vue from 'vue'
import VueRouter from 'vue-router'

//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [{
        path: '/',
        redirect: '/home'
    },

    {
        path: '/home', //首页
        component: () =>
            import ('../views/home/Home')
    },
    {
        path: '/detail', //详情页
        component: () =>
            import ('../views/detail/Detail')
    },

    {
        path: '/cart', //购物车
        component: () =>
            import ('../views/cart/Cart')
    },
    {
        path: '/order', //购物车下单页
        component: () =>
            import ('../views/cart/childComps/Order'),
        children: [{
                path: '',
                redirect: '/inStoreDining'
            },
            {
                path: '/inStoreDining',
                component: () =>
                    import ('../views/cart/childComps/orderChildComps/InStoreDining')
            }, {
                path: '/takeOutDelivery',
                component: () =>
                    import ('../views/cart/childComps/orderChildComps/TakeOutDelivery')
            }
        ]
    },

    {
        path: '/profile', //用户页
        component: () =>
            import ('../views/profile/Profile')
    },
    {
        path: '/list', //用户订单页
        component: () =>
            import ('../views/profile/childviews/List')
    },
    {
        path: '/profileData', //用户资料页
        component: () =>
            import ('../views/profile/childviews/profileData')
    },
    {
        path: '/profileAddress', //用户地址页
        component: () =>
            import ('../views/profile/childviews/profileAddress')
    },
    {
        path: '/pending', //用户待收货页
        component: () =>
            import ('../views/profile/childviews/pending')
    },
    {
        path: '/allList', //用户待收货页
        component: () =>
            import ('../views/profile/childviews/allList')
    },
    {
        path: '/manage', //用户待收货页
        component: () =>
            import ('../views/profile/childviews/manage')
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

//3.导出
export default router