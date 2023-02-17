import * as yup from 'yup'
const contactSchema = yup.object().shape({
  firstName: yup.string().required('please enter name'),
  lastName: yup.string().required('required'),
  email: yup.string().email('please enter email'),
  message: yup.string().required('required').min(5),
})

export default contactSchema
