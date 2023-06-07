import { Input } from "../../FormComponents/Input.interface";

export enum InputType {
    Text = "text",
    Checkbox = "checkbox"
}

export interface FieldDescription extends Input {
    inputType: InputType,
}


export interface FormProps {
    fields: FieldDescription[],
}