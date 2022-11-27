## Client usage

```ts
const validator = new Validator();
// Use this App level
app.use(validator);

// Add new rules and mapping it with route levels.
const addnewEndpointRules = validator.addRules(newRules: json); // return validator.getErrors
`POST_RULES:addnewEndpointRules`
app.post('/newEndpoint', constroller );
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
    IErrorType <|.. Validator : type
    class Validator{
        %% rules means existing rules
        +rules:<Rules IRules>;
        +constructor(rules:rules, errors:IErrorType);
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

    IErrorType <|.. IRules : type
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
