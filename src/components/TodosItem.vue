<template>
  <li class="list-item">
    <span v-if="!editing" @dblclick="editTodo">{{ todo.title }}</span>
    <input v-else @blur="endEdit" :value="todo.title" type="text">
    <button v-if="!todo.completed" @click="completeTodo">Completed</button>
  </li>
</template>

<script>
  import {mapMutations} from "vuex";

  export default {
    name: 'TodosItem',
    props: {
      todo: {
        type: Object,
        default: () => ({}),
        required: true,
      }
    },
    data() {
      return {
        editing: false,
      }
    },
    methods: {
      ...mapMutations('todosStore', ['EDIT_TODO', 'COMPLETE_TODO']),
      editTodo() {
        if (!this.todo.completed) {
          this.editing = true;
        }
      },
      endEdit(event) {
        this.editing = false;
        const editData = {
          todoId: this.todo.id,
          todoTitle: event.target.value,
        };
        this.EDIT_TODO(editData);
      },
      completeTodo() {
        this.todo.completed = true;
        this.COMPLETE_TODO(this.todo);
      }
    }
  }
</script>

<style scoped>

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    margin-bottom: 10px;
    border: 2px solid #054b95;
  }

  .list-item span {
    padding: 5px 10px;
    text-align: left;
  }

  .list-item input {
    width: 100%;
    outline: none;
    height: 100%;
    font-size: 14px;
    border: 1px solid #000;
    margin: 0 10px;
  }

  .list-item button {
    border: 2px solid #054b95;
    background: #054b95;
    height: 100%;
    color: #fff;
    font-weight: 700;
    padding: 5px;
    cursor: pointer;
  }

  .list-item button:hover {
    background: #fff;
    color: #054b95;
  }

</style>