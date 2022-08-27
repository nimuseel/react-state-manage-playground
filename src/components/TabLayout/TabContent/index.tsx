import { TabPanel, TabPanels } from '@chakra-ui/react';
import React from 'react';
import {Leagues} from "../../../types/leagues";

interface TabContentProps {
  allLeagues: Leagues[];
  selectedTabIndex: number;
}

export const TabContent = ({ allLeagues, selectedTabIndex }: TabContentProps) => {
  return (
    <TabPanels>
      {allLeagues.map((leagues) => (
        <TabPanel key={leagues.slug}>
          <span>{allLeagues[selectedTabIndex].name}</span>
        </TabPanel>
      ))}
    </TabPanels>
  );
};
