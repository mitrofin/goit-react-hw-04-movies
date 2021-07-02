import Navigation from '../Navigation/Navigation';
import styles from './AppBar.module.scss';

const AppBar = () => {
  return (
    <header className={styles.siteHeader}>
      <Navigation />
    </header>
  );
};

export default AppBar;
