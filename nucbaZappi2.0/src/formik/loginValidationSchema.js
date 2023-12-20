import * as Yup from 'yup'
import { regEmail } from '../utils'

export const loginValidationSchema = Yup.object({
    email: Yup.string()
      .matches(regEmail, 'Mail no valido')
      .required('Campo Requerido'),
    password: Yup.string()
      .min(6, 'Mínimo de caracteres: 6')
      .required('Campo Requerido'),
})