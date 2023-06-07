import Form from "./components/Form/Form";
import { FormProps, InputType } from "./components/Form/Form.type";

const descriptor: FormProps["fields"] = [
  {
    inputType: InputType.Text,
    questionNumber: 1,
    description: "Este es un input",
  },
  {
    inputType: InputType.Checkbox,
    questionNumber: 2,
    description: "Este es un checkbox",
    options: [
      { value: "10", description: "Diez" },
      { value: "20", description: "Veinte" },
    ],
  },
];

function PrototypeDemo() {
  return (
    <>
      <Form fields={descriptor}/>
    </>
  );
}

export default PrototypeDemo;
