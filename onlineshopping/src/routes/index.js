import {createRouter,createWebHistory} from 'vue-router'
import wrapperComponent from '../wrapperComponent.vue'
import cartComponent from '../components/cartComponent.vue'
import bodyComponent from '../components/bodyComponent.vue'
import productDetailsComponent from '../components/productDetailsComponent.vue'
const routes=[
    {
        path:'/',
        component:bodyComponent
    },
    {
        path:'/cart',
        component:cartComponent
    }
    ,
    {
        path:'/product/:id',
        component:productDetailsComponent
    }
]
const router=createRouter({
    routes:routes,
    history:createWebHistory()
})
export default router;