<template>
    <el-header>
        <el-menu
                class="el-menu-demo"
                mode="horizontal"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <router-link :to="{name: 'home'}">
                    <el-menu-item index="home">
                        Basic Application
                     </el-menu-item>
                </router-link>
            <el-row index="2" type="flex" class="row-bg" justify="end">
                <router-link v-if="!auth" :to="{name: 'register'}">
                    <el-menu-item index="register">
                        Register
                    </el-menu-item>
                </router-link>
                <router-link v-if="!auth" :to="{name: 'login'}">
                    <el-menu-item index="name" >
                        Login
                    </el-menu-item>
                </router-link>
                <router-link v-if="auth" :to="{name: 'dashboard'}">
                    <el-menu-item index="dashboard">
                       Dashboard
                    </el-menu-item>
                </router-link>
            </el-row>
        </el-menu>
    </el-header>
</template>

<script>
    export default {
        data () {
            return {
                activeIndex: 'home'
            }
        },
        computed: {
            auth () {
                return this.$store.getters.isAuthenticated
            }
        },
        methods: {
            handleSelect (key, keyPath) {
                console.log(key, keyPath)
            }
        }
    }
</script>

<style scoped>
    .el-header {
        margin: 0px;
        width: 100%;
        padding: 0px;
    }

    a {
        text-decoration: double;
    }
    .active {
        color: rgb(255, 255, 255);
        border-bottom-color: transparent;
        background-color: rgb(84, 92, 100);
    }
</style>
