import Styles from './MainView.module.css';
import Dashboard from '../../components/Dashboard';
import AddTransactionBtn from '../../components/AddTransactionBtn';
import CurrencyRatesPanel from '../../components/CurrencyRatesPanel';

const MainView = () => {
  return <div className={Styles.container}>
    <CurrencyRatesPanel />
    <Dashboard />
    <AddTransactionBtn/>
  </div>;
};

export default MainView;