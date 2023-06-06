import { useState } from "react";
import type { ModalInterface } from "../../interfaces/Modal.type";
import ModalDesktop from "../ModalDesktop/ModalDesktop";
import ModalMobile from "../ModalMobile/ModalMobile";
const WIDTH_THRESHOLD = 720;

function Modal(props: ModalInterface) {
  const [experience, setExperience] = useState(
    window.innerWidth > WIDTH_THRESHOLD ? "DESKTOP" : "MOBILE"
  );

  window.addEventListener("resize", () => {
    const newExperience =
      window.innerWidth > WIDTH_THRESHOLD ? "DESKTOP" : "MOBILE";
    if (newExperience !== experience) setExperience(newExperience);
  });

  return experience === "MOBILE" ? (
    <ModalMobile {...props} />
  ) : (
    <ModalDesktop {...props} />
  );
}

export default Modal;
