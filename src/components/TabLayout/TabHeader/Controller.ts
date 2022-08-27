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
    const leagueSlugs = allLeagues.map((leagues) => {
      return leagues.slug;
    });

    return leagueSlugs;
  };

  return {
    actions: {
      getTabHeaderTitle,
    },
  };
};
