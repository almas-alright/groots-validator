import { IErrorType } from "./ierror.types";

export interface IValidator {
    addRules(customizeRules: JSON, rules: any): void;
    getErrors(rules: JSON, errors: IErrorType): Promise<object>;
}
