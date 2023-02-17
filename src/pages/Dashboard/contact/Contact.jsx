import React from 'react'
import { useFormik } from 'formik'
import './contact.css'
import contactSchema from './Validations'

const onSubmit = async (values, actions) => {
  console.log(values)
  console.log(actions)
  await new Promise((r) => setTimeout(r, 1000))
  actions.resetForm()
}
function Contact() {
  const {
    handleChange,
    handleSubmit,
    handleBlur,
    values,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
    },

    validationSchema: contactSchema,
    onSubmit,
  })

  return (
    <form onSubmit={handleSubmit} className="form">
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          name="firstName"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur('firstName')}
          value={values.firstName}
          className={errors.firstName && touched.firstName ? 'input-error' : ''}
        />
        {errors.firstName && touched.firstName && (
          <p className="error-message">{errors.firstName}</p>
        )}
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          name="lastName"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur('lastName')}
          value={values.lastName}
          className={errors.lastName && touched.lastName ? 'input-error' : ''}
        />
        {errors.lastName && touched.lastName && (
          <p className="error-message">{errors.lastName}</p>
        )}
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={handleChange}
          onBlur={handleBlur('email')}
          value={values.email}
          className={errors.email && touched.email ? 'input-error' : ''}
        />
        {errors.email && touched.email && (
          <p className="error-message">{errors.email}</p>
        )}
      </div>
      <div>
        <label htmlFor="message">Mesajınız</label>
        <textarea
          id="message"
          name="message"
          type="text"
          onChange={handleChange}
          onBlur={handleBlur('message')}
          value={values.text}
          className={errors.message && touched.message ? 'input-error' : ''}
        />
        {errors.message && touched.message && (
          <p className="error-message">{errors.message}</p>
        )}
      </div>
      <div>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default Contact
