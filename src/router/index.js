import Vue from 'vue'
import Router from 'vue-router'

const Index = ()=>import('@/views/Index.vue');
const Detail = ()=>import('@/views/Detail.vue');
const Img = ()=>import('@/views/Img.vue');
//const ColorType = ()=>import('@/views/ColorType.vue');
const CarType = ()=>import('@/views/CarType.vue');
const Quotation = ()=>import('@/views/Quotation.vue');
const City = ()=>import('@/views/City.vue');

Vue.use(Router)

export default new Router({
  routes: [
  	{
  		path:"/",
  		redirect:"/index"
  	},
    {
      	path: '/index',
      	name: 'Index',
      	component: Index
    },
    {
        path: '/detail',
        name: 'Detail',
        component: Detail
    }, 
    {
        path: '/Img',
        name: 'Img',
        component: Img
    }
    //, 
    // {
    //     path: '/colorType',
    //     name: 'ColorType',
    //     component: ColorType
    // }
    , 
    {
        path: '/carType',
        name: 'CarType',
        component: CarType
    }, 
    {
        path: '/quotation',
        name: 'Quotation',
        component: Quotation
    }, 
    {
        path: '/city',
        name: 'City',
        component: City
    }
    ]
})
