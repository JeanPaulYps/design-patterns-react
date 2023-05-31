import { Modal } from "../../interfaces/Modal.type";
import classes from "./styles.module.css";

function ModalMobile(props: Modal) {
  const modalVisibility = props.isOpen ? "" : classes["dialog--hidden"];
  return (
    <div className={modalVisibility}>
      <div className={classes.dialog__backdrop}>
        <div className={classes.dialog__content}>
          <div className={classes.dialog__text}>
            <p>Hola</p>
          </div>
          <hr />
          <div className={classes.dialog__buttonSection}>
            <button
              className={classes["dialog__button--failure"]}
              onClick={props.onExit}
            >
              Cancelar
            </button>
            <button className={classes["dialog__button--success"]}>
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalMobile;
