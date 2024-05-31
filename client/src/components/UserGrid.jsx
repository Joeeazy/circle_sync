import { Grid, Flex, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import UserCard from "./UserCard";
import { BASE_URL } from "../App";
export default function UserGrid({ users, setUsers }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUsers = async () => {
      try {
        //fetch response from server
        const res = await fetch(BASE_URL + "/friends");
        //convert response to json format
        const data = await res.json();

        //console.log(data);

        if (!res.ok) {
          throw new Error(data.error);
        }
        //setUsers to the data
        setUsers(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getUsers();
  }, [setUsers]);

  //console.log(users);
  return (
    <>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={4}
      >
        {users.map((user) => (
          <UserCard key={user.id} user={user} setUsers={setUsers} />
        ))}
      </Grid>
      {loading && (
        <Flex justifyContent={"center"}>
          <Spinner size={"xl"} />
        </Flex>
      )}
      {!loading && users.length === 0 && (
        <Flex justifyContent={"center"}>
          <Text fontSize={"xl"}>
            <Text as={"span"} fontSize={"2xl"} fontWeight={"bold"} mr={2}>
              Sorry 😫
            </Text>
            No Connections Found
          </Text>
        </Flex>
      )}
    </>
  );
}
