import { Grid, GridItem, Heading, Text } from "@chakra-ui/react";

function Banner() {
  return (
    <>
      <Grid bg="#1a2e44" h="40px">
        <GridItem m="auto">
          <Heading color="white" fontSize="13.5px">
            Stand with Ukraine 🇺🇦 <Text as="u">Donate to support</Text>
          </Heading>
        </GridItem>
      </Grid>
    </>
  );
}
export default Banner;
