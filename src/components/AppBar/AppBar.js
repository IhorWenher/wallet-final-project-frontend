import { useSelector } from 'react-redux';
import Styles from './AppBar.module.css';
import Navigation from '../Navigation';
import HeaderNav from '../HeaderNav';
import Login from '../Login';
import { authSelectors } from '../../redux/auth';

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={Styles.container}>
      {!isLoggedIn ? (
        <Login />
      ) : (
        <>
          <Navigation />
          <HeaderNav />
        </>
      )}
    </header>
  );
};

export default AppBar;
