import { Card, CardContent, CardHeader, Divider } from '@mui/material';
import { isEasternTeam, isWesternTeam, Team } from 'api/services/Teams';
import styles from './TeamsCard.module.css';

interface Props {
  teams: Team[]
}

const groupByConference = (teams: Team[]) => {
  return {
    westernTeams: teams.filter(isWesternTeam),
    easternTeams: teams.filter(isEasternTeam)
  }
}

const TeamsList = ({ list }: { list: Team[] }) => (
  <div className={styles.list}>
    {list.map(team => (
      <div key={team.teamId} className={styles.team}>
        <img className={`logo ${styles.teamLogo}`} src={team.logoUrl} alt="team logo" />
        <p className={`title-small ${styles.teamName}`}>
          {team.fullName}
        </p>
      </div>
    ))}
  </div>
);

const TeamsCard = ({ teams }: Props) => {  
  const { westernTeams, easternTeams } = groupByConference(teams);

  return (
    <Card variant="outlined">
      <CardHeader
        title="All teams"
        subheader="Standard league"
      />
      <Divider />
      <CardContent>
        <TeamsList list={westernTeams} />
        <TeamsList list={easternTeams} />
      </CardContent>
    </Card>
  );
}

export default TeamsCard;