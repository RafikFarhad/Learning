<template>
  <div id="app">
    <img src="src/assets/logo.png" alt="VueJS">
    <h1>{{ projectTitle }}</h1>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: function () {
    return {
      projectTitle: 'Todo Manager v0.0'
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
  margin-top: 60px;
}
img {
  height: 50px;
}
</style>
