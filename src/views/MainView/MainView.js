import Styles from './MainView.module.css';
import Dashboard from '../../components/Dashboard';
import AddTransactionBtn from '../../components/AddTransactionBtn';
import CurrencyRatesPanel from '../../components/CurrencyRatesPanel/CurrencyRatesPanel';

const MainView = () => {
  return <div className={Styles.container}>
    <Dashboard />
    <AddTransactionBtn/>
    <CurrencyRatesPanel />
  </div>;
};

export default MainView;
