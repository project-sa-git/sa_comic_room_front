import { Badge, Button, Card, Group, Image, Text } from '@mantine/core'

function MangaCard(props) {
  return (
    <Card p="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={props.manga.image}
          height={200}
          alt="Norway"
        />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{props.manga.data.title}</Text>
        <Badge color="pink" variant="light">
          {props.manga.price}
        </Badge>
      </Group>

      <Text size="sm" color="dimmed"  lineClamp={3}>
      {props.manga.data.desc}
      </Text>

      <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Book classic tour now
      </Button>
    </Card>
  )
}

export default MangaCard
