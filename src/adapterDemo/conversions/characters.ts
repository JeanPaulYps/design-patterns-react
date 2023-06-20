import { Adapter } from "../adapter";
import { Conversion } from "../adapter/Conversion";

const id = new Conversion("id", "id");
const name = new Conversion("name", "nombre");
const status = new Conversion("status", "estado");
const species = new Conversion("species", "especies");
const gender = new Conversion("gender", "genero");
const origin = new Conversion("origin.name", "origen");
const image = new Conversion("image", "urlImagen", "");

export const charactersAdapter = new Adapter([id, status, species, gender, origin, image, name]);