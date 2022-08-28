import {
  Grid,
  GridItem,
  Heading,
  Img,
  ListItem,
  Spacer,
  Text,
  UnorderedList
} from "@chakra-ui/react";
import { React } from "react";
import FooterIcon from "../Components/Icons/footer.svg";

function Footer() {
  return (
    <>
      <Grid
        templateColumns="repeat(4, 1fr)"
        h="241px"
        gap={6}
        m="50px"
        textAlign="center"
      >
        <GridItem w="100%" h="400px">
          {/* <FooterIcon /> */}
          <Img src={FooterIcon} alt={"icon"} w="60%" />
        </GridItem>
        <GridItem w="100%" gap="40xp">
          <Heading as="h4" size="md">
            Mailtrap
          </Heading>
          <br />
          <UnorderedList
            listStyleType="none"
            spacing={4}
            fontSize="14px"
            fontWeight="400"
            lineHeight="18px"
          >
            <ListItem>Pricing</ListItem>
            <ListItem>Changelog</ListItem>
            <ListItem>Status</ListItem>
            <ListItem>Terms of Service</ListItem>
            <ListItem>Privacy Policy</ListItem>
            <ListItem>Navigational Information</ListItem>
            <ListItem>DPA</ListItem>
          </UnorderedList>
        </GridItem>

        <GridItem w="100%" h="10">
          <Heading as="h4" size="md">
            Railsware Experience
          </Heading>
          <br />
          <UnorderedList
            listStyleType="none"
            spacing={4}
            fontSize="14px"
            fontWeight="400"
            lineHeight="18px"
          >
            <ListItem>Mailtrap Blog</ListItem>
            <ListItem>Coupler.io</ListItem>
            <ListItem>Smart Checklist for Jira</ListItem>
            <ListItem>Careers – Railsware Hiring</ListItem>
          </UnorderedList>
        </GridItem>
        <GridItem w="100%" h="10">
          <Heading as="h4" size="md">
            Contact
          </Heading>
          <br />
          <UnorderedList
            listStyleType="none"
            spacing={4}
            fontSize="14px"
            fontWeight="400"
            lineHeight="18px"
          >
            <ListItem>email: support@mailtrap.io</ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
            <ListItem></ListItem>
          </UnorderedList>

          <br />
          <Spacer />
          <Spacer />
          <Text>© Railsware Products Studio, Inc.</Text>
        </GridItem>
      </Grid>
    </>
  );
}

export default Footer;
