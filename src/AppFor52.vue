<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFetch } from '@/composables/useFetch'

interface ProfileSection {
  id: number
  title: string
  summary: string
  facts: { label: string; value: string }[]
  repository: string
  repositoryLabel: string
}

const sectionId = ref(1)
const contentUrl = computed(() => `${import.meta.env.BASE_URL}profiles/${sectionId.value}.json`)
const { data: section, isLoading, error, execute: refetch } = useFetch<ProfileSection>(contentUrl)
</script>

<template>
  <main class="min-h-screen bg-background flex flex-col items-center justify-center p-8">
    <div class="w-full max-w-xl mb-6">
      <p class="text-xs font-mono text-content-muted uppercase tracking-widest mb-3">
        Learn Vue / Composition API
      </p>
      <h1 class="text-3xl font-semibold text-content mb-3">Developer profile explorer</h1>
      <p class="text-sm text-content-secondary leading-relaxed">
        A reactive profile viewer built with Vue and TypeScript. Explore the developer and the
        repositories behind these learning exercises.
      </p>
    </div>
    <section
      aria-live="polite"
      class="bg-surface border border-border rounded-2xl p-8 w-full max-w-xl flex flex-col gap-6"
    >
      <div class="flex items-center justify-between gap-4">
        <div class="flex items-center gap-3">
          <div
            class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold"
          >
            RR
          </div>
          <div>
            <p class="font-medium text-content">Rizqiansyah Ramadhan</p>
            <a href="https://github.com/Rizz404" class="text-xs text-primary">github.com/Rizz404</a>
          </div>
        </div>
        <div class="flex gap-2 items-center">
          <button
            aria-label="Previous profile section"
            @click="sectionId--"
            :disabled="sectionId === 1 || isLoading"
            class="w-8 h-8 rounded bg-secondary text-secondary-fg disabled:opacity-30"
          >
            &larr;
          </button>
          <span class="text-xs font-mono text-content-muted">{{ sectionId }} / 3</span>
          <button
            aria-label="Next profile section"
            @click="sectionId++"
            :disabled="sectionId === 3 || isLoading"
            class="w-8 h-8 rounded bg-secondary text-secondary-fg disabled:opacity-30"
          >
            &rarr;
          </button>
        </div>
      </div>
      <p v-if="isLoading" class="py-10 text-content-muted text-sm">Loading profile section...</p>
      <div v-else-if="error" class="p-4 rounded-lg bg-danger/10 text-danger text-sm">
        <p>Unable to load this profile section.</p>
        <p class="font-mono text-xs mt-2">{{ error.message }}</p>
        <button @click="refetch" class="mt-3 px-3 py-2 rounded bg-danger text-danger-fg">
          Try again
        </button>
      </div>
      <div v-else-if="section">
        <div class="border-t border-border-subtle pt-6">
          <h2 class="text-xl font-semibold text-content mb-3">{{ section.title }}</h2>
          <p class="text-sm text-content-secondary leading-relaxed mb-6">{{ section.summary }}</p>
          <dl class="flex flex-col gap-4">
            <div
              v-for="fact in section.facts"
              :key="fact.label"
              class="flex justify-between gap-6 border-b border-border-subtle pb-3"
            >
              <dt class="text-xs text-content-muted">{{ fact.label }}</dt>
              <dd class="text-sm text-content text-right">{{ fact.value }}</dd>
            </div>
          </dl>
          <a :href="section.repository" class="inline-block mt-6 text-sm font-medium text-primary"
            >{{ section.repositoryLabel }} &nearr;</a
          >
        </div>
      </div>
    </section>
  </main>
</template>
