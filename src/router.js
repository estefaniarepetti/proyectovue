import Vue from "vue";
import VueRouter from "vue-router";
import HomeComponent  from "./views/HomeComponent.vue";
import QuienesSomos from "./views/QuienesSomos.vue"


Vue.use(VueRouter);

const routers = [
    {path:"/", component: HomeComponent, name:"home"},
    {path: "/quienes-somos", component: QuienesSomos, name:"Quienes-somos"}
];

const router = new VueRouter({
    mode: "history",
    //base: process.env.BASE_URL,
    routers,

})

export default router ; 