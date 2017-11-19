<template>
  <div id="app">
    <img src="src/assets/logo.png" alt="VueJS">
    <h1>{{ projectTitle }}</h1>
    <hr>
    <div class="row">
      <div class="col-6 middle ">
        <addNew
          :callbackAddNew="this.addNew"></addNew>
      </div>
      <br>
      <div class="col-md-8 middle listBox">
        <template v-for="(todo, index) in todos">
          <todoItem
            :todo="todo"
            :index=index
            :callbackDelete="deleteIt"
          ></todoItem>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import addNew from './components/addNew.vue'
  import todoItem from './components/todoItem.vue'

  require('bootstrap/dist/css/bootstrap.css')
  export default {
    name: 'app',
    data: function () {
      return {
        projectTitle: 'Todo Manager v0.0',
        todos: [
          {
            name: 'Live a day more!!!',
            time: '123'
          }
        ]
      }
    },
    methods: {
      addNew: function (name) {
        this.todos.push(
          {
            name: name,
            time: new Date().toLocaleTimeString() // 11:18:48 AM
          }
        )
      },
      deleteIt: function (index) {
        console.log(index + ' delete')
        this.todos.splice(index, 1)
      }
    },
    components: {
      'addNew': addNew,
      'todoItem': todoItem
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

  .middle {
    margin: auto;
  }

  .listBox {
    border: 1px solid #00ff00;
  }

</style>
