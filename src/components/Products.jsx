import React, { useEffect } from "react";
import { fetchData } from "../redux/productSlice";
import Product from "./ProductCard";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router-dom";
import { SimpleGrid } from "@chakra-ui/react";
import UserBar from "./UserBar";

function Products() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const user = useSelector((state) => state.auth.user);
  const products = useSelector((state) => state.product.items);

  return (
    <div>
      <UserBar />
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
