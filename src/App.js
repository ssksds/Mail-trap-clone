import React from "react";

import AllRoutes from "./Routes/AllRoutes";

import { ChakraProvider, Slider, theme } from "@chakra-ui/react";
import NavBar from "./Components/header.component";
import Banner from "./Components/Banner";
import MainPage from "./Routes/MainPage";
import Tabmenu from "./Components/TabMenu";

function App() {
  return (
    <ChakraProvider theme={theme}>
      {/* <Banner />
      <NavBar />
      <AllRoutes /> */}
      <MainPage/>
      
     
    </ChakraProvider>
  );
}

export default App;
