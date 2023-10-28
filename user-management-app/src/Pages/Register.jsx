import { Box, Flex, FormLabel, Heading, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axiosUrl from "../Components/Intercepter";

function Register() {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    mobileNo: 0,
    emailId: "",
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { type, name, value } = e.target;
    let val = type == "number" ? Number(value) : value;
    setFormData({ ...formData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form", formData);

    axiosUrl
      .post("/user", formData)
      .then((res) => {
        toast({
          title: "User Registration",
          description: "We've created your account for you.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error",
          description: "Sorry, something went wrong.",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
      });

    setFormData({
      userName: "",
      password: "",
      firstName: "",
      lastName: "",
      dob: "",
      mobileNo: 0,
      emailId: "",
    });
  };

  const handleMobile = () => {
    const mobileNumberPattern = /^[0-9]{10}$/;
    if (!mobileNumberPattern.test(mobileNo)) {
      return "Please enter valid 10 digit mobile number.";
    } else {
      return "Valid mobile number.";
    }
  };

  const { userName, password, firstName, lastName, dob, mobileNo, emailId } =
    formData;

  return (
    <Box bg={"blue.500"} color={"white"} h={"100vh"}>
      <Heading fontFamily={"sans-serif"} pt={"50px"}>
        Register
      </Heading>
      <Box
        w={"40%"}
        m={"auto"}
        mt={"20px"}
        mb={"50px"}
        p={"30px"}
        boxShadow={"2xl"}
        bg={"white"}
        color={"black"}
        borderRadius={"10px"}
      >
        <form onSubmit={handleSubmit}>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Box w={"50%"}>
              <FormLabel>User Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter username"
                name="userName"
                value={userName}
                isRequired
                onChange={handleChange}
              />
            </Box>
            <Box w={"50%"}>
              <FormLabel>Password</FormLabel>
              <Input
                type="text"
                placeholder="Enter password"
                name="password"
                value={password}
                isRequired
                onChange={handleChange}
              />
            </Box>
          </Flex>
          <br />
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Box w={"50%"}>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter firstname"
                name="firstName"
                value={firstName}
                isRequired
                onChange={handleChange}
              />
            </Box>
            <Box w={"50%"}>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter lastname"
                name="lastName"
                value={lastName}
                isRequired
                onChange={handleChange}
              />
            </Box>
          </Flex>
          <br />
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            gap={"20px"}
          >
            <Box w={"50%"}>
              <FormLabel>Date Of Birth</FormLabel>
              <Input
                type="date"
                placeholder="Enter date of birth"
                name="dob"
                value={dob}
                isRequired
                onChange={handleChange}
              />
            </Box>
            <Box w={"50%"}>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="Enter email"
                name="emailId"
                value={emailId}
                isRequired
                onChange={handleChange}
              />
            </Box>
          </Flex>
          <br />
          <FormLabel>Mobile Number</FormLabel>
          <Input
            type="number"
            placeholder="Enter mobile number"
            name="mobileNo"
            value={mobileNo}
            isRequired
            onChange={handleChange}
          />
          <Text textAlign={"left"} color={"red"}>
            {handleMobile()}
          </Text>
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
          Already register:{" "}
          <Link to="/login">
            <span style={{ color: "red" }}>
              <u>Login</u>
            </span>
          </Link>
        </Text>
      </Box>
    </Box>
  );
}
export default Register;
