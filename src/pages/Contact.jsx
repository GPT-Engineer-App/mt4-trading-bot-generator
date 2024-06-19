import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} width="100%">
        <FormControl id="name">
          <FormLabel>Nom</FormLabel>
          <Input type="text" />
        </FormControl>
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="message">
          <FormLabel>Message</FormLabel>
          <Textarea />
        </FormControl>
        <Button colorScheme="teal" size="lg">Envoyer</Button>
      </VStack>
    </Container>
  );
};

export default Contact;