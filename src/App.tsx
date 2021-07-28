import { useState } from 'react';
import Modal from 'react-modal'
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./style/global";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }

  function handleOpenNewTransactionClose(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleOpenNewTransactionClose}
      >
      
        <h2>Cadastra transação</h2>
      </Modal>

      <GlobalStyle />
    </>
  );
}


