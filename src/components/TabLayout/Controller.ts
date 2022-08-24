import axios from 'axios';

export const TabLayoutController = () => {
  const getAllLeagues = async () => {
    const { data } = await axios.get(
      'https://api-football-standings.azharimm.site/leagues'
    );

    console.log(data);
  };

  return {
    getAllLeagues,
  };
};
