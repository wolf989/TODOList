import HTTP from "../../../http-common";

const todosStore = {
  namespaced: true,
  state: {
    todos: [],
    completedTodos: [],
    todosLoaded: false,
  },
  getters: {},
  mutations: {
    SET_TODOS: (state, todos) => state.todos = todos,
    ADD_TODO: (state, todo) => state.todos.push(todo),
    EDIT_TODO: (state, { todoId, todoTitle } ) => {
      const editableTodo = state.todos.find(todo => todo.id === todoId);
      editableTodo.title = todoTitle;
    },
    COMPLETE_TODO: (state, todo) => {
      state.completedTodos.push(todo);
      state.todos = state.todos.filter(todo => todo.completed != true);
    },
    COMPLETED_LOADING: (state, areLoaded) => state.todosLoaded = areLoaded,
  },
  actions: {
    async getTodos({commit}) {
      try {
        const response = await HTTP.get('todos',
          {
            params: {
              _limit: 5,
              completed: false,
            }
          });
        commit('SET_TODOS', response.data);
        commit('COMPLETED_LOADING', true);
      } catch (error) {
        console.log(error);
      }
    }
  },
};

export default todosStore;