import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { logOut } from "../firebase";
import { logout as logoutHandle } from "../redux/authSlice";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useNavigate } from "react-router-dom";
import Products from "./Products";
import { Flex, Button, Box, Spacer } from "@chakra-ui/react";

function Home() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut();
    dispatch(logoutHandle());
    navigate("/login");
  };

  if (user) {
    return (
      <div>
        <div>hosgeldin</div>
        <button onClick={handleLogout}>Log out</button>
        <Products />
      </div>
    );
  }

  return (
    <div>
      <Flex w="30%" mx="auto" mt="10">
        <Link to={"/login"}>
          <Button colorScheme="blue">Login</Button>
        </Link>
        <Spacer />
        <Link to={"/register"}>
          <Button colorScheme="red">Register</Button>
        </Link>
      </Flex>
      <Box>
        <Link></Link>
      </Box>
    </div>
  );
}

export default Home;
