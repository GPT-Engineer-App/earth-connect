import React from "react";
import { Box, Button, Container, Input, InputGroup, InputLeftElement, VStack, Text, Divider, Image, InputRightElement, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Textarea } from "@chakra-ui/react";
import { FaSearch, FaUserFriends, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={5}>
        <Text fontSize="4xl" fontWeight="bold">
          Shared Google Earth Experience
        </Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input placeholder="Search for locations" />
        </InputGroup>
        <Divider />
        <Text fontSize="2xl" textAlign="center">
          Google Earth Integration Placeholder
        </Text>
        <Box w="full" h="400px" bg="gray.200" display="flex" alignItems="center" justifyContent="center" borderRadius="md">
          <Text>Google Earth Would Be Here</Text>
        </Box>
        <Divider />
        <Button leftIcon={<FaUserFriends />} colorScheme="teal" variant="solid" onClick={onOpen}>
          Open Chat
        </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Chat with Friends</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing={4}>
                <Box w="full" h="300px" bg="gray.100" overflowY="auto">
                  {/* Chat messages would be dynamically loaded here */}
                </Box>
                <InputGroup>
                  <Input placeholder="Type a message..." />
                  <InputRightElement>
                    <IconButton aria-label="Send message" icon={<FaPaperPlane />} colorScheme="teal" />
                  </InputRightElement>
                </InputGroup>
              </VStack>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </VStack>
    </Container>
  );
};

export default Index;
