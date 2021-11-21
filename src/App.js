
import SearchUserView from './views/SearchUser/SearchUserView';
import { ChakraProvider, Flex } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider>
      <Flex justify="center">
        <SearchUserView />
      </Flex>
    </ChakraProvider>
  );
}


export default App;
