import logo from 'assets/images/logo.svg';
import { useTranslation } from 'react-i18next';
import styles from './App.module.css';

const App = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <header className={`background ${styles.header}`}>
        <img src={logo} className={styles.logo} alt="logo" />
        <p className="headline-large">
          {t('title')}
        </p>
        <a
          className={`title-large ${styles.link}`}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('learnReact')}
        </a>
      </header>
    </div>
  );
}

export default App;
