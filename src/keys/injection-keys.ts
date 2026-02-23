import type { InjectionKey, Ref } from 'vue'

export interface AppTheme {
  isDark: Ref<boolean>
  toggle: () => void
}

export const ThemeKey: InjectionKey<AppTheme> = Symbol('app-theme')
