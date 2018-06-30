<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>The Second Component</h2>
                <!-- <h3>Introduction Components</h3> -->
            </div>
        </div>

        <app-header></app-header>
        <hr>
        <div class="row">
            <app-servers></app-servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
/* eslint-disable */

    import Header from '@/components/tutcomponents07/SecondComponent/Common/Header';
    import Footer from '@/components/tutcomponents07/SecondComponent/Common/Footer';
    import Servers from '@/components/tutcomponents07/SecondComponent/Server/Servers';
    import ServerDetails from '@/components/tutcomponents07/SecondComponent/Server/ServerDetails';

  // IF APPLYING THE LAZY LOAD
  // const SCHeader  = () => import(/* webpackChunkName: "grp-tut-components2.1" */ '@/components/tutcomponents07/SecondComponent/Common/Header');
  // const SCFooter  = () => import(/* webpackChunkName: "grp-tut-components2.1" */ '@/components/tutcomponents07/SecondComponent/Common/Footer');
  // const SCServers  = () => import(/* webpackChunkName: "grp-tut-components2.1" */ '@/components/tutcomponents07/SecondComponent/Server/Servers');
  // const SCServerDetails  = () => import(/* webpackChunkName: "grp-tut-components2.1" */ '@/components/tutcomponents07/SecondComponent/Server/ServerDetails');

    export default {
        components: {
            'app-header': Header,
            'app-servers': Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    };
</script>
