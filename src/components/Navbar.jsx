import { Box, Flex, Link as ChakraLink, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex alignItems="center">
        <ChakraLink as={Link} to="/" color="white" fontWeight="bold" fontSize="lg" mr={4}>
          Accueil
        </ChakraLink>
        <Spacer />
        <ChakraLink as={Link} to="/contact" color="white" mr={4}>
          Contact
        </ChakraLink>
        <ChakraLink as={Link} to="/pricing" color="white">
          Tarifs
        </ChakraLink>
      </Flex>
    </Box>
  );
};

export default Navbar;