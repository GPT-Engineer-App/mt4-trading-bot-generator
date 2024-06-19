import { Box, Container, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Service de Location de Benne</Heading>
        <Text fontSize="lg">Nous offrons des services de location de benne pour tous vos besoins de gestion des déchets.</Text>
        <Box>
          <Link to="/contact">
            <Button colorScheme="teal" size="lg" m={2}>Contactez-nous</Button>
          </Link>
          <Link to="/pricing">
            <Button colorScheme="teal" size="lg" m={2}>Voir les tarifs</Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;