import { VFC, memo } from "react";
import { Box, Wrap, WrapItem, Stack, Image } from "@chakra-ui/react";

export const UserManagement: VFC = memo(() => {
  return (
    <>
      <Wrap>
        <WrapItem>
          <Box w="260px" h="260px" bg="white" borderRadius="10px" shadow="md">
            <Stack textalign="center">
              <Image
                borderRadius="full"
                boxSize="160px"
                src="https://source.unsplash.com/random"
              />
            </Stack>
          </Box>
        </WrapItem>
      </Wrap>
    </>
  );
});
