import { Platform } from 'react-native'
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context'

export const useAdjustedSafeAreaInsets = (): EdgeInsets => {
  const insets = useSafeAreaInsets()

  return {
    ...insets,
    top:
      Platform.select({ ios: insets.top, android: insets.top === 0 ? 16 : insets.top }) ||
      insets.top,
    bottom:
      Platform.select({ ios: insets.bottom, android: insets.bottom === 0 ? 16 : insets.bottom }) ||
      insets.bottom,
  }
}
