import React from 'react';
import { TabLayout } from './components/TabLayout';
import { Box, Flex } from '@chakra-ui/react';

function App() {
  return (
    <Box width="100vw" height="100vh">
      <Flex justifyContent="center" height="100%" paddingTop={20}>
        <TabLayout />
      </Flex>
    </Box>
  );
}

export default App;
