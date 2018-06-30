import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AboutWorld from '@/components/AboutWorld'
import CodeOne from '@/components/CodeOne'

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
// const SecondComponentEx = resolve => {
//   require.ensure(['@/components/tutcomponents07/SecondComponent/Index'], () => {
//     resolve(require('@/components/tutcomponents07/SecondComponent/Index'))
//   }, 'grp-tut-components')
// }
const ThirteenthComponentEx = resolve => {
	require.ensure(['@/components/tuthttp15/ThirteenthComponent/Index'], () => {
	  resolve(require('@/components/tuthttp15/ThirteenthComponent/Index'))
	}, 'grp-tut-http')
}
// Vue.component('app-servers', CodeOne)

Vue.use(Router)

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
        // {
        //   path: 'second',
        //   components: {
        //     default: SecondComponentEx,
        //     // 'components-nav': HeaderComponent
        //   }
        // }
      ]
    },
    {
      path: '/http',
      name: 'Http',
      component: ThirteenthComponentEx
    }

    // { path: '/redirect-me', redirect: { name: 'home' } },
    // { path: '*', redirect: '/' }
  ]
})
