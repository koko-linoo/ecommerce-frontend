import {
  Button,
  Checkbox,
  Flex,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";

export function SignUpPage({ onClickSignIn }: { onClickSignIn?: () => void }) {
  return (
    <Stack flex="4" p="md">
      <Title order={2}>Sign Up</Title>
      <Flex align="center">
        <Text fz="xs">Already have an account?</Text>
        <Button px="xs" size="xs" variant="transparent" onClick={onClickSignIn}>
          Sign In
        </Button>
      </Flex>
      <TextInput label="Username" placeholder="Username" />
      <TextInput label="Email" placeholder="Email" />
      <PasswordInput label="Password" placeholder="Password" type="password" />
      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm Password"
        type="password"
      />
      <Checkbox label="I agree with the terms and conditions" />
      <Button>Sign Up</Button>
    </Stack>
  );
}
