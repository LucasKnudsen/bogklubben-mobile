import 'expo-dev-client'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { TamaguiProvider } from '@tamagui/core'
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister'
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

import * as Font from 'expo-font'

import { Stack } from 'expo-router'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useLayoutEffect, useState } from 'react'

import { config } from '../tamagui.config'

SplashScreen.preventAutoHideAsync()

SplashScreen.setOptions({
  duration: 1000,
  fade: true,
})

const asyncStoragePersister = createAsyncStoragePersister({
  storage: AsyncStorage,
})

const queryClient = new QueryClient()

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
          InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
        })
      } catch (e) {
        console.warn(e)
      } finally {
        setAppIsReady(true)
      }
    }

    prepare()
  }, [])

  useLayoutEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{
        persister: asyncStoragePersister,
      }}
    >
      <TamaguiProvider config={config}>
        <Stack>
          <Stack.Screen name='(home)' options={{ headerShown: false }} />
        </Stack>
      </TamaguiProvider>
    </PersistQueryClientProvider>
  )
}
