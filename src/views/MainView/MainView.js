import { useState } from 'react';

import Styles from './MainView.module.css';
import Dashboard from '../../components/Dashboard';
import AddTransactionBtn from '../../components/AddTransactionBtn';
import AddTransaction from '../../components/addTransaction';

const MainView = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={Styles.container}>
      <Dashboard />
      <AddTransactionBtn toggleModal={toggleModal} />
      {showModal && <AddTransaction />}
    </div>
  );
};

export default MainView;
