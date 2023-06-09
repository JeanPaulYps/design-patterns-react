import { FormEventHandler, useRef, useState } from "react";
import Form from "./components/Form/Form";
import {
  FieldDescription,
  FormProps,
  InputType,
} from "./components/Form/Form.type";
import { Template, templates } from "./FormTemplates/templates";

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
  const [template, setTemplate] = useState<FieldDescription[]>();
  const ref = useRef<HTMLFormElement>(null);
  const onSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    if (ref.current) {
      event.preventDefault();
      const formData = new FormData(ref.current);
      console.log(event.target);
      const templateKey = formData.get("template") as string;
      const selectedTemplate = templates[templateKey].template;
      if (selectedTemplate) setTemplate(selectedTemplate);
    }
  };

  return (
    <>
      <h1>Escoge la plantilla sobre la cual quieres trabajar</h1>
      <p>Tenemos las siguientes opciones disponibles para elegir:</p>
      <br />
      <form onSubmit={onSubmit} ref={ref}>
        {Object.entries(templates).map(([key, template]) => (
          <>
            <input
              type="radio"
              id={key}
              value={key}
              name="template"
              key={key}
            />
            <label htmlFor={key}>{template.description}</label>
            <br />
          </>
        ))}
        <br />
        <button type="submit">Ver formulario</button>
      </form>
      <br />
      {template && <Form fields={template} />}
      {/* <Form fields={descriptor} /> */}
    </>
  );
}

export default PrototypeDemo;
