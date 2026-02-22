<script setup lang="ts">
import CounterDifferentStyle from './components/CounterDifferentStyle.vue'

const handleCountChange = (newVal: number) => {
  console.log('Count changed:', newVal)
}
</script>

<template>
  <main class="min-h-screen bg-background flex items-center justify-center p-8">
    <CounterDifferentStyle :initial-value="5" :step="2" @change="handleCountChange" />
  </main>
</template>
