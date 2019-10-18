<template>
  <div class="hello">
    <button @click="$store.dispatch('showData')">Show data</button>
    <button @click="$store.dispatch('addObject')">add new</button>
    <!-- <h1>{{ $store.state.msg }}</h1>
    <h2>{{ $store.getters.fullName}}</h2>
    <ul v-for="todo of $store.commit('mutation_name')" :key="todo.id"> -->
    <ul v-for="todo of $store.state.todos" :key="todo.id">
      <li>{{ todo.title }} {{ todo.description }}
      </li>
    </ul>
    <input :value="addByPost" @keyup.enter="insertPost" placeholder="add new object">
    <!-- <input >
    <h1>found by Id {{ $store.state.show }}</h1> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  
  data() {
  	return {
    	addByPost: "dawdw"
    }
  },
	methods: {
    insertPost() {
      this.$store.commit('changeNewTodoState', this.addByPost)
      console.log(this.addByPost);
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
