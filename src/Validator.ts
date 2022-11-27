import { IErrorType } from "./types/ierror.types";
import { IValidator } from "./types/IValidator.interface";
import Rules from "./rules/rules.json";

export class Validator implements IValidator {
    rules: any;
    constructor() {
        this.rules = Rules;
    }

    /**
     *
     * @param customizeRules add more customize rules.
     * @return void;
     */
    addRules(customizeRules: JSON): void {
        const allRule = { ...customizeRules, ...Rules };
        this.rules = allRule;
    }

    getErrors(rules: JSON, errors: IErrorType): Promise<object> {
        rules = this.rules;
        console.log(rules);

        throw new Error("Method not implemented.");
    }
}
