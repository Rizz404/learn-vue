<script setup lang="ts">
import { ref } from 'vue'
import Timer from './components/Timer.vue'

const showTimer = ref(true)

const handleTick = (seconds: number) => {
  // * Log setiap 10 detik biar gak spam
  if (seconds % 10 === 0) {
    console.log('[App] Timer tick:', seconds)
  }
}

const handleStopped = (finalSeconds: number) => {
  console.log('[App] Timer stopped at:', finalSeconds, 'seconds')
}
</script>

<template>
  <main class="min-h-screen bg-background flex flex-col items-center justify-center gap-6 p-8">
    <!-- * Toggle mount dan unmount -->
    <button
      @click="showTimer = !showTimer"
      class="px-4 py-2 rounded-lg bg-secondary text-secondary-fg text-sm hover:bg-secondary-hover transition-colors"
    >
      {{ showTimer ? 'Unmount Timer' : 'Mount Timer' }}
    </button>

    <!-- * v-if benar-benar mount/unmount dari dom, bukan hide doang -->
    <Timer
      v-if="showTimer"
      label="Stopwatch"
      :auto-start="true"
      @tick="handleTick"
      @stopped="handleStopped"
    />
  </main>
</template>
