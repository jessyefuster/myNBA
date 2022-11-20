import logo from 'assets/images/logo.svg';
import { useTranslation } from 'react-i18next';
import styles from './Header.module.css';

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className={`background ${styles.container}`}>
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
  );
}

export default Header;
