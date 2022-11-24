import { IErrorType } from "./ierror.types";

export interface IValidator {
    addRules(customizeRules: JSON, rules: JSON): void;
    getErrors(rules: JSON, errors: IErrorType): Promise<object>;
}
