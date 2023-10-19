import Joi, { ValidationErrorItem } from 'joi'
import { IRegisterInput } from '../interfaces/validate'

const registerSchema = Joi.object<IRegisterInput>({
    firstName: Joi.string().trim().required().messages({
        'string.empty': 'First name is required',
    }),
    lastName: Joi.string().trim().required().messages({
        'string.empty': 'Last name is required',
    }),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .messages({
            'string.empty': 'Email is required',
            'string.email': 'Invalid email address',
        }),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
        .trim()
        .required()
        .messages({
            'string.empty': 'Password is required.',
            'string.pattern.base':
                'Password must be at least 6 characters and contain only alphabets and numbers',
        }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).messages({
        'any.only': 'Password and confirm password did not match.',
        'string.empty': 'Confirm password is required',
    }),
})

const validateRegister = (input: IRegisterInput) => {
    const { error } = registerSchema.validate(input, { abortEarly: false })
    if (error) {
        console.log(error.details)
        return error.details.reduce(
            (acc: Record<string, string>, el: ValidationErrorItem) => {
                acc[el.path[0]] = el.message
                return acc
            },
            {}
        )
    }
}

export default validateRegister
