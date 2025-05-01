import {
  BackgroundImage,
  Button,
  Center,
  Checkbox,
  Flex,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

export function SignInPage({ onClickSignUp }: { onClickSignUp?: () => void }) {
  return (
    <Flex>
      <BackgroundImage
        visibleFrom="md"
        flex="5"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
      >
        <Center h={400}>
          <Title order={1} c="white">
            Ecommerce
          </Title>
        </Center>
      </BackgroundImage>
      <Stack flex="4" p="md">
        <Title order={2}>Login</Title>
        <Flex align="center">
          <Text fz="xs">Don't have an account yet?</Text>
          <Button
            px="xs"
            size="xs"
            variant="transparent"
            onClick={onClickSignUp}
          >
            Sign Up
          </Button>
        </Flex>
        <TextInput label="Username or Email" placeholder="Username or Email" />
        <PasswordInput
          label="Password"
          placeholder="Password"
          type="password"
        />
        <Checkbox label="I agree with the terms and conditions" />
        <Button>Submit</Button>
      </Stack>
    </Flex>
  );
}
