import React, { useEffect } from "react";
import { fetchData } from "../redux/productSlice";
import Product from "./ProductCard";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { SimpleGrid, Box } from "@chakra-ui/react";
import UserBar from "./UserBar";

function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const products = useSelector((state) => state.product.items);
  const status = useSelector((state) => state.product.status);
  const error = useSelector((state) => state.product.error);

  if (error) {
    return (
      <div>
        <UserBar />
        <Box textAlign="center">{error}</Box>
      </div>
    );
  }

  return (
    <div>
      <UserBar />
      {status === "loading" && <Box textAlign="center">Loading</Box>}
      <SimpleGrid minChildWidth="350px" spacing="40px">
        {products.map((item) => (
          <Product
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.image}
            price={item.price}
            desc={item.description}
            category={item.category}
          />
        ))}
      </SimpleGrid>
    </div>
  );
}

export default Products;
