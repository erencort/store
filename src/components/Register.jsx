import React, { useState } from "react";
import { register } from "../firebase";
import { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import {
  FormControl,
  Input,
  Button,
  Box,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandle = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
    user && navigate("/products");
  };

  return (
    <Box>
      <Box w="30%" mx="auto" mt="10">
        <Text fontSize="2xl" mb="5">
          Register
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
              Register
            </Button>
            <Spacer />
            <Link to={"/login"}>
              <Button colorScheme="red">Have an account</Button>
            </Link>
          </Flex>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Register;
