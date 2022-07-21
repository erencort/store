import { Box, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import UserBar from "./UserBar";

function Cart() {
  const cart = useSelector((state) => state.product.cart);
  return (
    <div>
      <UserBar />
      <SimpleGrid minChildWidth="170px" spacing="40px">
        {cart.map((item) => (
          <Box
            key={item.id}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            my="10"
          >
            <Box>
              <Image src={item.img} maxH="100" my="7" mx="auto" />
            </Box>
            <Text>{item.productName}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Cart;
