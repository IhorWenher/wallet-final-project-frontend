import React, { useState } from 'react';

import Balance from '../../components/Balance';
import Dashboard from '../../components/Dashboard';
import AddTransactionBtn from '../../components/AddTransactionBtn';
import AddTransaction from '../../components/addTransaction';
import CurrencyRatesPanel from '../../components/CurrencyRatesPanel';
// import LogoutConfirm from '../../components/LogoutConfirm';
import Backdrop from '../../components/Backdrop';

import Styles from './MainView.module.css';


const MainView = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAddTransaction, setAddTransaction] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  function toggleAddTransaction() {
    setAddTransaction(!showAddTransaction)
  }

  return (
    <div className={Styles.container}>
      <Balance/>
      <CurrencyRatesPanel />
      <Dashboard />
      <AddTransactionBtn toggleAddTransaction={toggleAddTransaction} toggleModal={toggleModal} /> 

      {showModal &&
        <Backdrop>
          {showAddTransaction && <AddTransaction toggleAddTransaction={toggleAddTransaction} toggleModal={toggleModal} />}
        </Backdrop>}
    </div>
  );
};

export default MainView;