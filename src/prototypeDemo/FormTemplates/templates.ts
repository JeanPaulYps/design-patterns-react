import { FieldDescription, InputType } from "../components/Form/Form.type";

export type Template = {
  id: string;
  title: string;
  description: string;
  template: FieldDescription[];
};

const feedbackTemplate: Template = {
  id: "feedback",
  title: "Recibir feedback de tu producto",
  description: "Mejora tu producto recibiendo feedback de tus usuarios",
  template: [
    {
      inputType: InputType.Text,
      questionNumber: 1,
      description: "¿Qué fue lo primero que escuchaste de nosotros?",
    },
    {
      inputType: InputType.Text,
      questionNumber: 2,
      description: "¿Cómo estas satisfecho con nuestro producto?",
    },
    {
      inputType: InputType.Text,
      questionNumber: 3,
      description:
        "¿Cuales son las características que te gustan de nuestro producto?",
      options: [
        { value: "estetica", description: "Estetica del producto" },
        { value: "atencionDelCliente", description: "Atención del cliente" },
        { value: "guias", description: "Guías sobre como usar el producto" },
        { value: "calidad", description: "Calidad del producto" },
      ],
    },
    {
      inputType: InputType.Text,
      questionNumber: 4,
      description: "¿Qué te disgusta del producto?¿Cómo podemos mejorarlo?",
    },
  ],
};

const atencionAlClienteTemplate: Template = {
  id: "atencionAlCliente",
  title: "Formulario para recibir comentarios de atención al cliente",
  description:
    "Mejora la atención al cliente escuchando lo que tus usuarios tienen que decir ",
  template: [
    {
      inputType: InputType.Text,
      questionNumber: 1,
      description: "¿Qué significa un buen servicio al cliente para ti?",
    },
    {
      inputType: InputType.Text,
      questionNumber: 2,
      description: "¿Cúal es el mejor servicio que has recibido?",
    },
    {
      inputType: InputType.Checkbox,
      questionNumber: 3,
      description:
        "¿Cuales son las habilidades mas importantes para servicio al cliente?",
      options: [
        { value: "empatia", description: "Empatia" },
        { value: "escucha", description: "Escucha activa" },
        { value: "conocimiento", description: "Que sepa como ayudarme" },
      ],
    },
  ],
};

const encuestaEmpleado: Template = {
  id: "empleado",
  title: "Formulario satisfacción empleado",
  description: "Conoce la percepción de tus empleados acerca de su trabajo",
  template: [
    {
      inputType: InputType.Text,
      questionNumber: 1,
      description: "¿Qué tanto sientes los valores de la compañía en tu rol?",
    },
    {
      inputType: InputType.Text,
      questionNumber: 2,
      description: "¿Qué es lo que menos te gusta de tu trabajo?",
    },
    {
      inputType: InputType.Checkbox,
      questionNumber: 3,
      description: "¿Por quienes te sientes apoyado?",
      options: [
        { value: "lider", description: "Lider de proyecto" },
        { value: "equipo", description: "Tu equipo" },
        { value: "cliente", description: "Tu cliente" },
        { value: "hub", description: "Tu hub" },
      ],
    },
  ],
};

export const templates: Record<string, Template> = {
  feedbackTemplate,
  atencionAlClienteTemplate,
  encuestaEmpleado,
};
