import { Fade } from "react-slideshow-image";
import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Box, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";

const fadeImages = [
  {
    cap2: (
      <Grid templateColumns="repeat(2, 1fr)" gap={6} w="80%" m="auto">
        <GridItem>
          {" "}
          <Box boxShadow="base" m="30px">
            <Text fontWeight="600">Joshua Anderton @joshuaanderton</Text>
            <Text>
              Just signed up for @Mailtrap and I’m loving it. So easy to set up.
              Provides so much peace of mind. Ahh just love it.
            </Text>
          </Box>
        </GridItem>
        <GridItem boxShadow="base" m="30px">
          <Text fontWeight="600">Doug Black Jr</Text>
          <Text>
            Can we all agree @Mailtrap is a gift to developers everywhere? It
            just works SO easily out of the box!!!!
          </Text>
        </GridItem>
      </Grid>
    )
  },
  {
    cap2: (
      <Grid templateColumns="repeat(2, 1fr)" gap={6} w="80%" m="auto">
        <GridItem>
          {" "}
          <Box boxShadow="base" m="30px">
            <Text fontWeight="600">Rado Georgiev</Text>
            <Text>
              One thing we started using recently is @Mailtrap for our dev &
              staging environments. We were previously either turning email
              sending entirely off for staging or running SES + whitelist. Turns
              out, having a fake SMTP mailbox is great and you can test better
              with it.
            </Text>
          </Box>
        </GridItem>
        <GridItem boxShadow="base" m="30px">
          <Text fontWeight="600">Doug Black Jr</Text>
          <Text>
            Can we all agree @Mailtrap is a gift to developers everywhere? It
            just works SO easily out of the box!!!!
          </Text>
        </GridItem>
      </Grid>
    )
  },
  {
    cap2: (
      <Grid templateColumns="repeat(2, 1fr)" gap={6} w="80%" m="auto">
        <GridItem>
          {" "}
          <Box boxShadow="base" m="30px">
            <Text fontWeight="600">Mr. Glass</Text>
            <Text>
              Just signed up for @Mailtrap and I’m loving it. So easy to set up.
              Provides so much peace of mind. Ahh just love it.
            </Text>
          </Box>
        </GridItem>
        <GridItem boxShadow="base" m="30px">
          <Text fontWeight="600">Doug Black Jr</Text>
          <Text>
            Can we all agree @Mailtrap is a gift to developers everywhere? It
            just works SO easily out of the box!!!!
          </Text>
        </GridItem>
      </Grid>
    )
  },
  {
    cap2: (
      <Grid templateColumns="repeat(2, 1fr)" gap={6} w="80%" m="auto">
        <GridItem>
          {" "}
          <Box boxShadow="base" m="30px">
            <Text fontWeight="600">DeveloperMitch</Text>
            <Text>
              After all these years of web development, how have I only JUST
              started using @Mailtrap. I had heard about it, but never got round
              to using it. An awesome way of testing emails.
            </Text>
          </Box>
        </GridItem>
        <GridItem boxShadow="base" m="30px">
          <Text fontWeight="600">Doug Black Jr</Text>
          <Text>
            Can we all agree @Mailtrap is a gift to developers everywhere? It
            just works SO easily out of the box!!!!
          </Text>
        </GridItem>
      </Grid>
    )
  },
  {
    cap2: (
      <Grid templateColumns="repeat(2, 1fr)" gap={6} w="80%" m="auto">
        <GridItem>
          {" "}
          <Box boxShadow="base" m="30px">
            <Text fontWeight="600">Joshua Anderton @joshuaanderton</Text>
            <Text>
              Just signed up for @Mailtrap and I’m loving it. So easy to set up.
              Provides so much peace of mind. Ahh just love it.
            </Text>
          </Box>
        </GridItem>
        <GridItem boxShadow="base" m="30px">
          <Text fontWeight="600">Doug Black Jr</Text>
          <Text>
            Can we all agree @Mailtrap is a gift to developers everywhere? It
            just works SO easily out of the box!!!!
          </Text>
        </GridItem>
      </Grid>
    )
  }
];
const fadeProperties = {
  duration: 1500,
  transitionDuration: 100,
  infinite: true,
  indicators: true
};

const SlidingImages = () => {
  return (
    <Box className="slide-container" color="red" w="800px">
      <Fade {...fadeProperties}>
        {fadeImages.map((fadeImage, index) => (
          <Box className="each-fade" key={index}>
            <Stack>
              <GridItem>
                <Text>{fadeImage.cap2}</Text>
              </GridItem>
              {/* <Box className="image-container">
                <Image h="200px" src={fadeImage.url} />
              </Box> */}
            </Stack>
          </Box>
        ))}
      </Fade>
      {/* <Grid templateColumns="repeat(2, 1fr)" gap={6} w="80%" m="auto">
        <GridItem>
          {" "}
          <Box boxShadow="base" m="30px">
            <Text fontWeight="600">Joshua Anderton @joshuaanderton</Text>
            <Text>
              Just signed up for @Mailtrap and I’m loving it. So easy to set up.
              Provides so much peace of mind. Ahh just love it.
            </Text>
          </Box>
        </GridItem>
        <GridItem boxShadow="base" m="30px">
          <Text fontWeight="600">Doug Black Jr</Text>
          <Text>
            Can we all agree @Mailtrap is a gift to developers everywhere? It
            just works SO easily out of the box!!!!
          </Text>
        </GridItem>
      </Grid> */}
    </Box>
  );
};

export default SlidingImages;
