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

function Cart() {
  const cart = useSelector((state) => state.product.cart);

  const deleteHandle = async (id) => {
    await deleteCart(id);
  };

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
            <Flex>
              <Button
                mt={5}
                mb={2}
                colorScheme="red"
                onClick={() => deleteHandle(item.id)}
              >
                Delete
              </Button>
              <Spacer />
              <Link to={`/products/${item.productId}`}>
                <Button mt={5} mb={2}>
                  Details
                </Button>
              </Link>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Cart;
