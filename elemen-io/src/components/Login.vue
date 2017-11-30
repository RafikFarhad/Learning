<template>
    <div
    class="main"
    >
        <el-row :gutter="20"
        >
            <el-col :span="12" :offset="6">
                <div class="box"
                    v-loading.fullscreen.lock="form.loading"
                >
                    <h3>Login Here</h3>
                    <el-form :model="form" ref="form" label-width="120px" class="demo-ruleForm">
                        
                        <el-form-item
                                label="Email"
                                prop="email"
                                :rules="[
                                    { required: true, message: 'Email is required' },
                                    { type: 'email', message: 'Invalid Email' }
                                ]">
                            <el-input v-model.email="form.email"></el-input>
                        </el-form-item>
                        <el-form-item
                                label="Password"
                                prop="password"
                                :rules="[
                                    { required: true, message: 'Password is required' },
                                ]">
                            <el-input type="password" v-model.password="form.password"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="submitForm('form')">Submit</el-button>
                            <el-button @click="resetForm('form')">Reset</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                form: {
                    email: '',
                    password: '',
                    loading: false
                }
            }
        },
        methods: {
            submitForm (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.form.loading = true
                        this.$store.dispatch('login', this.form)
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })
            },
            resetForm (formName) {
                this.$refs[formName].resetFields()
            }
        }
    }
</script>

<style scoped>

    .box {
        border: 1px solid rgba(255, 152, 102, 0.22);
        min-height: 500px;
        /*background: rgba(187, 191, 234, 0.45);*/
    }
/* 
    .main {
        height: 100%;
        width: 90%;
        margin: 0px;
    } */

    /* .el-row {
        margin: 0px 50px;
    } */

</style>
