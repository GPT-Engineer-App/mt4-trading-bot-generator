import { Box, Container, Heading, Text, VStack, Button, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgImage="url('/images/new-homepage-banner.jpg')" bgSize="cover" bgPosition="center">
      <VStack spacing={4} bg="rgba(255, 255, 255, 0.8)" p={10} borderRadius="md">
        <Heading as="h1" size="2xl" color="blue.900">JO Multi-Services</Heading>
        <Text fontSize="lg" color="gray.700" textAlign="center">Nous offrons des services de location de benne pour tous vos besoins de gestion des déchets.</Text>
        <Box>
          <Link to="/contact">
            <Button colorScheme="blue" size="lg" m={2} _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}>Contactez-nous</Button>
          </Link>
          <Link to="/pricing">
            <Button colorScheme="blue" size="lg" m={2} _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}>Voir les tarifs</Button>
          </Link>
        </Box>
        <Box mt={6} p={4} bg="blue.900" borderRadius="md" color="white" textAlign="center">
          <Text fontSize="xl" fontWeight="bold">Besoin d'une benne rapidement?</Text>
          <Text fontSize="md">Contactez-nous dès maintenant pour un devis gratuit et une livraison rapide!</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;