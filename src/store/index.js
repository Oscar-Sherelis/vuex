import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: "",
    inputId: "",
    show: ""
  },

  getters: {
  },
  mutations: {
    // takes data from db and inserts into state
    async collectData(state) {
      try {
        const res = await axios.get("http://localhost:5000/data")

        state.todos = res.data.todos
        // res.data.todos == array ***
      } catch (e) {
        console.error(e)
      }
    },

    changeNewTodoState(state, value) {
      state.newTodo = value;
    },

    async addTodo(state) {
      // http === all data
      // takes data from input
      const res = await axios.post("http://localhost:5000/data", { title: state.newTodo })

      state.todos = [...state.todos, res.data.todos];
      console.log(state.todos)
      console.log(state.newTodo)
      state.newTodo = "";
    },

    async getById() {
      if(state.inputId !== "") {
        await axios.get("http://localhost:5000/data/" + state.inputId)
        .then(res => {
          // res.data in this case = value
          state.show = res.data;
        });
      }
    }
  },
  actions: {
    showData(context) {
      context.commit('collectData')
    },
    addObject(context) {
      context.commit('addTodo')
    }
  }
})
