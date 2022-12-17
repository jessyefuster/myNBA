import { useEffect, useState } from 'react';
import TeamsService, { Team } from 'api/services/Teams';
import styles from './Teams.module.css';

const Teams = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [error, setError] = useState<boolean>();

  const loadTeams = async () => {
    try {
      const teams = await TeamsService.list();
      setTeams(teams);
    }
    catch (e) {
      setError(true);
    }
  }

  useEffect(() => {
    loadTeams();
  }, []);

  return (
    <main className={`background ${styles.container}`}>
      {teams.map(team => (
        <div key={team.teamId} className={styles.team}>
          <img className={`logo ${styles.teamLogo}`} src={team.logoUrl} alt="team logo" />
          <p className={`title-medium ${styles.teamName}`}>
            {team.fullName}
          </p>
        </div>
      ))}
    </main>
  );
}

export default Teams;
