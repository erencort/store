import React from "react";
import { Box, Image, Flex, Button, Spacer } from "@chakra-ui/react/";
import { Link } from "react-router-dom";

function Product({ title, img, price, desc, category, id }) {
  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      my="10"
    >
      <Image src={img} alt="product-img" maxH="200px" mx="auto" mt="7" />

      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {title}
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          noOfLines={1}
        >
          {desc}
        </Box>

        <Box>${price}</Box>

        <Box display="flex" mt="2" alignItems="center">
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {category}
          </Box>
        </Box>
        <Flex mt="5">
          <Button colorScheme="blue">Add to cart</Button>
          <Spacer />
          <Link to={`/products/${id}`}>
            <Button colorScheme="red">Details</Button>
          </Link>
        </Flex>
      </Box>
    </Box>
  );
}

export default Product;
