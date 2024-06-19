import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, VStack, Image } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <Image src="/images/contact-banner.jpg" alt="Contact Us" width="100%" mb={4} />
      <VStack spacing={4} width="100%">
        <FormControl id="name">
          <FormLabel color="teal.700">Nom</FormLabel>
          <Input type="text" borderColor="teal.500" />
        </FormControl>
        <FormControl id="email">
          <FormLabel color="teal.700">Email</FormLabel>
          <Input type="email" borderColor="teal.500" />
        </FormControl>
        <FormControl id="message">
          <FormLabel color="teal.700">Message</FormLabel>
          <Textarea borderColor="teal.500" />
        </FormControl>
        <Button colorScheme="teal" size="lg" _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}>Envoyer</Button>
      </VStack>
    </Container>
  );
};

export default Contact;