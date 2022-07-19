import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Box, Image, Text, Spacer, Button, Flex } from "@chakra-ui/react";

function ProductDetail() {
  const { itemId } = useParams();

  const allItems = useSelector((state) => state.product.items);
  const individualItem = allItems.filter((item) => itemId == item.id);

  return (
    <Box
      alignItems="center"
      w="75%"
      mx="auto"
      border="1px"
      borderColor="gray.400"
      my="5"
      borderRadius="lg"
    >
      <Box>
        <Text align="center" fontSize="5xl">
          {individualItem[0].title}
        </Text>
      </Box>
      <Image src={individualItem[0].image} mx="auto" my="10" />
      <Box my="5" w="70%" mx="auto">
        <Text align="center" fontSize="2xl">
          {individualItem[0].description}
        </Text>
      </Box>
      <Box w="40%" mx="auto" my="10">
        <Flex>
          <Link to="/products">
            <Button colorScheme="red">Back to products</Button>
          </Link>
          <Spacer />
          <Text fontSize="2xl">${individualItem[0].price}</Text>
          <Spacer />
          <Button colorScheme="blue">Add to cart</Button>
        </Flex>
      </Box>
    </Box>
  );
}

export default ProductDetail;
