import { Image, Tab, TabList } from '@chakra-ui/react';
import React from 'react';
import { Leagues } from '../../../types/leagues';
import { TabHeaderController } from './Controller';
import { leagueImageSource } from './tabTitleData';

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
          <Tab key={headerTitle}>
            <Image
              src={leagueImageSource[headerTitle]}
              alt="리그 이미지"
              boxSize={50}
            />
          </Tab>
        ))}
      </TabList>
    </>
  );
};
