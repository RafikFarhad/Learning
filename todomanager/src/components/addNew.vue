<template>
  <div class="form-group col-md-12">
    <form>
      <div class="form-row align-items-center">
        <div class="col-auto">
          <div v-if="error" class="alert alert-danger" role="alert">
            Name must be present
          </div>
          <input type="text"
                 id="todoName"
                 class="form-control"
                 placeholder="Add Activity">
        </div>
        <button @click="addNew" type="submit" class="btn btn-primary">Add</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    props: ['callbackAddNew'],
    data: function () {
      return {
        error: false
      }
    },
    methods: {
      addNew: function (event) {
        event.preventDefault()
        var name = document.getElementById('todoName').value
        if (name === '') {
          this.error = true
        } else {
          this.callbackAddNew(name)
          console.log(name)
          this.error = false
          document.getElementById('todoName').value = ''
        }
      }
    }
  }
</script>
<style>
  button {
    margin-top: 15px;
  }
</style>
