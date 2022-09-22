import { Tabs } from '@chakra-ui/react';
import { TabLayoutController } from './Controller';

export const TabLayout = () => {
  const {
    states: { nowPlayingMovies, tabIndex },
    actions: { handleTabChange },
  } = TabLayoutController();

  if (!nowPlayingMovies) {
    return <>불러오는 중..</>;
  }

  return (
    <Tabs
      isFitted
      variant="soft-rounded"
      onChange={handleTabChange}
      minWidth="65rem"
    >
      {/*<TabHeader allLeagues={allLeagues} />*/}
      {/*<TabContent allLeagues={allLeagues} selectedTabIndex={tabIndex} />*/}
    </Tabs>
  );
};
