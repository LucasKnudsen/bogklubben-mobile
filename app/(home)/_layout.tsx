import { Tabs } from 'expo-router'

export default function HomeTabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Bøger',
        }}
      />
      <Tabs.Screen name='quiz' options={{ title: 'Quiz' }} />

      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profil',
        }}
      />
    </Tabs>
  )
}
