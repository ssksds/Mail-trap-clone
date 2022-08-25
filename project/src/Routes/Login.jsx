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
import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";

function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://reqres.in/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formState)
    })
      .then((res) => res.json())

      .then((res) => {
        console.log(res);

        navigate("/dashboard");
      });
  };
  return (
    <>
      <Grid templateColumns="repeat(2, 1fr)" color="#202c45">
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
            <FormControl>
              <FormLabel>Email address</FormLabel>
              <Input
                type="email"
                placeholder="email"
                value={formState.email}
                name="email"
                onChange={handleChange}
              />
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="password"
                value={formState.password}
                name="password"
                onChange={handleChange}
              />
              <Checkbox defaultChecked>Remember me</Checkbox>
              <br />
              <Button bgColor="blueviolet" onClick={handleSubmit}>
                login
                {isLoading && <Spinner color="red.500" />}
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
          <Img src="https://assets.mailtrap.io/packs/assets/landing/signup-29d04f096f43afe622ed.svg" />
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
            <Text>
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
