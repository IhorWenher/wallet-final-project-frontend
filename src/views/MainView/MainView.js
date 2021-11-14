import { useState } from 'react';

import Dashboard from '../../components/Dashboard';
import AddTransactionBtn from '../../components/AddTransactionBtn';
import AddTransaction from '../../components/addTransaction';

import Styles from './MainView.module.css';

const MainView = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={Styles.container}>
      <Dashboard />
      <AddTransactionBtn toggleModal={toggleModal} />
      {showModal && (<AddTransaction />)}
    </div>
  );
};

export default MainView;
