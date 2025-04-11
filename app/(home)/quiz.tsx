import { SafeScreen } from '@/shared/components'
import { Plus } from '@tamagui/lucide-icons'
import { Button, Heading, View } from 'tamagui'

export default function QuizRoute() {
  return (
    <SafeScreen>
      <View>
        <Heading size='$12'>Quiz</Heading>
        <Button icon={<Plus size='$4' />}>Hello world</Button>
      </View>
    </SafeScreen>
  )
}
