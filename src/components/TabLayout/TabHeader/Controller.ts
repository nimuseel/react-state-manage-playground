import { Movies } from '../../../types/movies';

interface TabHeaderControllerObject {
  actions: {
    getTabHeaderTitle: () => string[];
  };
}

export const TabHeaderController = (
  nowPlayingMovies: Movies[]
): TabHeaderControllerObject => {
  const getTabHeaderTitle = (): string[] => {
    /*const leagueAbbr = nowPlayingMovies.map((leagues) => {
      return leagues.abbr;
    });*/

    return [''];
  };

  return {
    actions: {
      getTabHeaderTitle,
    },
  };
};
