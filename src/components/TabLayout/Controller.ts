import { useEffect, useState } from 'react';
import axios from 'axios';
import { Movies } from '../../types/movies';

interface TabLayoutControllerObject {
  states: {
    nowPlayingMovies?: Movies;
    tabIndex: number;
  };
  actions: {
    handleTabChange: (index: number) => void;
  };
}

export const TabLayoutController = (): TabLayoutControllerObject => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movies>();
  const [tabIndex, setTabIndex] = useState<number>(0);

  const getNowPlayingMovies = async () => {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/movie/now_playing',
      {
        params: {
          api_key: process.env.REACT_APP_API_KEY,
          region: 'KR',
        },
      }
    );

    setNowPlayingMovies(data.results);
  };

  useEffect(() => {
    const init = async () => {
      try {
        await getNowPlayingMovies();
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
      nowPlayingMovies,
      tabIndex,
    },
    actions: {
      handleTabChange,
    },
  };
};
