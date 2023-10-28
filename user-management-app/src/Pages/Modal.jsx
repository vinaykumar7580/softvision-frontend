import { Box, Button, Text, useDisclosure, useToast } from "@chakra-ui/react";
import { useContext, useState } from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteUser } from "../Redux/action";

function ModalPop() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();
  const { singleUser } = useSelector((store) => store.reducer);

  const navigate = useNavigate();
  const toast = useToast();

  const handleClose = () => {
    navigate("/login");
  };

  const handleDelete = () => {
    dispatch(DeleteUser(singleUser?.id));

    toast({
      title: "User DELETE",
      description: "User Deleted Successfully",
      status: "success",
      duration: 3000,
      isClosable: true,
      position: "top",
    });

    navigate("/");
  };

  const dateFormat = (date) => {
    const options = { year: "numeric", month: "short", day: "2-digit" };
    return new Date(date).toLocaleDateString("en-US", options);
  };

  return (
    <Box>
      <Modal isOpen={onOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>User Details</ModalHeader>
          <ModalBody>
            <Box fontWeight={"bold"}>
              <Text>
                {" "}
                Name : {singleUser && singleUser?.firstName}{" "}
                {singleUser && singleUser?.lastName}
              </Text>
              <br />
              <Text> DOB : {singleUser && dateFormat(singleUser?.dob)}</Text>
              <br />
              <Text> Mobile : {singleUser && singleUser?.mobileNo}</Text>
              <br />
              <Text> Email : {singleUser && singleUser?.emailId}</Text>
              <br />
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={handleDelete}>
              Delete
            </Button>
            <Button colorScheme="blue" onClick={handleClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
export default ModalPop;
