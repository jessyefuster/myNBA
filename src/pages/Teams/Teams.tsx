import { useTranslation } from 'react-i18next';
import styles from './Home.module.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className={`background ${styles.container}`}>
      <p className="headline-large">
        {t('title')}
      </p>
    </main>
  );
}

export default Home;
