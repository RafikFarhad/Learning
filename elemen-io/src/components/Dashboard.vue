<template>
  <div>
      <h1>Welcome to hell !!!</h1>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                user: null
            }
        },
        computed: {
            getUser () {
                this.user = this.store.getters.getUser
            }
        },
        methods: {
            created () {
                this.getUser()
            }
        }
    }
</script>
