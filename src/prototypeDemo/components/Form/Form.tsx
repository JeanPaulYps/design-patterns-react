import Checkbox from "../../FormComponents/Checkbox/Checkbox";
import { Input } from "../../FormComponents/Input.interface";
import InputText from "../../FormComponents/InputText/InputText";
import { getName } from "../../utils/getName";
import { FormProps, InputType } from "./Form.type";

const componentByFormType = {
  [InputType.Text]: (props: Input) => <InputText {...props} />,
  [InputType.Checkbox]: (props: Input) => <Checkbox {...props} />,
};

function Form({ fields }: FormProps) {
  return (
    <>
      {fields.map(({ inputType, ...props }) => {
        const FormComponent = componentByFormType[inputType];
        return (
          <>
            <FormComponent key={getName(props.questionNumber)} {...props} />
            <br />
          </>
        );
      })}
    </>
  );
}

export default Form;
