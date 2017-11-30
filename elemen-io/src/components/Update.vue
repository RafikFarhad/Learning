<template>
    <div>
        <h4
        class="title"
        >
        Update Biodata</h4>
        <el-form ref="form" :model="form" label-width="140px">
        <el-form-item label="Full Name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Country">
            <el-col :span="6">
                <el-select v-model="form.region" placeholder="please select your country">
                <el-option label="Bangladesh" value="Bangladesh"></el-option>
                <el-option label="Other" disabled value="other"></el-option>
            </el-select>
            </el-col>
        </el-form-item>
        <el-form-item label="Birth Day">
            <el-col :span="6">
                <el-date-picker 
                type="date" 
                placeholder="Pick Birth Day" 
                v-model="form.date1" 
                style="width: 100%;">
                </el-date-picker>
            </el-col>
        </el-form-item>
        <el-form-item label="Maritual Status">
            <el-switch v-model="form.delivery"></el-switch>
        </el-form-item>
        <el-form-item label="Achievements">
            <el-checkbox-group v-model="form.type">
            <el-checkbox label="SSC" name="type"></el-checkbox>
            <el-checkbox label="HSC" name="type"></el-checkbox>
            <el-checkbox label="Graduation" name="type"></el-checkbox>
            <el-checkbox label="Post-Graduation" name="type"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="Gender">
            <el-radio-group v-model="form.resource">
            <el-radio label="Male"></el-radio>
            <el-radio label="Female"></el-radio>
            </el-radio-group>
        </el-form-item>
        <el-form-item label="About Yourself">
            <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button>Cancel</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            form: {
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        onSubmit () {
            console.log('submit!')
        }
    }
}
</script>

<style scoped>
    /* .el-checkbox__input,
    .el-radio__input, 
    .el-radio-group, 
    .el-switch {
        vertical-align: sub;
    } */
</style>

