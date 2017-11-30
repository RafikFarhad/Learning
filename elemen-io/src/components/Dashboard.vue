<template>
  <div>
      <h1>Hello {{ user!=null?user.name:'null' }} !!!</h1>
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
        },
        mounted () {
            this.user = this.$store.getters.getUser
        },
        methods: {
        }
    }
</script>
