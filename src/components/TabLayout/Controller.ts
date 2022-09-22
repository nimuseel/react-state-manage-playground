import { useEffect, useState } from 'react';

interface TabLayoutControllerObject {
  states: {
    tabIndex: number;
  };
  actions: {
    handleTabChange: (index: number) => void;
  };
}

export const TabLayoutController = (): TabLayoutControllerObject => {
  // const [allLeagues, setAllLeagues] = useState<Leagues[]>();
  const [tabIndex, setTabIndex] = useState<number>(0);

  useEffect(() => {
    const init = async () => {
      try {

        // setAllLeagues(allLeaguesData);
      } catch (error) {
        alert('데이터를 불러오는 도중 문제가 발생했습니다.' + error);
      }
    };

    init();
  }, []);

  const handleTabChange = (index: number) => {
    setTabIndex(index);
  };

  return {
    states: {
      tabIndex,
    },
    actions: {
      handleTabChange,
    },
  };
};
