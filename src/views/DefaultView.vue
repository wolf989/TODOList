<template>
  <div> 
    <nav>
      <router-link to="/">Todos</router-link> |
      <router-link to="/completed">Completed</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
  import {mapActions, mapState} from "vuex";

export default {
  name: 'DefaultView',
  methods: {
    ...mapActions('todosStore', ['getTodos']),
  },
  async created() {
    await this.getTodos();
  },
}
</script>

<style>

</style>