import { IErrorType } from "./ierror.types";

interface IRule {
    ruleExists(): Promise<boolean>;
    verify(rule: any, errors: IErrorType): Promise<object>;
}
