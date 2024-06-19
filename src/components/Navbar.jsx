import { Box, Flex, Link as ChakraLink, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.700" px={4} py={2}>
      <Flex alignItems="center">
        <ChakraLink as={Link} to="/" color="white" fontWeight="bold" fontSize="lg" mr={4} _hover={{ color: "teal.300", transition: "color 0.2s" }}>
          Accueil
        </ChakraLink>
        <Spacer />
        <ChakraLink as={Link} to="/contact" color="white" mr={4} _hover={{ color: "teal.300", transition: "color 0.2s" }}>
          Contact
        </ChakraLink>
        <ChakraLink as={Link} to="/pricing" color="white" _hover={{ color: "teal.300", transition: "color 0.2s" }}>
          Tarifs
        </ChakraLink>
      </Flex>
    </Box>
  );
};

export default Navbar;