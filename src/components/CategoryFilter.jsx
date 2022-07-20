import React, { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { fetchCategories, fetchProducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";

function CategoryFilter() {
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const categories = useSelector((state) => state.product.categories);

  const filterHandle = (data) => {
    dispatch(fetchProducts(data));
    setSelectedCategory(data);
  };

  return (
    <div>
      <Button
        onClick={() => filterHandle("")}
        px={4}
        py={1}
        mx={5}
        rounded={"md"}
      >
        all
      </Button>
      {categories.map((item) => (
        <Button
          onClick={() => filterHandle(`/category/${item}`)}
          px={4}
          py={1}
          mx={5}
          rounded={"md"}
        >
          {item}
        </Button>
      ))}
    </div>
  );
}

export default CategoryFilter;
