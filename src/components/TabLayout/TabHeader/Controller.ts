import { Leagues } from '../../../types/leagues';

interface TabHeaderControllerObject {
  actions: {
    getTabHeaderTitle: () => string[];
  };
}

export const TabHeaderController = (
  allLeagues: Leagues[]
): TabHeaderControllerObject => {
  const getTabHeaderTitle = (): string[] => {
    const leagueAbbr = allLeagues.map((leagues) => {
      return leagues.abbr;
    });

    return leagueAbbr;
  };

  return {
    actions: {
      getTabHeaderTitle,
    },
  };
};
