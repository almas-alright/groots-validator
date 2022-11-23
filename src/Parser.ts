
class Parser{
    parse(datas, callback) {
        for (let key in datas) {
            let field = key
            let value = datas[field]
            let fieldValue = value.value
            let fieldRules = value.rules

            if (fieldRules) {

                var field_front_regex = /(field:.+)/g,
                    field_matched = field_front_regex.exec(fieldRules),
                    mached = null,
                    field_front = null;

                if (field_matched) {
                    mached = field_matched[1];
                    mached = mached.split('|');

                    var mached_rules = mached[0];

                    field_front = mached_rules.split(':')[1];
                    fieldRules = fieldRules.replace(mached_rules, '');
                }

                let rules = fieldRules.split('|');
                let isRequired = rules.indexOf('required');

                rules.forEach((rule, index, tab) => {
                    if (rule) {

                        let ruleTab = rule.split(':');

                        if (isRequired >= 0 || fieldValue) {
                            fieldValue = fieldValue.toString();

                            if (ruleTab.length > 1) {
                                let regle = ruleTab[0];
                                let param = ruleTab[1];

                                this[regle](field, fieldValue, param, field_front);
                            }else {
                                this[ruleTab[0]](field, fieldValue, field_front);
                            }
                        }
                    }
                })
            }
        }


    }
}