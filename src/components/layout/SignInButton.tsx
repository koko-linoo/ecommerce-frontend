import { SignInPage } from "@/pages/auth/SignIn";
import { SignUpPage } from "@/pages/auth/SignUp";
import { Button, Modal, useModalsStack } from "@mantine/core";

export function SignInButton() {
  const stack = useModalsStack(["signIn", "signUp"]);
  return (
    <>
      <Button
        fz="xs"
        fw="bold"
        variant="transparent"
        onClick={() => stack.open("signIn")}
      >
        Sign In / Up
      </Button>
      <Modal.Stack>
        <Modal
          centered
          padding={0}
          withCloseButton={false}
          {...stack.register("signIn")}
          size="xl"
          onClose={() => stack.closeAll()}
        >
          <SignInPage
            onClickSignUp={() => {
              stack.close("signIn");
              stack.open("signUp");
            }}
          />
        </Modal>
        <Modal
          centered
          padding={0}
          withCloseButton={false}
          {...stack.register("signUp")}
          onClose={() => stack.closeAll()}
        >
          <SignUpPage
            onClickSignIn={() => {
              stack.close("signUp");
              stack.open("signIn");
            }}
          />
        </Modal>
      </Modal.Stack>
    </>
  );
}
