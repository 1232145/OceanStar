import Home from '../pages/home';
import Products from '../pages/products';
import Contact from '../pages/contact';
import About from '../pages/about';
import Login from '../pages/login';
import Cart from '../pages/cart';

export const publicRoutes = [
    
    { path:'/',component: Home},
    { path:'/about-us',component: About},
    { path:'/products',component: Products},
    { path:'/contact',component: Contact},
    { path:'/login',component: Login},
    { path:'/shopping-cart',component: Cart},
]

export const navRoutes = [
    { path:'/', name: 'Trang chủ'},
    { path:'/about-us',component: About, name: 'Giới thiệu'},
    { path:'/products',component: Products, name: 'Sản phẩm'},
    { path:'/contact',component: Contact, name: 'Liên hệ'},
]