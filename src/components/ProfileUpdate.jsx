import { useState } from "react";
import {
  FormControl,
  Input,
  Button,
  Box,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { profileUpdate } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { nicknameUpdate } from "../redux/authSlice";

function ProfileUpdate() {
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandle = () => {
    profileUpdate(nickname);
    navigate("/products");
    dispatch(nicknameUpdate(nickname));
  };

  return (
    <Box w="50%" mx="auto">
      <FormControl mt="10" alignItems="center">
        <Text fontSize="xl">Select a nickname</Text>
        <Input onChange={(e) => setNickname(e.target.value)} />
        <Flex>
          <Button mt="10" mx="auto" colorScheme="blue" onClick={submitHandle}>
            Submit
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
}

export default ProfileUpdate;
