import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import React from 'react';
import { TabHeader } from './TabHeader';

export const TabLayout = () => {
  return (
    <Tabs isFitted>
      <TabHeader />
      <TabPanels>
        <TabPanel>
          <span>EPL</span>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};
