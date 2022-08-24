import { Tabs } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { TabLayoutController } from './Controller';
import { TabContent } from './TabContent';
import { TabHeader } from './TabHeader';

export const TabLayout = () => {
  const { getAllLeagues } = TabLayoutController();

  useEffect(() => {
    getAllLeagues();
  }, []);

  return (
    <Tabs isFitted variant="soft-rounded">
      <TabHeader />
      <TabContent />
    </Tabs>
  );
};
