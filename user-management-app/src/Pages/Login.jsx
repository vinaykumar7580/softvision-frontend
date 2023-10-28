import {
  Box,
  FormLabel,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosUrl from "../Components/Intercepter";
import { useDispatch, useSelector } from "react-redux";
import { GetSingleUser, GetUser, getUserSuccess } from "../Redux/action";

function Login() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  const { user } = useSelector((store) => store.reducer);

  useEffect(() => {
    dispatch(GetUser);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form", formData);

    for (let i = 0; i <= user.length - 1; i++) {
      if (
        user[i].userName == formData.userName &&
        user[i].password == formData.password
      ) {
        dispatch(GetSingleUser(user[i]));
        toast({
          title: "User Login",
          description: "Login success, you can see your data",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        navigate("/modal");
        break;
      } else {
        console.log("Please, register first");
      }
    }

    setFormData({
      userName: "",
      password: "",
    });
  };
  const { userName, password } = formData;
  console.log("user", user);

  return (
    <Box bg={"blue.500"} color={"white"} h={"100vh"}>
      <Heading fontFamily={"sans-serif"} pt={"50px"}>
        Login
      </Heading>
      <Box
        w={"30%"}
        m={"auto"}
        mt={"30px"}
        mb={"50px"}
        p={"20px"}
        boxShadow={"2xl"}
        bg={"white"}
        color={"black"}
        borderRadius={"10px"}
      >
        <form onSubmit={handleSubmit}>
          <FormLabel>User Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter username"
            name="userName"
            value={userName}
            isRequired
            onChange={handleChange}
          />
          <br />
          <br />
          <FormLabel>Password</FormLabel>
          <Input
            type="text"
            placeholder="Enter password"
            name="password"
            value={password}
            isRequired
            onChange={handleChange}
          />
          <br />
          <br />
          <Input
            cursor={"pointer"}
            bg={"orange.500"}
            color={"white"}
            fontWeight={"bold"}
            type="submit"
          />
        </form>
        <br />
        <Text fontWeight={"bold"}>
          you want to register:{" "}
          <Link to="/">
            <span style={{ color: "red" }}>
              <u>Register</u>
            </span>
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
export default Login;
