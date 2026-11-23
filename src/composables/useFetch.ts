import { ref, toValue, watchEffect, type MaybeRefOrGetter, type Ref } from 'vue'

interface UseFetchReturn<T> {
  data: Ref<T | null>
  error: Ref<Error | null>
  isLoading: Ref<boolean>
  execute: () => Promise<void>
}

export function useFetch<T>(url: MaybeRefOrGetter<string>): UseFetchReturn<T> {
  const data = ref<T | null>(null) as Ref<T | null>
  const error = ref<Error | null>(null)
  const isLoading = ref(false)

  const execute = async (): Promise<void> => {
    isLoading.value = true
    error.value = null
    try {
      // toValue() akan me-resolve string, ref, atau getter menjadi string
      const urlValue = toValue(url)

      const response = await fetch(urlValue)

      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`)
      }

      const json = await response.json()
      data.value = json as T
    } catch (err) {
      error.value = err instanceof Error ? err : new Error('Unknown error occurred')
    } finally {
      isLoading.value = false
    }
  }

  watchEffect(() => {
    execute()
  })

  return { data, error, isLoading, execute }
}
