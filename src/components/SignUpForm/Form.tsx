import { withFormik, FormikProps } from 'formik'
import classnames from 'classnames'
import * as Yup from 'yup'

import { Button } from '../Button'
import { TextInput } from './TextInput'

import styles from './Form.module.scss'

interface FormValues {
  firstName: string
  lastName: string
  email: string
}

interface FormValueProp {
  user: FormValues
}

interface FormPropTypes extends FormValueProp {
  className?: string
}

const formikEnhancer = withFormik<FormPropTypes, FormValues>({
  validationSchema: Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Minimum of 2 characters is required')
      .required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
  }),

  mapPropsToValues: ({ user }) => ({
    ...user,
  }),
  handleSubmit: (payload, { setSubmitting }) => {
    console.log(payload.email)
    setSubmitting(false)
  },
  displayName: 'MyForm',
})

const MyForm = ({
  values,
  touched,
  errors,
  dirty,
  handleChange,
  handleBlur,
  handleSubmit,
  handleReset,
  isSubmitting,
  className,
}: FormPropTypes & FormikProps<FormValues>) => {
  return (
    <form
      className={classnames(styles['signup__form'], className)}
      onSubmit={handleSubmit}
    >
      <TextInput
        id="firstName"
        htmlFor="firstName"
        type="text"
        label="First Name"
        placeholder="First Name"
        error={touched.firstName ? errors.firstName : undefined}
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="lastName"
        htmlFor="lastName"
        type="text"
        label="Last Name"
        placeholder="Last Name"
        error={touched.lastName ? errors.lastName : undefined}
        value={values.lastName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="email"
        htmlFor="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        className={styles['input__email']}
        error={touched.email ? errors.email : undefined}
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button
        type="button"
        className="outline"
        onClick={handleReset}
        disabled={!dirty || isSubmitting}
      >
        Reset
      </Button>
      <Button type="submit" disabled={isSubmitting}>
        Submit
      </Button>
    </form>
  )
}

export const Form = formikEnhancer(MyForm)
