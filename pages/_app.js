import { Box, ChakraProvider } from "@chakra-ui/react";
import '../styles/globals.scss';
import React, { useState, useEffect } from "react";
import {Layout} from "../components"


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      
        <Layout>
          <Component {...pageProps} />
        </Layout>
      
    </ChakraProvider>
  );
}

export default MyApp;
