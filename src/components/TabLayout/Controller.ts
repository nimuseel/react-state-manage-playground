import axios from 'axios';
import { useEffect, useState } from 'react';
import { Leagues } from '../../types/leagues';

interface TabLayoutControllerObject {
  states: {
    allLeagues?: Leagues[];
    tabIndex: number;
  };
  actions: {
    handleTabChange: (index: number) => void;
  }
}

export const TabLayoutController = (): TabLayoutControllerObject => {
  const [allLeagues, setAllLeagues] = useState<Leagues[]>();
  const [tabIndex, setTabIndex] = useState<number>(0);

  const getAllLeagues = async () => {
    const { data } = await axios.get(
      'https://api-football-standings.azharimm.site/leagues'
    );

    const typedResponseData = data.data as Leagues[];

    const filteredLeague = typedResponseData.filter((leagues) => leagues.id.includes('eng') || leagues.id.includes('fra') || leagues.id.includes('ger') || leagues.id.includes('ita') || leagues.id.includes('esp'));

    return filteredLeague;
  };

  useEffect(() => {
    const init = async () => {
      try {
        const allLeaguesData = await getAllLeagues();

        setAllLeagues(allLeaguesData);
      } catch (error) {
        alert('데이터를 불러오는 도중 문제가 발생했습니다.' + error);
      }
    };

    init();
  }, []);

  const handleTabChange = (index: number) => {
    setTabIndex(index);
  }

  return {
    states: {
      allLeagues,
      tabIndex,
    },
    actions: {
      handleTabChange,
    }
  };
};
