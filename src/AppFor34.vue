<script setup lang="ts">
import Card from './components/Card.vue'
import Modal from './components/Modal.vue'
import { ThemeKey } from './keys/injection-keys'
import { useDarkMode } from './composables/useDarkMode'
import { provide, ref } from 'vue'

// * Provide theme context diseluruh widget tree
const { isDark, toggleDarkMode } = useDarkMode()
provide(ThemeKey, { isDark, toggle: toggleDarkMode })

const isModalOpen = ref(false)
</script>

<template>
  <main class="min-h-screen bg-background p-8">
    <div class="max-w-xl mx-auto flex flex-col gap-6">
      <!-- Card: hanya default slot -->
      <Card>
        <p class="text-content-secondary text-sm">
          Ini Card paling simpel, hanya pakai default slot.
        </p>
      </Card>

      <!-- Card: dengan header + footer -->
      <Card shadow>
        <template #header>
          <h3 class="text-base font-semibold text-content">Judul Card</h3>
        </template>

        <p class="text-content-secondary text-sm">
          Konten utama ada di sini, di dalam default slot.
        </p>

        <template #footer>
          <span class="text-xs text-content-muted">Footer info di sini</span>
        </template>
      </Card>

      <!-- Tombol buka Modal -->
      <button
        @click="isModalOpen = true"
        class="px-4 py-2 rounded-lg bg-primary text-primary-fg text-sm font-medium hover:bg-primary-hover transition-colors w-fit"
      >
        Buka Modal
      </button>

      <!-- Dark mode toggle — inject dari ThemeKey -->
      <button
        @click="toggleDarkMode"
        class="px-4 py-2 rounded-lg bg-secondary text-secondary-fg text-sm hover:bg-secondary-hover transition-colors w-fit"
      >
        Toggle Dark Mode
      </button>
    </div>

    <!-- Modal dengan named slot footer -->
    <Modal :is-open="isModalOpen" title="Contoh Modal" @close="isModalOpen = false">
      <p>Ini konten di dalam Modal lewat default slot.</p>
      <p class="mt-2">Klik overlay atau tombol X untuk tutup.</p>

      <template #footer>
        <button
          @click="isModalOpen = false"
          class="px-4 py-2 rounded-lg bg-secondary text-secondary-fg text-sm hover:bg-secondary-hover transition-colors"
        >
          Batal
        </button>
        <button
          @click="isModalOpen = false"
          class="px-4 py-2 rounded-lg bg-primary text-primary-fg text-sm font-medium hover:bg-primary-hover transition-colors"
        >
          Konfirmasi
        </button>
      </template>
    </Modal>
  </main>
</template>
