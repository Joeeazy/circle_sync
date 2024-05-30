import {
  Card,
  CardHeader,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  CardBody,
  IconButton,
} from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import EditModal from "./EditModal ";

export default function UserCard({ user }) {
  return (
    <Card>
      <CardHeader>
        <Flex gap={4}>
          {/* left side */}
          <Flex flex={"1"} gap={"4"} alignItems={"center"}>
            <Avatar src="https://avatar.iran.liara.run/public" />

            <Box>
              <Heading size="sm">{user.name}</Heading>
              <Text>{user.role}</Text>
            </Box>
          </Flex>
          {/* right side */}
          <Flex>
            <EditModal />
            <IconButton
              variant="ghost"
              colorScheme="red"
              size={"sm"}
              aria-lable="See menu"
              icon={<BiTrash size={20} />}
            />
          </Flex>
        </Flex>
      </CardHeader>
      <CardBody>
        <Text>{user.description}</Text>
      </CardBody>
    </Card>
  );
}
