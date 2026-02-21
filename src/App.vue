<script setup lang="ts">
// import AdvanceCounter from './components/AdvanceCounter.vue'
import CounterDifferentStyle from './components/CounterDifferentStyle.vue'
// import DarkModeDemo from './components/DarkModeDemo.vue'
// import FilteredList from './components/FilteredList.vue'
// import UserForm from './components/UserForm.vue'
// import TodoList from './components/TodoList.vue'
// import HelloWorld from './HelloWorld.vue'

const handleCountChange = (newVal: unknown) => {
  console.log('Count changed:', newVal)
}
</script>

<template>
  <!-- <div id="app">
    <CounterDifferentStyle />
  </div> -->
  <main class="min-h-screen bg-background flex items-center justify-center p-8">
    <CounterDifferentStyle :initial-value="5" :step="2" @change="handleCountChange" />
  </main>
</template>
