import logo from 'assets/images/logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={`${styles.container}`}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className="headline-small">
        myNBA
      </h1>
    </header>
  );
}

export default Header;
