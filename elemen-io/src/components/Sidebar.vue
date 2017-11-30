<template>
  <el-aside style="background-color: rgb(238, 241, 246)">
    <el-menu :default-openeds="[]">
        <router-link :to="{name: 'dashboard'}">
            <el-menu-item index="0">
                Dashboard
            </el-menu-item>
        </router-link>        
      <el-submenu index="1">
        <template slot="title">
            <i class="el-icon-message"></i>Biodata
        </template>
        <el-menu-item-group>
            <router-link :to="{name: 'view'}">
                <el-menu-item index="1-1">
                    View
                </el-menu-item>
            </router-link>
            <router-link :to="{name: 'update'}">
                <el-menu-item index="1-2">
                    Update BIO
                </el-menu-item>
            </router-link>
          
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
}
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

a {
    text-decoration: none;
    color: #4AA3FF;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
  width: 300px;
}

.el-menu-item * {
    vertical-align: super;
}


</style>


