import { Tabs } from '@chakra-ui/react';
import { TabLayoutController } from './Controller';
import { TabContent } from './TabContent';
import { TabHeader } from './TabHeader';

export const TabLayout = () => {
  const {
    states: { allLegaues },
  } = TabLayoutController();

  if (!allLegaues) {
    return <>불러오는 중..</>;
  }

  return (
    <Tabs isFitted variant="soft-rounded">
      <TabHeader allLeagues={allLegaues} />
      <TabContent />
    </Tabs>
  );
};
