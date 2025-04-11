import { SafeScreen } from '@/shared/components'
import { Plus } from '@tamagui/lucide-icons'
import { Button, Heading, View } from 'tamagui'

export default function BooksRoute() {
  return (
    <SafeScreen>
      <View>
        <Heading size='$12'>Books</Heading>
        <Button icon={<Plus size='$4' />}>Hello world</Button>
      </View>
    </SafeScreen>
  )
}
