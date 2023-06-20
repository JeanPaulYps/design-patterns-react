export class Conversion {
  constructor(
    public readonly requestProperty: string,
    public readonly appProperty: string,
    public readonly defaultValue: unknown = ""
  ) {}
}
