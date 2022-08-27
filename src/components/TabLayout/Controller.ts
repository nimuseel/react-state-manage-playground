import axios from 'axios';
import { useEffect, useState } from 'react';
import { Leagues } from '../../types/leagues';

interface TabLayoutControllerObject {
  states: {
    allLegaues?: Leagues;
  };
}

export const TabLayoutController = (): TabLayoutControllerObject => {
  const [allLegaues, setAllLeagues] = useState<Leagues>();

  const getAllLeagues = async () => {
    const { data } = await axios.get(
      'https://api-football-standings.azharimm.site/leagues'
    );

    return data as Leagues;
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

  return {
    states: {
      allLegaues,
    }
  };
};
