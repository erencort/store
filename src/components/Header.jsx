import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const user = useSelector((state) => state.auth.user);
  return (
    <Box borderBottom="1px">
      <Box textAlign="center">
        <Text fontSize="6xl">Store</Text>
      </Box>
    </Box>
  );
}

export default Header;
