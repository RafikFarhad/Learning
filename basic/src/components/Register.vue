<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="12" :offset="6">
                <div class="box">
                    <h3>Register Here</h3>
                    <el-form :model="form" ref="form" label-width="120px" class="demo-ruleForm">
                        <el-form-item
                                label="Name"
                                prop="name"
                                :rules="[
                                    { required: true, message: 'Name is required' }
                                ]"
                        >
                            <el-input v-model.name="form.name"></el-input>
                        </el-form-item>
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
                        <el-form-item
                                label="Phone"
                                prop="phone"
                                :rules="[
                                  { required: true, message: 'Phone is required'},
                                ]">
                            <el-input type="phone" v-model.phone="form.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="Country" >
                            <el-input v-model.country="form.country"></el-input>
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
                    name: '',
                    email: '',
                    password: '',
                    phone: '',
                    country: ''
                }
            }
        },
        methods: {
            submitForm (formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!')
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

<style>

    .box {
        border: 1px solid rgba(255, 152, 102, 0.22);
        min-height: 500px;
        /*background: rgba(187, 191, 234, 0.45);*/
    }

</style>