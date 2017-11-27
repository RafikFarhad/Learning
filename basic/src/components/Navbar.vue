<template>
    <div class="nav">
        <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                <router-link :to="{name: 'home'}">
                    <el-menu-item index="home">
                        Basic Application
                     </el-menu-item>
                </router-link>
            <el-row index="2" type="flex" class="row-bg" justify="end">
                <router-link :to="{name: 'register'}">
                    <el-menu-item index="register" :active="activeIndex">
                        Register
                    </el-menu-item>
                </router-link>

                <el-menu-item index="signup">
                    <a href="#">
                        Sign up
                    </a>
                </el-menu-item>
            </el-row>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                activeIndex: 'home'
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
    .nav {
        margin: 0px;
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