<script setup lang="ts">
// import AdvanceCounter from './components/AdvanceCounter.vue'
import FilteredList from './components/FilteredList.vue'
// import UserForm from './components/UserForm.vue'
// import TodoList from './components/TodoList.vue'
// import HelloWorld from './HelloWorld.vue'
</script>

<template>
  <div id="app">
    <FilteredList />
  </div>
</template>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
</style>
