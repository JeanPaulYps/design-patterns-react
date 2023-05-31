import { useState } from "react";
import ModalDesktop from "./components/ModalDesktop/ModalDesktop";
import ModalMobile from "./components/ModalMobile/ModalMobile";

const WIDTH_THRESHOLD = 720;

function App() {
  const [experience, setExperience] = useState(
    window.innerWidth > WIDTH_THRESHOLD ? "DESKTOP" : "MOBILE"
  );
  window.addEventListener("resize", () => {
    const newExperience =
      window.innerWidth > WIDTH_THRESHOLD ? "DESKTOP" : "MOBILE";
    if (newExperience !== experience) setExperience(newExperience);
  });
  const [isOpen, setIsOpen] = useState(true);

  const props = {
    isOpen,
    onExit: () => setIsOpen(false),
  };

  const Modal = () =>
    experience === "MOBILE" ? (
      <ModalMobile {...props} />
    ) : (
      <ModalDesktop {...props} />
    );

  return (
    <>
      <button onClick={() => setIsOpen(true)}> Open modal </button>
      <Modal />
    </>
  );
}

export default App;
