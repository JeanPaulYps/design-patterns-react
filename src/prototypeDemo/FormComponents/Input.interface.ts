export interface Option {
    value: string, 
    description: string,
}

export interface Input {
    questionNumber: number,
    description: string,
    options?: Option[]
}