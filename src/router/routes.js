const Home = () => import('@/views/Home')
const Mall = () => import('@/views/Mall')
const Cart = () => import('@/views/Cart')
const Mine = () => import('@/views/Mine')
const List = () => import('@/views/List')
const Detail = () => import('@/views/Detail')
const Register = () => import('@/views/Register')
const Login = () => import('@/views/Login')
const ProductList = () => import('@/views/ProductList')
// import DMFooter from '@/components/DMFooter'
// import JpCartHeader from '@/components/JpCartHeader'
const HomeProduct = () => import('@/views/HomeProduct')

//首页的头部
const JpHeader = () => import('@/components/JpHeader')
const JpFooter = () => import('@/components/JpFooter')
//分类页的头部
const MallHeader = () => import('@/components/MallHeader')
const JpCartFooter = () => import('@/components/JpCartFooter')
const JpCartHeader = () => import('@/components/JpCartHeader')

export default [
  // 重定向
  {
    path: '/',
    redirect: '/home',
    meta: {}
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    components:{
      header: JpHeader,
      footer: JpFooter,
      default: Home
    },
    meta: {
      title: '首页',
      icon: '&#xe66b;',
      isTabbar: true,
      isAuthRequired: false
    },
    children: [
      {
        path: ':homeProductId',
        name: 'homeProductId',
        component: HomeProduct
      }
    ]
  },
  {
    path: '/Mall',
    name: 'mall',
    components:{
      header:MallHeader,
      footer: JpFooter,
      default:Mall
    } ,
    // redirect: '/mall/17951828',
    meta: {
      title: '分类',
      icon: '&#xe66d;',
      isTabbar: true,
      isAuthRequired: false
    },
    children: [
      {
        path: ':proId',
        name: 'productlist',
        component: ProductList
      }
    ]
  },
  {
    path: '/cart',
    name: 'cart',
    components: {
      default: Cart,
      footer: JpFooter,
      cartHeader: JpCartHeader,
      cartFooter: JpCartFooter
    },
    meta: {
      isTabbar: true,
      title: '购物车',
      icon: '&#xe66c;'
    }
  },
  {
    path: '/mine',
    name: 'mine',
    components: {


      default: Mine,
      footer: JpFooter,
    },
    meta: {
      title: '我的',
      icon: '&#xe66a;',
      isTabbar: true,
      isAuthRequired: false
    }
  },
  {
    path: '/list',
    name: 'list',
    components: {
      default: List
    },
    meta: {
      isAuthRequired: false
    }
  },
  {
    path: '/detail',
    name: 'detail',
    components: {
      default: Detail
    },
    meta: {
      isAuthRequired: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {
      isAuthRequired: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      isAuthRequired: false
    }
  }
]
