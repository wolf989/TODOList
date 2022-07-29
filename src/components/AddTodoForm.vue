<template>
  <div class="form">
    <form @submit.prevent="addTodo">
      <input v-model="title" type="text" class="form-input">
      <button class="form-btn" type="submit">Add</button>
    </form>
    <div v-if="showMessage" class="alert-message">Enter Title</div>
  </div>
</template>

<script>
  import {mapMutations} from "vuex";

  export default {
    name: 'AddTodoForm',
    data() {
      return {
        title: '',
        showMessage: false,
      }
    },
    methods: {
      ...mapMutations('todosStore', ['ADD_TODO']),
      addTodo() {
        const todo = {
          id: Date.now(),
          completed: false,
          title: this.title,
        };
        if (this.title) {
          this.ADD_TODO(todo);
          this.showMessage = false;
        } else {
          this.showMessage = true;
        }
        this.title = '';
      }
    }
  }
</script>

<style scoped>

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0;
    border: 2px solid #054b95;
    max-width: 300px;
    width: 100%;
    height: 30px;
    margin: 0 auto;
  }

  .form-input {
    border: none;
    outline: none;
    font-size: 14px;
    width: 75%;
    height: 105%;
    padding-left: 5px;
  }

  .form-btn {
    border: 2px solid #054b95;
    background: #054b95;
    color: #fff;
    font-size: 14px;
    width: 25%;
    height: 100%;
    cursor: pointer;
    font-weight: 700;
  }

  .form-btn:hover {
    background: #fff;
    color: #054b95;
  }

  .form {
    position: relative;
  }

  .alert-message {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 5px;
    text-align: center;
    color: red;
    padding: 5px;
    font-size: 12px;
    font-weight: 700;
  }

</style>