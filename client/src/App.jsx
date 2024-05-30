import Navbar from "./components/Navbar";
import { Stack, Container, Text } from "@chakra-ui/react";
import UserGrid from "./components/UserGrid";

function App() {
  return (
    <Stack minM={"100vh"}>
      <Navbar />

      <Container maxW={"1200px"} my={4}>
        <Text
          fontSize={{ base: "3xl", md: "50" }}
          fontWeight={"bold"}
          letterSpacing={"2px"}
          textTransform={"uppercase"}
          textAlign={"center"}
          mb={8}
        >
          <Text
            as={"span"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
          >
            My Connections
          </Text>
          ✨
        </Text>
        <UserGrid />
      </Container>
    </Stack>
  );
}

export default App;
