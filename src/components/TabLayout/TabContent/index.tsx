import { TabPanel, TabPanels, VStack } from '@chakra-ui/react';
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
  return (
    <TabPanels>
      <TabPanel>
        <VStack>
          {nowPlayingMovies.results.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </VStack>
      </TabPanel>
    </TabPanels>
  );
};
