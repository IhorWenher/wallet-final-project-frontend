import Styles from './MainView.module.css';
import Dashboard from '../../components/Dashboard';
import AddTransactionBtn from '../../components/AddTransactionBtn';

const MainView = () => {
  return <div className={Styles.container}>
    <Dashboard />
    <AddTransactionBtn/>
  </div>;
};

export default MainView;
