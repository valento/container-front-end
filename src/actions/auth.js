import { USER_LOGGED, USER_SIGNUP, USER_AUTHENTICATED, USER_AUTHORIZED } from '../types'
import api from '../api/index.js'

export const userSigned = user => ({
  type: 'USER_SIGNUP',
  user
})

export const userLogged = user => ({
  type: 'USER_LOGGED',
  user
})

export const userAuthorized = user => ({
  type: 'USER_AUTHORIZED',
  user
})

export const userAuthenticated = user => ({
  type: 'USER_AUTHENTICATED',
  user
})

export const signUp = credentials => dispatch => api.user.signup(credentials)
  .then( user => {
    dispatch(userSigned(user))
  })
