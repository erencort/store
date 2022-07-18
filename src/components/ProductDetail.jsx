import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const { itemId } = useParams();
  return <div>product id = {itemId}</div>;
}

export default ProductDetail;
