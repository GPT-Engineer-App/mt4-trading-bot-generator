import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Image } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" py={10} bgImage="url('/images/new-contact-banner.jpg')" bgSize="cover" bgPosition="center">
      <VStack spacing={4} width="100%" bg="rgba(255, 255, 255, 0.8)" p={10} borderRadius="md">
        <FormControl id="name">
          <FormLabel color="blue.900">Nom</FormLabel>
          <Input type="text" borderColor="blue.500" />
        </FormControl>
        <FormControl id="email">
          <FormLabel color="blue.900">Email</FormLabel>
          <Input type="email" borderColor="blue.500" />
        </FormControl>
        <FormControl id="message">
          <FormLabel color="blue.900">Message</FormLabel>
          <Textarea borderColor="blue.500" />
        </FormControl>
        <Button colorScheme="blue" size="lg" _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}>Envoyer</Button>
      </VStack>
    </Container>
  );
};

export default Contact;