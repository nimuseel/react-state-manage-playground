import { Tabs } from '@chakra-ui/react';
import React from 'react';
import { TabContent } from './TabContent';
import { TabHeader } from './TabHeader';

export const TabLayout = () => {
  return (
    <Tabs isFitted>
      <TabHeader />
      <TabContent />
    </Tabs>
  );
};
