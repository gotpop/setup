import { Header, Title } from "@mantine/core"
import { NextLink } from "@mantine/next"

export default function HeaderItem() {
  return (
    <Header height={60} p="md">
      <NextLink href={"/"} legacyBehavior>
        <Title order={3}>Interview</Title>
      </NextLink>
    </Header>
  )
}
