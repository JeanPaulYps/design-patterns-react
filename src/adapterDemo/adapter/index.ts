import get from "lodash.get";
import set from "lodash.set";
import { Conversion } from "./Conversion";

export class Adapter {
  constructor(private conversions: Conversion[]) {}

  public convertRequestToApp(request: object) {
    const newObject = {};
    for (const conversion of this.conversions) {
      set(
        newObject,
        conversion.appProperty,
        get(request, conversion.requestProperty, conversion.defaultValue)
      );
    }
    return newObject;
  }

  public convertAppToRequest(request: object) {
    const newObject = {};
    for (const conversion of this.conversions) {
      set(
        newObject,
        conversion.requestProperty,
        get(request, conversion.appProperty, conversion.defaultValue)
      );
    }
  }
}