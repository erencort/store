import React from "react";
import { Box, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../firebase";
import { logout as handleLogout } from "../redux/authSlice";

function UserBar() {
  const user = useSelector((state) => state.auth.user);
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
        <Box>
          <Box>Welcome {user.email} !</Box>
          <Button onClick={logoutHandle}>Logout</Button>
        </Box>
      ) : (
        <Box>
          <Link to="/   login">
            <Button colorScheme="blue">Login</Button>
          </Link>
        </Box>
      )}
    </Box>
  );
}

export default UserBar;
