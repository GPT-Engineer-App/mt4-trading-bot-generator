import { Box, Container, Heading, Text, VStack, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Image src="/images/homepage-banner.jpg" alt="Waste Management" width="100%" mb={4} />
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" color="teal.700">Service de Location de Benne</Heading>
        <Text fontSize="lg" color="gray.600">Nous offrons des services de location de benne pour tous vos besoins de gestion des déchets.</Text>
        <Box>
          <Link to="/contact">
            <Button colorScheme="teal" size="lg" m={2} _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}>Contactez-nous</Button>
          </Link>
          <Link to="/pricing">
            <Button colorScheme="teal" size="lg" m={2} _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}>Voir les tarifs</Button>
          </Link>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;