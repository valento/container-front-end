import { USER_AUTHENTICATED, USER_SIGNUP } from '../types'

export const user = (state={},action) => {
  switch (action.type) {

    case 'USER_AUTHENTICATED':
      return action.user

    case 'USER_SIGNUP':
      return {...state, signed:true }

    default: return {...state, name: 'Valentin'}

  }
}
