import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Img,
  ListItem,
  OrderedList,
  SimpleGrid,
  Spacer,
  Stack,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import React from "react";
import Footer from "../Components/Footer";
import SlidingImages from "../Components/Slider/SlidingImages";

function Home() {
  return (
    <Box color="#202c45">
      <Box w="400px" m="auto" mb="30px">
        <Heading>Email Sandbox Service</Heading>
      </Box>
      <Spacer />
      <Box width="50%" margin="auto" alignItems="center">
        <Text
          noOfLines={[1, 2, 3]}
          m="auto"
          w="450px"
          fontSize="14.2px"
          lineHeight="16.5px"
          color="#202c45"
          fontWeight="500"
        >
          Capture SMTP traffic from staging and dev environments
          <br /> Automate test flows and scenarios with flexible API
          <br /> Analyze email content for spam score and validate HTML/CSS
        </Text>
        <Button bg="#22d172" mt="30px" ml="250px">
          Signup Free
        </Button>
      </Box>
      <Flex margin="auto" w="50%" mt="45px">
        <Box>
          <Img
            src="https://mailtrap.io/wp-content/uploads/2021/04/Rails.svg"
            alt=""
          />
        </Box>
        <Box>
          <Img
            src="https://mailtrap.io/wp-content/uploads/2021/04/Python.svg"
            alt=""
          />
        </Box>
        <Box>
          <Img
            src="https://mailtrap.io/wp-content/uploads/2021/04/NET.svg"
            alt=""
          />
        </Box>
        <Box>
          <Img
            src="https://mailtrap.io/wp-content/uploads/2021/04/Symfony.svg"
            alt=""
          />
        </Box>
        <Box>
          <Img
            src="https://mailtrap.io/wp-content/uploads/2021/04/Laravel.svg"
            alt=""
          />
        </Box>
      </Flex>
      <Box m="auto" w="70%" mt="30px">
        <Img
          src="https://mailtrap.io/wp-content/uploads/2021/05/img__homepage-964x574.png"
          alt=""
        />
      </Box>

      <Box>
        <Box mb="40px" w="70%" m="auto">
          <Heading>Email testing challenges that Mailtrap solves</Heading>
        </Box>
        <br />
        <SimpleGrid
          columns={{ sm: 1, lg: 2 }}
          //templateColumns="repeat(2, 1fr)"
          minChildWidth="400px"
          mb="30px"
          gap={4}
          w="80%"
          h="400px"
          m="auto"
          overflow="auto"
        >
          <Box w="435px" h="">
            <Heading fontSize="14px">
              Configure your testing environment in 5 minutes
            </Heading>
            <Flex>
              <Img
                src="https://mailtrap.io/wp-content/uploads/2021/03/icon4.svg"
                w="54px"
              />{" "}
              <Text>
                Each Mailtrap account comes with an individual testing
                environment. Integrate it with your app in just a few clicks.
              </Text>
            </Flex>
          </Box>
          <Box w="435px" h="">
            <Heading fontSize="14px">
              Keep all testing data organized in one place
            </Heading>
            <Flex>
              <Img
                src="https://mailtrap.io/wp-content/uploads/2021/03/icon__mail.svg"
                w="54px"
                alt=""
              />
              <Text>
                Create individual inboxes for different environments or review
                servers and group them into relevant projects.
              </Text>
            </Flex>
          </Box>
          <Box w="435px" h="">
            <Heading fontSize="14px" lineHeight="31px">
              Quickly integrate with Mailtrap API
            </Heading>
            <Flex>
              <Img
                src="https://mailtrap.io/wp-content/uploads/2021/01/icon_work.svg"
                w="54px"
                alt=""
              />
              <Text>
                Get started quickly with our well-documented API and configure
                automated testing with unlimited API calls.
              </Text>
            </Flex>
          </Box>
          <Box w="435px" h="">
            <Heading fontSize="14px">
              Dig into both the content and source of your emails
            </Heading>
            <Flex>
              <Img
                src="https://mailtrap.io/wp-content/uploads/2021/03/icon2.svg"
                w="54px"
                alt=""
              />
              <Text>
                View messages, check spam scores, validate headers, analyze the
                HTML support across email clients, and more.
              </Text>
            </Flex>
          </Box>

          <Box w="435px" h="">
            <Heading fontSize="14px">
              Easily share test emails with your team
            </Heading>
            <Flex>
              <Img
                src="https://mailtrap.io/wp-content/uploads/2021/01/icon_men.svg"
                w="54px"
                alt=""
              />
              <Text>
                Manage access to your inboxes for colleagues or clients. Send
                selected test emails to whitelisted real recipients.
              </Text>
            </Flex>
          </Box>
          <Box w="435px" h="">
            <Heading fontSize="14px">Test your email sending service</Heading>
            <Flex>
              <Img
                src="https://mailtrap.io/wp-content/uploads/2021/03/ivon__performance.svg"
                w="54px"
                alt=""
              />
              <Text>
                Send emails to Mailtrap directly from your CRM or email sending
                service. Simulate sending to multiple recipients.
              </Text>
            </Flex>
          </Box>
        </SimpleGrid>
      </Box>
      <Box bg="#f9f9f7" pt="180px" columns={{ sm: 1 }}>
        <Box>
          <Center>
            <Text fontSize="1.90625rem" fontWeight="600" lineHeight="1.3rem">
              Setup takes less than 5 minutes
            </Text>
          </Center>
          <Center mt="10px">
            <Text>
              Mailtrap is compatible with any app or framework that supports
              SMTP
            </Text>
          </Center>
        </Box>

        <Grid mt="40px" w="80%" m="auto">
          <Flex>
            <Box h="400px">
              <Img src="https://mailtrap.io/wp-content/uploads/2021/03/setup-final-480x345.png" />
            </Box>
            <Box h="400px" mt="35px" fontSize="14px" fontWeight="500" w="40%">
              <OrderedList lineHeight="1.7rem">
                <ListItem>
                  Select your integration from 20+ code samples or copy SMTP
                  credentials
                </ListItem>
                <ListItem>Paste the configuration to your project</ListItem>
                <ListItem>Run your email sending code</ListItem>
                <ListItem>
                  Instantly receive a message in your Mailtrap inbox
                </ListItem>
              </OrderedList>
            </Box>
          </Flex>
        </Grid>
      </Box>
      <Box>
        <Center>
          <Heading>How different teams use Mailtrap</Heading>
        </Center>
      </Box>
      <Box w="80%" m="auto">
        <Img src="https://mailtrap.io/wp-content/uploads/2021/03/img_team.svg" />
      </Box>
      <Flex w="85%" m="auto">
        <Box>
          <Text fontSize="15px">Developers</Text>
          <UnorderedList listStyleType="none">
            <ListItem>
              <Icon viewBox="0 0 200 200" color="green">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              Experiment with the email sending functionality
            </ListItem>
            <ListItem>
              <Icon viewBox="0 0 200 200" color="green">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              Cover code with tests to run automated checks via Mailtrap API
            </ListItem>
            <ListItem>
              <Icon viewBox="0 0 200 200" color="green">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              Verify different email aspects, debug sending script and HTML
              template
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text fontSize="15px">QAs</Text>
          <UnorderedList listStyleType="none">
            <ListItem>
              <Icon viewBox="0 0 200 200" color="green">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              Run safe email tests in staging and/or testing environment
            </ListItem>
            <ListItem>
              <Icon viewBox="0 0 200 200" color="green">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              Integrate Mailtrap with automated testing tools
            </ListItem>
            <ListItem>
              <Icon viewBox="0 0 200 200" color="green">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              Compare revised emails with their previous versions
            </ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Text fontSize="15px">Marketers and managers</Text>
          <UnorderedList listStyleType="none">
            <ListItem>
              <Icon viewBox="0 0 200 200" color="green">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              Smoothly collaborate with development and QA teams
            </ListItem>
            <ListItem>
              <Icon viewBox="0 0 200 200" color="green">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              View test emails in shared inboxes or forward to real recipients
            </ListItem>
            <ListItem>
              <Icon viewBox="0 0 200 200" color="green">
                <path
                  fill="currentColor"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
                />
              </Icon>
              Send emails to Mailtrap inboxes from CRMs and common sending tools
            </ListItem>
          </UnorderedList>
        </Box>
      </Flex>
      <Box mt="100px">
        <Center>
          <Button bg="#22d172">SignUp</Button>
        </Center>
      </Box>
      <Box mt="60px" bg="#f9f9f7">
        <Center fontSize="18px" pt="80px">
          From our #BestClientEver
        </Center>
        <Box m="20px" ml="300px">
          <SlidingImages />
        </Box>
      </Box>
      <Box w="70%" m="auto" mt="100px">
        <Center>
          Trusted by over 900,000 devs, QAs, and managers worldwide
        </Center>
        <Flex justifyContent="space-around">
          <Box>
            <Img
              src="https://mailtrap.io/wp-content/uploads/2021/04/Adobe.svg"
              alt=""
            />
          </Box>
          <Box>
            <Img
              src="https://mailtrap.io/wp-content/uploads/2021/04/Atlassian.svg"
              alt=""
            />
          </Box>
          <Box>
            <Img
              src="https://mailtrap.io/wp-content/uploads/2021/04/Calendly.svg"
              alt=""
            />
          </Box>
          <Box>
            <Img
              src="https://mailtrap.io/wp-content/uploads/2021/04/Yelp.svg"
              alt=""
            />
          </Box>
          <Box>
            <Img
              src="https://mailtrap.io/wp-content/uploads/2021/04/UserTesting.svg"
              alt=""
            />
          </Box>
        </Flex>
      </Box>
      <Grid>
        <Center>
          <Heading>Frequently Asked Questions</Heading>
        </Center>
        <br />
        <Grid templateColumns="repeat(2, 1fr)" gap={6} w="80%" m="auto">
          <GridItem boxShadow="lg" w="80%">
            <Img
              src="https://img.icons8.com/sf-ultralight/344/help.png"
              ml="30px"
              mt="-10px"
              w="40px"
            />
            <Text
              my="20px"
              ml="40px"
              fontWeight="600"
              fontSize="14px"
              lineHeight="18px"
            >
              Can Mailtrap send emails to real recipients?
            </Text>
            <Text mx="40px" pb="30px">
              Mailtrap is a testing tool and is not designed to deliver emails
              to real addresses. However, you can forward some messages to your
              colleagues, customers, or your own inboxes for testing purposes.
            </Text>
          </GridItem>
          <GridItem boxShadow="lg" w="80%">
            <Img
              src="https://img.icons8.com/sf-ultralight/344/help.png"
              ml="30px"
              mt="-10px"
              w="40px"
            />
            <Text
              my="20px"
              ml="40px"
              fontWeight="600"
              fontSize="14px"
              lineHeight="18px"
            >
              How can I preview my email in different email clients?
            </Text>
            <Text mx="40px" pb="30px">
              Mailtrap’s HTML Check analyzes your template for support in
              popular email clients and explains how to fix errors right away.
              This is more efficient than manual comparison of previews from
              email clients, but you still can forward your test emails to real
              recipients and open them in specific email clients.
            </Text>
          </GridItem>
          <GridItem boxShadow="lg" w="80%">
            <Img
              src="https://img.icons8.com/sf-ultralight/344/help.png"
              ml="30px"
              mt="-10px"
              w="40px"
            />
            <Text ml="40px" fontWeight="600" fontSize="14px" lineHeight="18px">
              Can I send a test email to Mailtrap from my Gmail?
            </Text>
            <Text mx="40px" pb="30px">
              Yes, you can! On Business, Premium, and Enterprise plans, there is
              a separate email address available for each of your inboxes. With
              it, you can send messages from any CRM, email sending app or
              client, such as Gmail, Hubspot, Sendgrid, etc.
            </Text>
          </GridItem>
          <GridItem boxShadow="lg" w="80%">
            <Img
              src="https://img.icons8.com/sf-ultralight/344/help.png"
              ml="30px"
              mt="-10px"
              w="40px"
            />
            <Text
              my="20px"
              ml="40px"
              fontWeight="600"
              fontSize="14px"
              lineHeight="18px"
            >
              How much does Mailtrap cost?
            </Text>
            <Text mx="40px" pb="30px">
              Mailtrap features a forever free plan that offers the basic
              functionality for personal use. Paid plans start from $9.99 per
              month, and are suitable for companies of different sizes. View the
              Mailtrap pricing for more details.
            </Text>
          </GridItem>
        </Grid>
      </Grid>
      <Grid h="300px" bg="#1a2e44" templateColumns="repeat(2, 1fr)">
        <GridItem>
          <Box color="white" p="100px">
            <Text fontWeight="700" fontSize="2xl">
              Create Your Free Account
            </Text>
            <Heading fontSize="44px">In 3 Clicks</Heading>
            <Button bg="#22d172">SignUp</Button>
          </Box>
        </GridItem>
        <GridItem>
          <Img
            src="https://mailtrap.io/wp-content/uploads/2021/01/img__cta.svg"
            w="60%"
            alt=""
          />
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  );
}

export default Home;
