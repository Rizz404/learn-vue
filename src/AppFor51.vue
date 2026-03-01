<script setup lang="ts">
import { useCounter } from './composables/useCounter'
import { useLocalStorage } from './composables/useLocalStorage'

const { count, isAtMin, isAtMax, increment, decrement, reset } = useCounter(0, {
  min: 0,
  max: 10,
  step: 1,
})

// useLocalStorage — nilai persist meski halaman di-refresh
const username = useLocalStorage('demo-username', '')
const isDarkStored = useLocalStorage('demo-dark', false)
</script>

<template>
  <main class="min-h-screen bg-background flex flex-col items-center justify-center gap-8 p-8">
    <!-- Demo useCounter -->
    <div
      class="bg-surface border border-border rounded-[--radius-card] p-6 flex flex-col items-center gap-4 w-72"
    >
      <p class="text-xs uppercase tracking-widest text-content-muted font-medium">
        useCounter (0–10)
      </p>

      <span class="text-5xl font-bold tabular-nums text-content">
        {{ count }}
      </span>

      <div class="flex gap-2">
        <button
          @click="decrement"
          :disabled="isAtMin"
          class="px-4 py-1.5 rounded-lg bg-secondary text-secondary-fg text-sm font-medium hover:bg-secondary-hover transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          -
        </button>
        <button
          @click="increment"
          :disabled="isAtMax"
          class="px-4 py-1.5 rounded-lg bg-primary text-primary-fg text-sm font-medium hover:bg-primary-hover transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          +
        </button>
        <button
          @click="reset"
          class="px-4 py-1.5 rounded-lg border border-border text-content-secondary text-sm hover:bg-surface-raised transition-colors"
        >
          Reset
        </button>
      </div>

      <p class="text-xs text-content-muted">
        {{
          isAtMin
            ? 'Sudah minimum!'
            : isAtMax
              ? 'Sudah maksimum!'
              : `Sisa: ${10 - count} lagi ke max`
        }}
      </p>
    </div>

    <!-- Demo useLocalStorage -->
    <div
      class="bg-surface border border-border rounded-[--radius-card] p-6 flex flex-col gap-4 w-72"
    >
      <p class="text-xs uppercase tracking-widest text-content-muted font-medium">
        useLocalStorage (persists on refresh)
      </p>

      <input
        v-model="username"
        placeholder="Ketik nama kamu..."
        class="px-3 py-2 rounded-lg border border-border bg-background text-content text-sm placeholder:text-content-muted outline-none focus:ring-2 focus:ring-primary transition-colors"
      />

      <p class="text-sm text-content-secondary">
        Halo, <span class="text-content font-medium">{{ username || 'stranger' }}</span
        >!
      </p>

      <p class="text-xs text-content-muted">Coba refresh halaman — nama kamu masih ada!</p>
    </div>
  </main>
</template>
