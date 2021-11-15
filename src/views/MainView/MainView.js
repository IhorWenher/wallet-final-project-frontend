import Styles from './MainView.module.css';
import Dashboard from '../../components/Dashboard';
import AddTransactionBtn from '../../components/AddTransactionBtn';
import Header from '../../components/Header'

const MainView = () => {
  return <div className={Styles.container}>
    <Header/>
    <Dashboard />
    <AddTransactionBtn/>
  </div>;
};

export default MainView;
