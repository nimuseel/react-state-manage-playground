import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';

export const TabLayout = () => {
  return (
    <Tabs isFitted>
      <TabList>
        <Tab>EPL</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <span>EPL</span>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
