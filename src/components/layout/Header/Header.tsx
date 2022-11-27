import logo from 'assets/images/logo.png';
import styles from './Header.module.css';

const Header = () => {
  return (
    // <AppBar>Logo</AppBar>
    <header className={`primary ${styles.container}`}>
      <img src={logo} className={styles.logo} alt="logo" />
      <h1 className="headline-small">
        myNBA
      </h1>
    </header>
  );
}

export default Header;
