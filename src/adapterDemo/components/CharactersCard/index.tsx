import React from "react";
import { Result } from "../../interfaces/characters";
import classes from "./styles.module.css";

type Props = {
  nombre: Result["name"];
  estado: Result["status"];
  especies: Result["species"];
  genero: Result["gender"];
  origen: Result["origin"]["name"];
  urlImagen: Result["image"];
};

function Characters({
  nombre,
  estado,
  especies,
  genero,
  origen,
  urlImagen,
}: Props) {
  return (
    <div className={classes["character"]}>
      <img src={urlImagen} className={classes["character__image"]} />
      <p className={classes["character__name"]}>{nombre}</p>
      <p className={classes["character__state"]}>{estado}</p>
      <p className={classes["character__species"]}>{especies}</p>
      <p className={classes["character__gender"]}>{genero}</p>
      <p className={classes["character__origin"]}>{origen}</p>
    </div>
  );
}

export default Characters;
