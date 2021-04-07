export const validateRequiredFields = (values, requiredFields) =>
    requiredFields
        .filter(x => !values[x])
        .reduce((a, b) => ({ ...a, [b]: 'The field is required.' }), {});

export const validatePasswordEquality = (values, password, repeatedPassword) => {
    let errors = {};

    if (values[password] &&
        values[repeatedPassword] &&
        (values[password] !== values[repeatedPassword])) {
        errors[repeatedPassword] = 'Your passwords do not match.';
    }

    return errors;
};


export const validatePasswordRequirements = (values, password) => {
    let errors = {};
    let passwordErrors = [];

    if (values[password].length < 8) {
        passwordErrors.push('Your password is too short.');
    }

    if (!values[password].match(/[A-Z]/)) {
        passwordErrors.push('Your password must contain at least one capital letter.');
    }

    if (!values[password].match(/\d+/g)) {
        passwordErrors.push('Your password must contain at least one digit.');
    }

    if (passwordErrors.length > 0) {
        errors[password] = passwordErrors;
    }

    return errors
};

export const validatePhoneNumber = (values, phone) => {
    let errors = {};

    if (values[phone].length && !values[phone].match(/^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/)) {
        errors[phone] = 'Your phone number does not meet requirements.';
    }

    return errors;
};

const capitalizedWord = (word) => word.charAt(0).toUpperCase() + word.slice(1);

export const validateInputLength = (values, validationObject) => {
    let errors = {};
    validationObject.forEach(validation => {
        if (values[validation.property] === null)
            return;

        if (values[validation.property].length > validation.maxLength) {
            errors[validation.property] = `${capitalizedWord(validation.property)} must be maximum ${validation.maxLength} characters long.`;
        }
    });

    return errors;
};

export const validateDecimalNumbers = (values, numbers) => {
    let errors = {};

    numbers.forEach(number => {
        const value = values[number].toString();
        if (!value.match(/^[+]?[0-9]\d*([\.\,]\d{1,2})?\s*$/)) {
            errors[number] = 'The field does not meet requirements.';
        }
    });

    return errors;
};
