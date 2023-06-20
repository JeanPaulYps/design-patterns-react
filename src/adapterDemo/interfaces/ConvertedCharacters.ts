import { Result } from "./characters";

export type ConvertedCharacters = {
  id: Result["id"];
  nombre: Result["name"];
  estado: Result["status"];
  especies: Result["species"];
  genero: Result["gender"];
  origen: Result["origin"]["name"];
  urlImagen: Result["image"];
};
