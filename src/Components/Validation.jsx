import validator from 'validator';

function Validation(data, rules) {
    console.log(data);
    let errors = {}
    // if (Object.keys(data).length === 0) {
    //     for (const key of Object.keys(rules)) {
    //         errors[key] = ["Please fill in your details"]
    //     }
    //     return errors;
    // }
    Object.keys(data).forEach(field => {
        if (rules.hasOwnProperty(field)) {
            const fieldErrors = []
            const val = data[field]
            // if (rules[field].true) {
            // if (val === 'false') {
            //     fieldErrors.push("Must be checked")
            // }
            // else {
            if (rules[field].required && validator.isEmpty(val)) {
                console.log('empty');
                fieldErrors.push("Please fill in your details")
            }
            if (!validator.isEmpty(val)) {
                if (rules[field].minLength && !validator.isLength(val, rules[field].minLength)) {
                    console.log('min');
                    fieldErrors.push(`Enter at least ${rules[field].minLength} characters`)
                }
                if (rules[field].isAlpha && !validator.isAlpha(val)) {
                    fieldErrors.push("Enter only letters")
                }
                if (rules[field].email && !validator.isEmail(val)) {
                    fieldErrors.push("Enter valid email")
                }
                if (rules[field].isNumeric && !validator.isNumeric(val)) {
                    fieldErrors.push("Enter only numbers")
                }
                if (fieldErrors.length > 0) {
                    console.log(fieldErrors);
                    errors[field] = fieldErrors
                }

            }

        }



    })
    return errors;
}

export default Validation
