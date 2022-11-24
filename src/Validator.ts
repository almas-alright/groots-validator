import { IErrorType } from "./types/ierror.types";
import { IValidator } from "./types/IValidator.interface";
import Rules from "./rules/rules.json";

export class Validator implements IValidator {
    rules: any;
    constructor(rules: any) {
        rules = Rules;
        console.log(rules);
    }
    addRules(customizeRules: JSON, rules: JSON): void {
        throw new Error("Method not implemented.");
    }
    getErrors(rules: JSON, errors: IErrorType): Promise<object> {
        throw new Error("Method not implemented.");
    }
}
