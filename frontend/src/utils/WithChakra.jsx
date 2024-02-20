import { ChakraProvider } from "@chakra-ui/react";

const WithChakra = ({ children }) => (
  <ChakraProvider>{children}</ChakraProvider>
);

export default WithChakra;
