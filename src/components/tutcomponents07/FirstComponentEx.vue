<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>The First Component</h2>
                <h3>Introduction Components</h3>
            </div>
        </div>
        <div class="row">
            <app-server-status v-for="server in 3"  :key="server.id"></app-server-status>
        </div>
        <div class="row">
            <div class="col-12 col-md-6">
                <h4>Code First Component</h4>
                 <code>
                    <pre class="bg-info text-white"> {{firstcomponentcontent}} </pre>
                </code>
            </div>
            <div class="col-12 col-md-6">
                <h4>Code First Component Server Status</h4>
                <code>
                    <pre class="bg-info text-white"> {{firstcomponentserversrartuscontent}} </pre>
                </code>
            </div>
        </div>
    </div>
</template>
<script>

/* eslint-disable */
    import ServerStatus from '@/components/tutcomponents07/FirstComponentServerStatus'

    export default {
        data() {
            return {
            firstcomponentcontent: `
        <div class="row">
            <div class="col-12"> 
                <h2>The First Component</h2> 
                <h3>Introduction Components</h3> 
            </div> 
        </div> 
        <div class="row"> 
            <app-server-status v-for="server in 3" :key="server.id"></app-server-status> 
        </div>
        
        <JS> 
            import ServerStatus from '@/components/tutcomponents07/FirstComponentServerStatus'

            export default { 
                components: {
                    'app-server-status': ServerStatus
                }
            }
        </JS>
    `, 
                firstcomponentserversrartuscontent: `
        <template> 
            <div class="col-4 my-3">
                <p>Server Status: {{status}}</p>
                <button class="btn btn-primary" @click="changeStatus">Change Status</button>
            </div> 
        </template>
     
        <JS>
         export default {
            data() {
                return {
                    status: 'Critical',
                }
            },
            methods: {
                changeStatus() {
                    this.status = 'Normal';
                }
            }
        } 
        </JS>
        `
            }
        },
        components: {
            'app-server-status': ServerStatus
        }
    }
</script>