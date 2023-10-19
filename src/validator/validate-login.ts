import Joi, { ValidationErrorItem } from "joi";
import { ILoginInput } from "../interfaces/validate";


const loginSchema = Joi.object<ILoginInput>({
  email: Joi.string().required().messages({
    "string.empty": "Email address is required.",
  }),
  password: Joi.string().required().messages({
    "string.empty": "Password is required.",
  }),
});

const validateLogin = (input: ILoginInput) => {
  const { error } = loginSchema.validate(input, { abortEarly: false });
  if (error) {
    return error.details.reduce((acc: Record<string, string>, el: ValidationErrorItem) => {
      acc[el.path[0]] = el.message;
      return acc;
    }, {});
  }
};

export default validateLogin;
