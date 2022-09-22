import { TabPanel, TabPanels } from '@chakra-ui/react';
import React from 'react';
import { Movies } from '../../../types/movies';

interface TabContentProps {
  nowPlayingMovies: Movies[];
  selectedTabIndex: number;
}

export const TabContent = ({
  nowPlayingMovies,
  selectedTabIndex,
}: TabContentProps) => {
  return (
    <TabPanels>
      {nowPlayingMovies.map((nowPlayingMovie, i) => (
        <TabPanel key={i}>
          {/*<span>{nowPlayingMovie[selectedTabIndex].name}</span>*/}
        </TabPanel>
      ))}
    </TabPanels>
  );
};
