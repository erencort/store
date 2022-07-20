import React, { useEffect } from "react";
import { fetchProducts } from "../redux/productSlice";
import Product from "./ProductCard";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { SimpleGrid, Box } from "@chakra-ui/react";
import UserBar from "./UserBar";
import CategoryFilter from "./CategoryFilter";

function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts("/"));
  }, [dispatch]);

  const products = useSelector((state) => state.product.productItems);
  const productStatus = useSelector((state) => state.product.productStatus);
  const productError = useSelector((state) => state.product.productError);

  if (productError) {
    return (
      <div>
        <UserBar />
        <Box textAlign="center">{productError}</Box>
      </div>
    );
  }

  return (
    <div>
      <UserBar />
      <CategoryFilter />
      {productStatus === "loading" && <Box textAlign="center">Loading...</Box>}
      {productStatus !== "loading" && !productStatus !== "failed" && (
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
      )}
    </div>
  );
}

export default Products;
