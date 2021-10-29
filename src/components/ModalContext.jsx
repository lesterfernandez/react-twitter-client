import { createContext, useState } from "react";

export const Modal = createContext({});

const Context = ({ children }) => {
  const [modalState, setModal] = useState(false);
  const togglePostModal = () => {
    setModal(c => !c);
  };
  return (
    <Modal.Provider value={{ modalState, togglePostModal }}>
      {children}
    </Modal.Provider>
  );
};
export default Context;
