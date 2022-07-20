import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../firebase";
import { logout as handleLogout } from "../redux/authSlice";

function UserBar() {
  const user = useSelector((state) => state.auth.user);
  const cart = useSelector((state) => state.product.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandle = async () => {
    await logOut();
    dispatch(handleLogout());
    navigate("/login");
  };

  return (
    <Box my="5" borderBottom="1px">
      {user ? (
        <Box ml="5">
          <Box>Welcome!</Box>
          <Button colorScheme="red" my="5" onClick={logoutHandle}>
            Logout
          </Button>
          <Link to="/cart">
            <Button mx={5} colorScheme="blue">
              Cart ({cart.length})
            </Button>
          </Link>
          <Link to="/products">
            <Button colorScheme="gray">Products</Button>
          </Link>
        </Box>
      ) : (
        <Box ml="5">
          <Link to="/login">
            <Button my="5" colorScheme="blue">
              Login
            </Button>
          </Link>
          <Text>You have to login for shopping!</Text>
        </Box>
      )}
    </Box>
  );
}

export default UserBar;
