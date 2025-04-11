import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from '@tamagui/core'

// you usually export this from a tamagui.config.ts file
export const config = createTamagui(defaultConfig)

type AppConfig = typeof config

// make imports typed
declare module '@tamagui/core' {
  interface TamaguiCustomConfig extends AppConfig {}
}
