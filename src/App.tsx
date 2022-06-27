import * as React from "react"
import {
  ChakraProvider,
  Button
} from "@chakra-ui/react"
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

import theme from "./theme/theme";
import { Router } from './router/Router'

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  </ChakraProvider>
);

