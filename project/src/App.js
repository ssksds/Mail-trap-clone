import React from 'react';
import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import AllRoutes from './Routes/AllRoutes';

import customTheme from './utils/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Banner />
    <NavBar />
    <AllRoutes />
    
  </ChakraProvider>
  );
}

export default App;
