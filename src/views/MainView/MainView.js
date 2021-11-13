import Styles from './MainView.module.css';
import Dashboard from '../../components/Dashboard';
import AddTransactionBtn from '../../components/AddTransactionBtn';
import AddTransaction from "./components/addTransaction";

const MainView = () => {
  return <div className={Styles.container}>
    <Dashboard />
    <AddTransactionBtn />
    <AddTransaction />
  </div>;
};

export default MainView;
