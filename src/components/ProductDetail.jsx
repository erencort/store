import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Box, Image, Text, Spacer, Button, Flex } from "@chakra-ui/react";
import { fetchProducts } from "../redux/productSlice";
import { addCart } from "../firebase";

function ProductDetail() {
  const { itemId } = useParams();
  const dispatch = useDispatch();

  const allItems = useSelector((state) => state.product.productItems);
  const individualItem = allItems.filter((item) => itemId == item.id);
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    if (individualItem.length == 0) {
      dispatch(fetchProducts("/"));
    }
  }, []);

  const handleAddCart = async () => {
    await addCart({
      uid: user.userId,
      productName: individualItem[0]?.title,
      count: 1,
      img: individualItem[0]?.image,
      price: individualItem[0]?.price,
    });
  };

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
        <Box>
          <Text align="center" fontSize="5xl">
            {individualItem[0]?.title}
          </Text>
        </Box>
        <Image src={individualItem[0]?.image} mx="auto" my="10" />
        <Box my="5" w="70%" mx="auto">
          <Text align="center" fontSize="2xl">
            {individualItem[0]?.description}
          </Text>
        </Box>
        <Box w="40%" mx="auto" my="10">
          <Flex>
            <Link to="/products">
              <Button colorScheme="red">Back to products</Button>
            </Link>
            <Spacer />
            <Text fontSize="2xl">${individualItem[0]?.price}</Text>
            <Spacer />
            <Button disabled={!user} colorScheme="blue" onClick={handleAddCart}>
              Add to cart
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default ProductDetail;
