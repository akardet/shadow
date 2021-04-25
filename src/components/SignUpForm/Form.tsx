import { useState } from 'react'
import { Formik } from 'formik'
import classnames from 'classnames'
import * as Yup from 'yup'

// import { useMutation } from '@apollo/client'

// import { CREATE_USER, UserEmailAlertInputType } from '../../queries/CreateUser'

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

export const Form = ({ className }: FormPropTypes) => {
  const [submitMessage, setSubmitMessage] = useState('Submit')
  return (
    <Formik
      initialValues={{ email: '', firstName: '', lastName: '' }}
      validationSchema={() => {
        return Yup.object().shape({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
        })
      }}
      onSubmit={async (payload) => {
        const res = await fetch('/api/subscribe', {
          body: JSON.stringify({
            email: payload.email,
            firstName: payload.firstName,
            lastName: payload.lastName,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        })

        const { error } = await res.json()

        if (error) {
          // 4. If there was an error, update the message in state.
          console.error(error)
          setSubmitMessage('Unable to submit')
        }

        setSubmitMessage('Success')
      }}
    >
      {({
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form
          id={'signup'}
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
            type="submit"
            className={classnames(
              styles['input__button'],
              styles['input__button-submit'],
            )}
            disabled={isSubmitting}
          >
            {submitMessage}
          </Button>
          {/* <Button
            type="button"
            onClick={handleReset}
            disabled={!dirty || isSubmitting}
            className={classnames(
              styles['input__button'],
              styles['input__button-reset'],
            )}
          >
            Reset
          </Button> */}
        </form>
      )}
    </Formik>
  )
}

// export const Form = formikEnhancer(MyForm)
