import { useAdjustedSafeAreaInsets } from '@/shared/hooks'
import { Keyboard, Pressable } from 'react-native'
import { View, ViewProps } from 'tamagui'

type SafeAreaWrapperProps = {
  hideKeyboardOnTap?: boolean
  children: React.ReactNode
} & ViewProps

export const SafeScreen = ({ children, hideKeyboardOnTap, ...viewProps }: SafeAreaWrapperProps) => {
  const insets = useAdjustedSafeAreaInsets()

  return (
    <View
      pt={insets.top}
      pl={insets.left}
      pr={insets.right}
      pb={insets.bottom}
      flex={1}
      bg='$background0'
      position='relative'
      {...viewProps}
    >
      {hideKeyboardOnTap ? (
        <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss} accessible={false}>
          {children}
        </Pressable>
      ) : (
        children
      )}
    </View>
  )
}
