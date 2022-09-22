import { Tab, TabList } from '@chakra-ui/react';
import React from 'react';
import { TabHeaderData } from './data';

export const TabHeader = () => {
  return (
    <>
      <TabList>
        {TabHeaderData.map((header) => (
          <Tab key={header.title}>{header.title}</Tab>
        ))}
      </TabList>
    </>
  );
};
