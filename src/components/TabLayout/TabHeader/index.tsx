import { Image, Tab, TabList } from '@chakra-ui/react';
import React from 'react';
import { Movies } from '../../../types/movies';
import { TabHeaderController } from './Controller';
import { leagueImageSource } from './tabTitleData';

interface TabHeaderProps {
  nowPlayingMovies: Movies[];
}

export const TabHeader = ({ nowPlayingMovies }: TabHeaderProps) => {
  const {
    actions: { getTabHeaderTitle },
  } = TabHeaderController(nowPlayingMovies);

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
