<template>
  <div>
    <AddTodoForm/>
    <Preloader v-if="!todosLoaded" color="#054b95" scale="0.5"/>
    <TodosList :todos="todos"/>
    <div v-if="todos.length === 0 && todosLoaded" class="alert-message">No Todos</div>
  </div>
</template>

<script>
  import AddTodoForm from "@/components/AddTodoForm";
  import TodosList from "@/components/TodosList";
  import Preloader from "@/components/Preloader";
  import {mapState} from 'vuex';

  export default {
    name: 'TodosPage',
    components: {
      Preloader,
      AddTodoForm,
      TodosList,
    },
    data() {
      return {
        result: '',
      }
    },
    computed: {
      ...mapState('todosStore', ['todos', 'todosLoaded']),
    },
  }
</script>

<style scoped>

  .alert-message {
    font-size: 18px;
    font-weight: 700;
    color: green;
  }

</style>