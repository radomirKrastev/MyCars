import * as Yup from 'yup';

const registerSchemaValidation = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

export default registerSchemaValidation;
