import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Image } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" py={10} bgImage="url('/images/new-contact-banner.jpg')" bgSize="cover" bgPosition="center">
      <VStack spacing={6} width="100%" bg="rgba(255, 255, 255, 0.9)" p={12} borderRadius="lg" boxShadow="xl">
        <FormControl id="name">
          <FormLabel color="blue.900" fontWeight="bold">Nom</FormLabel>
          <Input type="text" borderColor="blue.500" focusBorderColor="blue.700" />
        </FormControl>
        <FormControl id="email">
          <FormLabel color="blue.900" fontWeight="bold">Email</FormLabel>
          <Input type="email" borderColor="blue.500" focusBorderColor="blue.700" />
        </FormControl>
        <FormControl id="message">
          <FormLabel color="blue.900" fontWeight="bold">Message</FormLabel>
          <Textarea borderColor="blue.500" focusBorderColor="blue.700" />
        </FormControl>
        <Button colorScheme="blue" size="lg" _hover={{ transform: "scale(1.1)", transition: "transform 0.2s" }}>Envoyer</Button>
      </VStack>
    </Container>
  );
};

export default Contact;