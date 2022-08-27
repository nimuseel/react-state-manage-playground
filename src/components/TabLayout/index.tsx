import { Tabs } from '@chakra-ui/react';
import { TabLayoutController } from './Controller';
import { TabContent } from './TabContent';
import { TabHeader } from './TabHeader';

export const TabLayout = () => {
  const {
    states: { allLeagues, tabIndex },
    actions: { handleTabChange }
  } = TabLayoutController();

  if (!allLeagues) {
    return <>불러오는 중..</>;
  }

  return (
    <Tabs isFitted variant="soft-rounded" onChange={handleTabChange}>
      <TabHeader allLeagues={allLeagues} />
      <TabContent />
    </Tabs>
  );
};
