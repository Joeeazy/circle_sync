import {
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  Flex,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  RadioGroup,
  Radio,
  ModalFooter,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiAddToQueue } from "react-icons/bi";
import { BASE_URL } from "../App";

export default function CreateUserModel({ setUsers }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    role: "",
    description: "",
    gender: "",
  });

  const toast = useToast();

  const handleCreateUser = async (e) => {
    e.preventDefault(); //prevents page reload
    setLoading(true);
    try {
      //send a post request to the endpoint
      const res = await fetch(BASE_URL + "/friends", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        //send data to server json.stringify
        body: JSON.stringify(inputs),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error);
      }
      toast({
        status: "success",
        title: "Yayy 🎉",
        description: "Successfuly created a new connection",
        duration: 2000,
        position: "top-center",
      });
      onClose();
      setUsers((prevUsers) => [...prevUsers, data]);
      //clear inputs
      setInputs({
        name: "",
        role: "",
        description: "",
        gender: "",
      });
    } catch (error) {
      toast({
        status: "error",
        title: "An error occured 😶",
        description: error.message,
        duration: 2000,
        position: "top-center",
      });
    } finally {
      setLoading(false);
      // setInputs({
      //   name: "",
      //   role: "",
      //   description: "",
      //   gender: "",
      // });
    }
  };
  return (
    <>
      <Button onClick={onOpen}>
        <BiAddToQueue size={20} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <form onSubmit={handleCreateUser}>
          <ModalContent>
            <ModalHeader>My New Friend 👩🏻‍🤝‍🧑🏻</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <Flex alignItems={"center"} gap={4}>
                {/* left */}
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input
                    placeholder="John Doe"
                    value={inputs.name}
                    onChange={(e) =>
                      setInputs({ ...inputs, name: e.target.value })
                    }
                  />
                </FormControl>
                {/* right */}
                <FormControl>
                  <FormLabel>Role</FormLabel>
                  <Input
                    placeholder="Software Engineer"
                    value={inputs.role}
                    onChange={(e) =>
                      setInputs({ ...inputs, role: e.target.value })
                    }
                  />
                </FormControl>
              </Flex>
              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  resize={"none"}
                  overflowY={"hidden"}
                  placeholder="A software Engineer that love coding and building things"
                  value={inputs.description}
                  onChange={(e) =>
                    setInputs({ ...inputs, description: e.target.value })
                  }
                />
              </FormControl>

              <RadioGroup mt={4}>
                <Flex gap={5}>
                  <Radio
                    value="male"
                    onChange={(e) =>
                      setInputs({ ...inputs, gender: e.target.value })
                    }
                  >
                    Male
                  </Radio>
                  <Radio
                    value="female"
                    onChange={(e) =>
                      setInputs({ ...inputs, gender: e.target.value })
                    }
                  >
                    Female
                  </Radio>
                </Flex>
              </RadioGroup>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit" loading={loading}>
                Add
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </form>
      </Modal>
    </>
  );
}
