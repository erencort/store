import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../firebase";
import { useDispatch } from "react-redux/es/exports";
import { login as loginHandle } from "../redux/authSlice";
import {
  FormControl,
  Input,
  Button,
  Box,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandle = async (e) => {
    e.preventDefault();
    const user = await signIn(email, password);
    console.log(user);
    if (user) {
      navigate("/products");
    }
  };

  return (
    <Box>
      <Toaster position="top-right" />

      <Box w="30%" mx="auto" mt="10">
        <Text fontSize="2xl" mb="5">
          Login
        </Text>
        <FormControl>
          <Input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            mt="3"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Flex mt="8">
            <Button onClick={submitHandle} colorScheme="blue">
              Login
            </Button>
            <Spacer />
            <Link to={"/register"}>
              <Button colorScheme="red">Create an account</Button>
            </Link>
            <Spacer />
            <Link to="/">
              <Button>Back to homepage</Button>
            </Link>
          </Flex>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Login;
