import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RandomUser from '@/components/RandomUser'
import Profile from '@/components/Profile'
import Color from '@/components/ColorManupulation'
import Condition from '@/components/ConditionalRenderingLists'
import ServerStatus from '@/components/ServerStatus'
import UserIets from '@/components/passdatachildcomponents/User'
import DierenTuin from '@/components/DynamicComponents/Dierentuin'
import Animation from '@/components/Animation/Animation'
import MainHTTP from '@/components/VueJsHTTP/MainHTTP'
import UserHome from '@/components/FetchingAndUsingRouteParameters/UserHome'
import User from '@/components/FetchingAndUsingRouteParameters/User'
import UserDetail from '@/components/FetchingAndUsingRouteParameters/UserDetail'
import UserEdit from '@/components/FetchingAndUsingRouteParameters/UserEdit'
import UserStart from '@/components/FetchingAndUsingRouteParameters/UserStart'
import UserHeader from '@/components/FetchingAndUsingRouteParameters/UserHeader'
import MainVuex from '@/components/Vuex/MainVuex'
import signin from '@/components/VueJsHTTP/signin'
import store from '../store/store'
import Child from '../components/Props/Child'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UserHome',
      components:{
        default:UserHome,
        'headertop':UserHeader
      }
    },
    {
      path: '/child',
      name: 'Child',
      component: Child
    },
    {
      path: '/user',
      name:'User',
      component: User, children:[
        {path: '', component:UserStart},
        {path: ':id', component:UserDetail},
        {path: ':id/edit', component:UserEdit,name:'userEdit'},
      ]
    },
    {
      path: '/vuejshttp',
      name: 'MainHTTP',
      component: MainHTTP
    },
    {
      path: '/animation',
      name: 'Animation',
      component: Animation
    },

    {
      path: '/mainvuex',
      name: 'Mainvuex',
      component: MainVuex,
      beforeEnter(to,from,next){
        if(store.state.idToken){
          next()
        }else{
          next('/signin')
        }
      }
    },
    {
      path:'/redirect-me', redirect:{path:'user'}
    },

    {
      /* zooo fking chill */
      path:'*',redirect:'/'
    },

    {
      path: '/randomuser',
      name: 'RandomUser',
      component: RandomUser
    },
    // {
    //   path: '/randomuser/profile',
    //   name: 'Profile',
    //   component: Profile
    // },
    // {
    //   path: '/color',
    //   name: 'Color',
    //   component: Color
    // },
    // {
    //   path: '/condition',
    //   name: 'Condition',
    //   component: Condition
    // },
    // {
    //   path: '/userIets',
    //   name: 'UserIets',
    //   component: UserIets
    // },
    {
      path: '/dierentuin',
      name: 'Dierentuin',
      component: DierenTuin
    },


  ]
})
