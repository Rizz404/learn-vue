<script setup lang="ts">
import { ref } from 'vue'
import CustomInput from './components/CustomInput.vue'

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/

const username = ref('')
const email = ref('')
const password = ref('')
const emailError = ref('')
const passwordError = ref('')

const handleEmailBlur = () => {
  if (email.value && !email.value.includes('@')) {
    emailError.value = 'Format email tidak valid'
  } else {
    emailError.value = ''
  }
}

const handlePasswordBlur = () => {
  if (!password.value) {
    passwordError.value = ''
    return
  }
  if (!passwordRegex.test(password.value)) {
    passwordError.value =
      'Password minimal 8 karakter, mengandung huruf besar, huruf kecil, dan angka'
  } else {
    passwordError.value = ''
  }
}

const handleClear = () => {
  console.log('Input cleared!')
}
</script>

<template>
  <main class="min-h-screen bg-background flex items-center justify-center p-8">
    <div
      class="bg-surface border border-border rounded-[--radius-card] p-8 flex flex-col gap-6 w-full max-w-sm"
    >
      <h2 class="text-lg font-semibold text-content">Form Demo</h2>

      <CustomInput
        v-model="username"
        label="Username"
        placeholder="Masukkan username..."
        @clear="handleClear"
      />

      <CustomInput
        v-model="email"
        label="Email"
        type="email"
        placeholder="contoh@email.com"
        :error="emailError"
        @blur="handleEmailBlur"
      />

      <CustomInput
        v-model="password"
        label="Password"
        type="password"
        placeholder="********"
        :error="passwordError"
        @blur="handlePasswordBlur"
      />

      <!-- Live preview -->
      <div class="p-3 rounded-lg bg-surface-raised text-sm text-content-secondary space-y-1">
        <p>
          Username: <span class="text-content font-medium">{{ username || '-' }}</span>
        </p>
        <p>
          Email: <span class="text-content font-medium">{{ email || '-' }}</span>
        </p>
      </div>
    </div>
  </main>
</template>
