<template>
    <div>
        <Navbar></Navbar>
        <el-container>
            <Sidebar v-if="auth"></Sidebar>
            <div class="main-view">
                <router-view />
            </div>
        </el-container>
    </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import Sidebar from './components/Sidebar.vue'
    export default {
        name: 'app',
        components: {
            Navbar,
            Sidebar
        },
        data () {
            return {
            }
        },
        computed: {
            auth () {
                return this.$store.getters.isAuthenticated
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        /* margin-top: 60px; */
    }
    img {
        height: 20px;
    }
    .el-container {
        width: 100%;
    }
    .main-view {
        width: 85%;
        margin: 20px 30px;
    }
    .title {
        margin-bottom: 30px;
        text-align: center;
    }
    
</style>
