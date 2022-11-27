## Client usage

```ts
const validator = new Validator();
app.use(validator);
// Add new rules in routes
const addRules = validator.addRules(newRules: json);
app.post('/newEndpoint', addRules(rules), constroller );
const errors = validator.getErrors;
```

```mermaid
classDiagram

    class IValidator{
        <<interface>>
        +addRules(rule:json, rules:<rules IRules>): void;
        +getErrors(rules:[], errors:IErrorType): Promise~obj~;
    }

    IValidator <|.. Validator : implements
    Validator o--|> IRules : composition
    IErrorType <|.. Validator : composition
    class Validator{
        +rules:<rules IRules>;
        +constructor(rules:[], errors:IErrorType);
        +addRules(rule:json, rules:<rules IRules>): void;
        +getErrors(rules:[], errors:IErrorType): Promise~obj~;
    }

    class IErrorType{
        <<type>>
        +path:string;
        +message:string;
        +code:string;
        +value:string;
    }

    IErrorType <|.. IRules : composition
    class IRules{
        <<interface>>
        +ruleExists():Promise~bool~;
        +verify(rule:any, errors:IErrorType) Promise~array~;
    }

    IRules <|.. Max : implements
    class Max{
        +constructor(rule:string,errors[]:IErrors)
        +ruleExists():Promise~bool~;
        +verify(rule:any, errors:IErrors) Promise~array~;
    }

    IRules <|.. Min : implements
    class Min{
        +constructor(rule:string,errors[]:IErrors)
        +ruleExists():Promise~bool~;
        +verify(rule:any, errors:IErrors) Promise~array~;
    }

    IRules <|.. Required : implements
    class Required{
        +constructor(rule:string,errors[]:IErrors)
        +ruleExists():Promise~bool~;
        +verify(rule:any, errors:IErrors) Promise~array~;
    }

    IRules <|.. isNullable : implements
    class isNullable{
        +constructor(rule:string,errors[]:IErrors)
        +ruleExists():Promise~bool~;
        +verify(rule:any, errors:IErrors) Promise~array~;
    }
```
