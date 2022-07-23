import { Box, List, ListItem, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Receipt() {
  const cart = useSelector((state) => state.product.cart);
  console.log(cart);

  return (
    <div>
      {cart.length > 0 && (
        <Box w="50%" h="50%" mx="auto" textAlign="center" mt={5}>
          <Text fontSize="3xl">
            <strong>Receipt</strong>
          </Text>
          <List mt={5} spacing={3}>
            {cart.map((item) => (
              <ListItem>
                <Text fontSize="xl">
                  {item.productName}
                  <Text display="inline" fontSize="xl" ml={10}>
                    ${item.price}
                  </Text>
                  <Text display="inline" fontSize="xl" ml={10}>
                    X {item.count}
                  </Text>
                </Text>
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </div>
  );
}

export default Receipt;
