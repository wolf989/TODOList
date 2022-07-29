<template>
  <div class="list">
    <ul class="list-wrapper">
      <TodosItem v-for="todo in todos" :key="todo.id" :todo="todo"/>
    </ul>
  </div>
</template>

<script>
  import TodosItem from "@/components/TodosItem";

  export default {
    name: 'TodosList',
    props: {
      todos: {
        type: Array,
        default: () => ([]),
        required: true,
      },
    },
    components: {
      TodosItem,
    },
  }
</script>

<style scoped>

  .list-wrapper {
    list-style: none;
    max-width: 500px;
    width: 100%;
    margin: 50px auto 0;
  }

</style>