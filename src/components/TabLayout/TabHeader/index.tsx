import { Tab, TabList } from '@chakra-ui/react';
import React from 'react';
import { Leagues } from '../../../types/leagues';
import { TabHeaderController } from './Controller';

interface TabHeaderProps {
  allLeagues: Leagues[];
}

export const TabHeader = ({ allLeagues }: TabHeaderProps) => {
  const {
    actions: { getTabHeaderTitle },
  } = TabHeaderController(allLeagues);

  const headerTitles = getTabHeaderTitle();

  return (
    <>
      <TabList>
        {headerTitles.map((headerTitle) => (
          <Tab key={headerTitle}>{headerTitle}</Tab>
        ))}
      </TabList>
    </>
  );
};
