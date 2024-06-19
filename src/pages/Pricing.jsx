import { Box, Container, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";

const Pricing = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Nos Tarifs</Heading>
        <SimpleGrid columns={[1, null, 2]} spacing={10} width="100%">
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Petite Benne</Heading>
            <Text mt={4}>50€ par jour</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Moyenne Benne</Heading>
            <Text mt={4}>75€ par jour</Text>
          </Box>
          <Box p={5} shadow="md" borderWidth="1px">
            <Heading fontSize="xl">Grande Benne</Heading>
            <Text mt={4}>100€ par jour</Text>
          </Box>
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Pricing;