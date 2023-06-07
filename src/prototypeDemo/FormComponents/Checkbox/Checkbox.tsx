import * as React from "react";
import { getName } from "../../utils/getName";
import { Input } from "../Input.interface";

function Checkbox({
  questionNumber,
  options,
  description
}: Input) {
  return (
    <fieldset>
      <legend>{description}</legend>
      {options?.map(({value, description}) => (
        <React.Fragment key={value}>
          <input
            type="checkbox"
            id={value}
            name={getName(questionNumber)}
            value={value}
            
          />
          <label htmlFor={value} >{description}</label>
        </React.Fragment>
      ))}
    </fieldset>
  );
}

export default Checkbox;
