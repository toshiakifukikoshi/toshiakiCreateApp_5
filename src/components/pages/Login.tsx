import { memo, VFC } from "react";

import { Flex, Box, Heading, Divider, Input, Stack } from "@chakra-ui/react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
  return (
    <>
      <Flex align="center" justify="center" height="100vh" shadow="md">
        <Box bg="white" w="sm" p={4} borderRadius="md">
          <Heading as="h1" size="lg" textAlign="center">
            ユーザー管理アプリ
          </Heading>
          <Divider my={4} />
          <Stack spacing={6} py={4} px={10}>
            <Input placeholder="ユーザーID" />
            <PrimaryButton>ログイン</PrimaryButton>
          </Stack>
        </Box>
      </Flex>
    </>
  );
});
