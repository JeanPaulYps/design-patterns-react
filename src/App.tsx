import { useState } from "react";
import Modal from "./components/Modal/Modal";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const props = {
    isOpen,
    onExit: () => setIsOpen(false),
  };


  return (
    <>
      <button onClick={() => setIsOpen(true)}> Open modal </button>
      <Modal {...props} />
    </>
  );
}

export default App;
