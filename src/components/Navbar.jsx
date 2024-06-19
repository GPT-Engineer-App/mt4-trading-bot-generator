import { Box, Flex, Link as ChakraLink, Spacer, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="blue.900" px={4} py={2}>
      <Flex alignItems="center">
        <Image src="/images/logo.png" alt="Logo" boxSize="50px" mr={4} />
        <ChakraLink as={Link} to="/" color="white" fontWeight="bold" fontSize="xl" mr={4} _hover={{ color: "blue.300", transition: "color 0.2s" }}>
          Accueil
        </ChakraLink>
        <Spacer />
        <ChakraLink as={Link} to="/contact" color="white" mr={4} _hover={{ color: "blue.300", transition: "color 0.2s" }}>
          Contact
        </ChakraLink>
        <ChakraLink as={Link} to="/pricing" color="white" _hover={{ color: "blue.300", transition: "color 0.2s" }}>
          Tarifs
        </ChakraLink>
      </Flex>
    </Box>
  );
};

export default Navbar;