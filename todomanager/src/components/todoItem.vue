<template>
  <div class="card" >
    <div class="card-body">
      <h4 class="card-title">{{todo.name}}</h4>
      <p class="card-text"> {{todo.time}}</p>
      <button
        @click="callbackDelete(index)"
        class="btn btn-outline-danger"
      >Done!</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['todo', 'callbackDelete', 'index'],
    data: function () {
      return {

      }
    }
  }
</script>

<style scoped>
  .card {
    border: 1px solid #0000ff;
    margin: 20px;
    padding: 10px;
    float: none;
    width: 25%;
    display: inline-block;
  }
</style>
