import {
  Container,
  Box,
  Flex,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import CreateUserModel from "./CreateUserModel";

export default function Navbar({ setUsers }) {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"900px"}>
      <Box
        px={4}
        my={4}
        borderRadius={5}
        bg={useColorModeValue("gray.300", "gray.700")}
      >
        <Flex h="16" alignItems={"center"} justifyContent={"space-between"}>
          {/* left flex */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={3}
            display={{ base: "none", sm: "flex" }}
          >
            <img
              src="/LinkedIn.png.webp"
              alt="React-log"
              width={40}
              height={30}
            />
            <Text fontSize={"40"} textColor={"white"}>
              +
            </Text>

            <img
              src="/github-logo.png"
              alt="React-log"
              width={45}
              height={45}
            />
            <Text fontSize={"40"} textColor={"white"}>
              =
            </Text>
            <img src="/explode.png" alt="React-log" width={45} height={45} />
          </Flex>
          {/* right flex */}
          <Flex gap={3} alignItems="center">
            <Text
              fontSize={"lg"}
              fontWeight={500}
              display={{ base: "none", md: "block" }}
              textColor={"white"}
            >
              Connects🔥
            </Text>
            {/* change theme color */}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <IoMoon /> : <LuSun size={20} />}
            </Button>
            <CreateUserModel setUsers={setUsers} />
          </Flex>
        </Flex>
      </Box>
    </Container>
  );
}
