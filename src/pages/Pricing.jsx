import { Box, Container, Heading, SimpleGrid, Text, VStack, Image } from "@chakra-ui/react";

const Pricing = () => {
  return (
    <Container centerContent maxW="container.md" py={10} bgImage="url('/images/new-pricing-banner.jpg')" bgSize="cover" bgPosition="center">
      <VStack spacing={4} bg="rgba(255, 255, 255, 0.8)" p={10} borderRadius="md">
        <Heading as="h1" size="xl" color="blue.900">Nos Tarifs</Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={10} width="100%">
          <Box p={5} shadow="md" borderWidth="1px" _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}>
            <Heading fontSize="xl" color="blue.900">Petite Benne</Heading>
            <Text mt={4} color="gray.700">50€ par jour</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}>
            <Heading fontSize="xl" color="blue.900">Moyenne Benne</Heading>
            <Text mt={4} color="gray.700">75€ par jour</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}>
            <Heading fontSize="xl" color="blue.900">Grande Benne</Heading>
            <Text mt={4} color="gray.700">100€ par jour</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Pricing;