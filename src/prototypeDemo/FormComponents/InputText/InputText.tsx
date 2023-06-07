import { getName } from "../../utils/getName";
import { Input } from "../Input.interface";

function InputText({ questionNumber, description }: Input) {
  return (
    <>
      <label>{description}</label>
      <input type="text" id={getName(questionNumber)} name={getName(questionNumber)} />
    </>
  );
}

export default InputText;
