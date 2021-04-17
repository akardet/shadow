import { gql } from '@apollo/client'

export type UserEmailAlertInputType = {
  email: string
  referrerId: string
}

export const CREATE_USER = gql`
  mutation CreateUser($input: UserEmailAlertInputType) {
    createUserEmailAlertSignup(input: $input) {
      id
    }
  }
`
