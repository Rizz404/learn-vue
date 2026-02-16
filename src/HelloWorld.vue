<script setup lang="ts">
import { ref } from 'vue'

// * State management
const name = ref<string>('Learn Vue')
const age = ref<number>(0)
const isExcited = ref<boolean>(true)

// * Methods
// * Diakses ref diakes valuenya pake .value
const celebrateBirthday = () => {
  age.value++
}

const toggleExcitement = () => {
  isExcited.value = !isExcited.value
}

// * Computed value inline dulu
const greeting = () => {
  return isExcited.value ? `Hello, ${name.value}!` : `So your are not excited?`
}
</script>

<template>
  <div class="container">
    <!-- ! jangan lupa kalo func kasih () biar langsung bisa di eksekusi -->
    <h1>{{ greeting() }}</h1>
    <div class="info">
      <p>
        Name: <strong>{{ name }}</strong>
      </p>
      <p>
        Age: <strong>{{ age }}</strong> years old
      </p>
      <p>
        Excited? <strong>{{ isExcited ? 'YES! 🚀' : 'Not really 😐' }}</strong>
      </p>
    </div>
    <div class="actions">
      <button @click="celebrateBirthday" class="btn-primary">Birthday +1</button>
      <button @click="toggleExcitement" class="btn-secondary">
        {{ isExcited ? 'Calm Down' : 'Get Excited!' }}
      </button>
    </div>
    <p class="footer">Next year you will be {{ age + 1 }} years old!</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  font-family: Arial, sans-serif;
}

h1 {
  color: #42b883;
  margin-bottom: 1.5rem;
}

.info {
  background: #f4f4f4;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.info p {
  margin: 0.5rem 0;
  font-size: 1.1rem;
}

.actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 1rem;
}

button {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.2s;
}

button:hover {
  transform: scale(1.05);
}

.btn-primary {
  background: #42b883;
  color: white;
}

.btn-secondary {
  background: #35495e;
  color: white;
}

.footer {
  color: #666;
  font-style: italic;
  margin-top: 1rem;
}
</style>
