import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutWorld from '@/components/AboutWorld'
import CodeOne from '@/components/CodeOne'

//  Lazy-load route components or splitting the chunk of JS
//  FIRST APPROACH
const MainComponent = resolve => {
  require.ensure(['@/components/tutcomponents07/MainComponent'], () => {
    resolve(require('@/components/tutcomponents07/MainComponent'))
  }, 'grp-tut-components')
}
const HeaderComponent = resolve => {
  require.ensure(['@/components/tutcomponents07/HeaderComponent'], () => {
    resolve(require('@/components/tutcomponents07/HeaderComponent'))
  }, 'grp-tut-components')
}
const FirstComponentEx = resolve => {
  require.ensure(['@/components/tutcomponents07/FirstComponentEx'], () => {
    resolve(require('@/components/tutcomponents07/FirstComponentEx'))
  }, 'grp-tut-components')
}
const SecondComponentEx = resolve => {
  require.ensure(['@/components/tutcomponents07/SecondComponent/Index'], () => {
    resolve(require('@/components/tutcomponents07/SecondComponent/Index'))
  }, 'grp-tut-components2')
}

// SECOND APPROACH
const ThirdComponentEx = () => import(/* webpackChunkName: "grp-tut-components3" */ '@/components/tutcomponents08/ThirdComponent/Index')
const FourthComponentEx = () => import(/* webpackChunkName: "grp-tut-components4" */ '@/components/tutcomponents09/FourthComponent/Index')
const FifthComponentEx = () => import(/* webpackChunkName: "grp-tut-components5" */ '@/components/tutcomponents09/FifthComponent/Index')
const SixthComponentEx = () => import(/* webpackChunkName: "grp-tut-components6" */ '@/components/tutcomponents10/SixthComponent/Index')

const SeventhComponentEx = () => import(/* webpackChunkName: "grp-tut-components7" */ '@/components/tutforms11/SeventhComponent/Index')

const EightComponentEx = () => import(/* webpackChunkName: "grp-tut-components8" */ '@/components/tutdirectives12/EightComponent/Index')

const NinthComponentEx = () => import(/* webpackChunkName: "grp-tut-components9" */ '@/components/tutfilterandmixins13/NinthComponent/Index')

const AnimationAndTransitionMainComponent = () => import(/* webpackChunkName: "grp-tut-animation-transition" */ '@/components/tutanimationtransition14/Index')
const AnimationAndTransitionHeaderComponent = () => import(/* webpackChunkName: "grp-tut-animation-transition" */ '@/components/tutanimationtransition14/Header')

const TenthComponentEx = () => import(/* webpackChunkName: "grp-tut-animation-transition" */ '@/components/tutanimationtransition14/TenthComponent/Index')
const EleventhComponentEx = () => import(/* webpackChunkName: "grp-tut-animation-transition" */ '@/components/tutanimationtransition14/EleventhComponent/Index')
const TwelfthComponentEx = () => import(/* webpackChunkName: "grp-tut-animation-transition" */ '@/components/tutanimationtransition14/TwelfthComponent/Index')

const ThirteenthComponentEx = () => import(/* webpackChunkName: "grp-tut-http" */ '@/components/tuthttp15/ThirteenthComponent/Index')

// Vue.component('app-servers', CodeOne)

Vue.use(Router)
/* eslint-disable */
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'AboutWorld',
      component: AboutWorld
    },
    {
      path: '/codeone',
      name: 'CodeOne',
      components: {'app-servers': CodeOne}
    },
    {
      path: '/tutcomponent',
      components: {
        default: MainComponent,
        'components-nav': HeaderComponent
      },
      children: [
        {path: '', component: FirstComponentEx},
        {
          path: 'second',
          components: {
            default: SecondComponentEx,
            // 'components-nav': HeaderComponent
          }
        },
        {path: 'third', component: ThirdComponentEx},
        {path: 'fourth', component: FourthComponentEx},
        {path: 'fifth', component: FifthComponentEx},
        {path: 'sixth', component: SixthComponentEx}
      ]
    },
    {
      path: '/tutforms',
      name: 'SeventhComponent',
      component: SeventhComponentEx
    },
    {
      path: '/tutdirectives',
      name: 'EightComponent',
      component: EightComponentEx
    },
    {
      path: '/tutfiltersandmixins',
      name: 'NinthComponent',
      component: NinthComponentEx
    },
    {
      path: '/tut-animation-and-transition',
      components: {
        default: AnimationAndTransitionMainComponent,
        'components-nav': AnimationAndTransitionHeaderComponent
      },
      children: [
        {path: '', component: TenthComponentEx},
        {path: 'second', component: EleventhComponentEx},
        {path: 'third', component: TwelfthComponentEx}
      //   {
      //     path: 'second',
      //     components: {
      //       default: SecondComponentEx,
      //       // 'components-nav': HeaderComponent
      //     }
      //   },
      //   {path: 'third', component: ThirdComponentEx},
      //   {path: 'fourth', component: FourthComponentEx},
      //   {path: 'fifth', component: FifthComponentEx},
      //   {path: 'sixth', component: SixthComponentEx}
      ]
    },
    {
      path: '/http',
      name: 'Http',
      component: ThirteenthComponentEx
    },
    // { path: '/redirect-me', redirect: { name: 'home' } },
    // { path: '*', redirect: '/' }
  ]
})
