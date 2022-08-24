import { Tab, TabList } from '@chakra-ui/react';
import React from 'react';

export const TabHeader = () => {
  return (
    <>
      <TabList>
        <Tab>EPL</Tab>
        <Tab>LaLiga</Tab>
      </TabList>
    </>
  );
};
