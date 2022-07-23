import {
  Box,
  Image,
  SimpleGrid,
  Text,
  Button,
  Spacer,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import UserBar from "./UserBar";
import { deleteCart } from "../firebase";
import { Link } from "react-router-dom";
import { addCart } from "../firebase";
import Receipt from "./Receipt";

function Cart() {
  const cart = useSelector((state) => state.product.cart);
  const user = useSelector((state) => state.auth.user);

  const deleteHandle = async (id) => {
    await deleteCart(id);
  };

  const handleAddCart = async (item) => {
    await addCart({
      uid: user.userId,
      productName: item.productName,
      count: item.count,
      img: item.img,
      productId: item.id,
    });
  };

  return (
    <div>
      <UserBar />
      <SimpleGrid minChildWidth="170px" spacing="40px" mx={5}>
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
              <Image src={item.img} maxH="90" my="7" mx="auto" />
            </Box>
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {item.productName}
            </Box>
            <Flex w="80%" alignItems="center" mx="auto">
              <Button
                mt={5}
                mb={2}
                colorScheme="red"
                onClick={() => deleteHandle(item)}
              >
                Delete
              </Button>
              <Spacer />
              <Text mt={5} mb={2}>
                {item.count}
              </Text>
              <Spacer />
              <Button
                onClick={() => handleAddCart(item)}
                colorScheme="blue"
                mt={5}
                mb={2}
              >
                Add
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
      <Receipt />
    </div>
  );
}

export default Cart;
