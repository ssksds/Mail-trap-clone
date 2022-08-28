import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Img,
  Input,
  Spacer,
  Spinner,
  Stack,
  Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { AppContext } from "../Context/AppContext";

function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });

  const auth = useContext(AppContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  }
function handleSubmit(e) {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    })
      .then((res) => res.json())
      .then((res) => {
        // alert("success");
        console.log(res);
        auth.handleLogin(res.token);
        navigate("/mainpage");
      })
      .catch((err) => {console.log(err)});
  }
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" color="#202c45" gap={4} m="30px">
        <GridItem>
          <Stack spacing={4} align="center">
            <Button bg="#5d93fc" w="300px">
              login with google
            </Button>
            <Button colorScheme="teal" w="300px">
              login with github
            </Button>
            <Button colorScheme="teal" w="300px">
              use 365 office account
            </Button>
          </Stack>
          <Box>
            <FormControl onSubmit={handleSubmit}>
              <FormLabel>Email address</FormLabel>
              <Input
                 placeholder="email"
                value={formState.email}
                onChange={handleChange}
                name="email"
                w="md"
              />
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="password"
                value={formState.password}
                onChange={handleChange}
                w="md"
                name="password"
              /><br/>
              <Checkbox defaultChecked>Remember me</Checkbox>
              <br />
              <Button bgColor="blueviolet" onClick={handleSubmit}>
                login
                
              </Button>
            </FormControl>
            <Text>
              By creating a Mailtrap account, you agree to our Terms of Service
              and Privacy Policy. We'll occasionally send you account related
              emails.
            </Text>
          </Box>
        </GridItem>

        <GridItem>
          <Img src="https://assets.mailtrap.io/packs/assets/landing/login-fb2fcb15feb36d8e9356.svg" />
        </GridItem>
      </Grid>
      <Footer />
      <Box>
        <Flex>
          <Box>
            <Text>© Railsware Products, Inc.</Text>
          </Box>
          <Spacer />
          <Box w="60%" justifyContent="right">
            {" "}
            <Heading>What is Mailtrap?</Heading>{" "}
            <Text noOfLines={[1, 2, 3,4]} textAlign="">
              Mailtrap is a test mail server solution that allows testing email
              notifications without sending them to the real users of your
              application. Not only does Mailtrap work as a powerful email test
              tool, it also lets you view your dummy emails online, forward them
              to your regular mailbox, share with the team and more! Mailtrap is
              a mail server test tool built by Railsware Products, Inc., a
              premium software development consulting company.
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Login;
