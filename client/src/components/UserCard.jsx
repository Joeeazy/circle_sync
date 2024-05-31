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
  useToast,
} from "@chakra-ui/react";
import { BiTrash } from "react-icons/bi";
import { BASE_URL } from "../App";
import EditModal from "./EditModal ";

export default function UserCard({ user, setUsers }) {
  const toast = useToast();
  const handleDeleteUser = async () => {
    try {
      const res = await fetch(BASE_URL + "/friends/" + user.id, {
        method: "DELETE",
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      // filter deleted user
      setUsers((prevUsers) => prevUsers.filter((u) => u.id !== user.id));
      toast({
        title: "success",
        description: "Connection deleted successfully",
        status: "success",
        duration: 2000,
        position: "top-center",
      });
    } catch (error) {
      toast({
        title: "An error occurred",
        description: error.message,
        status: "error",
        duration: 2000,
        isClosable: true,
        position: "top-center",
      });
    }
  };
  return (
    <Card>
      <CardHeader>
        <Flex gap={4}>
          {/* left side */}
          <Flex flex={"1"} gap={"4"} alignItems={"center"}>
            <Avatar src={user.imgUrl} />

            <Box>
              <Heading size="sm">{user.name}</Heading>
              <Text>{user.role}</Text>
            </Box>
          </Flex>
          {/* right side */}
          <Flex>
            {/* {edit icon} */}
            <EditModal />
            {/* delete button */}
            <IconButton
              variant="ghost"
              colorScheme="red"
              size={"sm"}
              aria-label="See menu"
              icon={<BiTrash size={20} />}
              onClick={handleDeleteUser}
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
