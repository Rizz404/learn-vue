<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFetch } from '@/composables/useFetch'

// 1. Definisikan tipe untuk response API
interface User {
  id: number
  name: string
  email: string
  company: { name: string }
}

// 2. State untuk mengontrol User ID yang mau difetch
const userId = ref<number>(1)

// 3. Computed getter untuk URL (ini yang bikin reaktif!)
const apiUrl = computed(() => `https://jsonplaceholder.typicode.com/users/${userId.value}`)

// 4. Panggil useFetch — perhatikan generic <User> dan kita passing apiUrl (ComputedRef)
const { data: user, isLoading, error, execute: refetch } = useFetch<User>(apiUrl)

const nextUser = (): void => {
  if (userId.value < 10) userId.value++
}

const prevUser = (): void => {
  if (userId.value > 1) userId.value--
}
</script>

<template>
  <main class="min-h-screen bg-background flex flex-col items-center justify-center p-8">
    <div
      class="bg-surface border border-border rounded-[--radius-card] p-6 w-full max-w-sm flex flex-col gap-6"
    >
      <!-- Header & Controls -->
      <div class="flex items-center justify-between">
        <h2 class="text-base font-semibold text-content">User Profile</h2>
        <div class="flex gap-2">
          <button
            @click="prevUser"
            :disabled="userId === 1 || isLoading"
            class="w-8 h-8 flex items-center justify-center rounded bg-secondary text-secondary-fg hover:bg-secondary-hover transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            &larr;
          </button>
          <span class="text-xs font-mono w-6 text-center leading-8 text-content-muted">
            {{ userId }}
          </span>
          <button
            @click="nextUser"
            :disabled="userId === 10 || isLoading"
            class="w-8 h-8 flex items-center justify-center rounded bg-secondary text-secondary-fg hover:bg-secondary-hover transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            &rarr;
          </button>
        </div>
      </div>

      <!-- State: Loading -->
      <div v-if="isLoading" class="py-12 flex justify-center">
        <span class="animate-pulse text-content-muted text-sm font-medium">Fetching data...</span>
      </div>

      <!-- State: Error -->
      <div
        v-else-if="error"
        class="p-4 rounded-lg bg-danger/10 border border-danger/20 text-danger text-sm flex flex-col gap-3"
      >
        <p>Gagal memuat data.</p>
        <p class="font-mono text-xs">{{ error.message }}</p>
        <button
          @click="refetch"
          class="px-3 py-1.5 rounded bg-danger text-danger-fg text-xs font-medium w-fit hover:opacity-90"
        >
          Coba Lagi
        </button>
      </div>

      <!-- State: Success (Data) -->
      <div v-else-if="user" class="flex flex-col gap-4">
        <div class="flex items-center gap-4">
          <div
            class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg"
          >
            {{ user.name.charAt(0) }}
          </div>
          <div>
            <p class="font-medium text-content">{{ user.name }}</p>
            <p class="text-xs text-content-secondary">{{ user.email }}</p>
          </div>
        </div>

        <div class="pt-4 border-t border-border-subtle flex flex-col gap-1">
          <span class="text-xs text-content-muted">Company</span>
          <span class="text-sm font-medium text-content">{{ user.company.name }}</span>
        </div>
      </div>
    </div>
  </main>
</template>
