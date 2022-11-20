import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className={`background ${styles.container}`}>
      <p className="headline-large">
        {t('pageNotFound')}
      </p>
      <Link
        to="/"
        className={`title-large ${styles.link}`}
      >
        {t('goBackHome')}
      </Link>
    </main>
  );
}

export default Home;
