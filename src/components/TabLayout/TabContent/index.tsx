import { TabPanel, TabPanels } from '@chakra-ui/react';
import React from 'react';
import { Movies } from '../../../types/movies';

interface TabContentProps {
  nowPlayingMovies: Movies;
  selectedTabIndex: number;
}

export const TabContent = ({
  nowPlayingMovies,
  selectedTabIndex,
}: TabContentProps) => {
  console.log(nowPlayingMovies);
  return (
    <TabPanels>
      {nowPlayingMovies.results.map((movie) => (
        <TabPanel key={movie.id}>
          <span>{movie.title}</span>
        </TabPanel>
      ))}
    </TabPanels>
  );
};
