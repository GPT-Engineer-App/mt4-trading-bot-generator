import { Box, Container, Heading, SimpleGrid, Text, VStack, Image } from "@chakra-ui/react";

const Pricing = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <Image src="/images/pricing-banner.jpg" alt="Pricing" width="100%" mb={4} />
      <VStack spacing={4}>
        <Heading as="h1" size="xl" color="teal.700">Nos Tarifs</Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={10} width="100%">
          <Box p={5} shadow="md" borderWidth="1px" _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}>
            <Heading fontSize="xl" color="teal.700">Petite Benne</Heading>
            <Text mt={4} color="gray.600">50€ par jour</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}>
            <Heading fontSize="xl" color="teal.700">Moyenne Benne</Heading>
            <Text mt={4} color="gray.600">75€ par jour</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px" _hover={{ transform: "scale(1.05)", transition: "transform 0.2s" }}>
            <Heading fontSize="xl" color="teal.700">Grande Benne</Heading>
            <Text mt={4} color="gray.600">100€ par jour</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Pricing;