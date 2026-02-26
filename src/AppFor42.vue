<script setup lang="ts">
import SearchBox from './components/SearchBox.vue'

const handleSearch = (query: string) => {
  console.log('[App] Search triggered:', query)
}
</script>

<template>
  <main class="min-h-screen bg-background flex items-center justify-center p-8">
    <SearchBox placeholder="Search todo" :debounce-ms="400" @search="handleSearch" />
  </main>
</template>
