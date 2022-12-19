import client from '../client';

// TODO: move types
type Conference = 
  | 'East'
  | 'West';

type EasternDivision = 
  | 'Atlantic'
  | 'Central'
  | 'Southeast';

type WesternDivision = 
  | 'Northwest'
  | 'Pacific'
  | 'Southwest';

type Division = EasternDivision | WesternDivision;

export interface TeamDTO {
  city: string,
  altCityName: string,
  fullName: string,
  tricode: string,
  teamId: string,
  nickname: string,
  urlName: string,
  teamShortName: string,
  confName: Conference,
  divName: Division
}

export interface Team extends TeamDTO {
  logoUrl: string
}

interface EasternTeam extends Team {
  confName: 'East',
  divName: EasternDivision
}

interface WesternTeam extends Team {
  confName: 'West',
  divName: WesternDivision
}

export const isWesternTeam = (team: Team): team is WesternTeam => team.confName === 'West';
export const isEasternTeam = (team: Team): team is EasternTeam => team.confName === 'East';

const getTeams = async () => {
  const data = await client.get('teams.json').json<TeamDTO[]>();

  return data.map<Team>(item => ({
    ...item,
    logoUrl: `https://cdn.nba.com/logos/nba/${item.teamId}/global/L/logo.svg`
  }));
};

const TeamsService = {
  list: getTeams
}

export default TeamsService;
