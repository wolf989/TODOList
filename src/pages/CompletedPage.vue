<template>
  <div>
    <TodosList :todos="completedTodos"/>
    <div v-if="completedTodos.length === 0" class="alert-message">No Completed Todos</div>
  </div>
</template>

<script>
  import TodosList from "@/components/TodosList";
  import {mapState} from 'vuex';

  export default {
    name: 'CompletedPage',
    components: {
      TodosList,
    },
    computed: {
      ...mapState('todosStore', ['completedTodos']),
    }
  }
</script>

<style scoped>

  .alert-message {
    font-size: 18px;
    font-weight: 700;
    color: #000;
  }

</style>