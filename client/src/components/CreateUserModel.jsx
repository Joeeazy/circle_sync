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
} from "@chakra-ui/react";
import { BiAddToQueue } from "react-icons/bi";

export default function CreateUserModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>
        <BiAddToQueue size={20} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>My New Friend 👩🏻‍🤝‍🧑🏻</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Flex alignItems={"center"} gap={4}>
              {/* left */}
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input placeholder="John Doe" />
              </FormControl>
              {/* right */}
              <FormControl>
                <FormLabel>Role</FormLabel>
                <Input placeholder="Software Engineer" />
              </FormControl>
            </Flex>
            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Textarea
                resize={"none"}
                overflowY={"hidden"}
                placeholder="A software Engineer that love coding and building things"
              />
            </FormControl>

            <RadioGroup mt={4}>
              <Flex gap={5}>
                <Radio value="male">Male</Radio>
                <Radio value="female">Female</Radio>
              </Flex>
            </RadioGroup>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Add
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
