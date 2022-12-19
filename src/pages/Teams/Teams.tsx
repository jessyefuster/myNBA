import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import TeamsService, { Team } from 'api/services/Teams';
import TeamsCard from 'features/Teams/TeamsCard/TeamsCard';

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
    <main className="background">
      <Container maxWidth="lg">
        <TeamsCard teams={teams} />
      </Container>
    </main>
  );
}

export default Teams;
