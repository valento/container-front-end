import { SETTING_CHANGE } from '../types'

export const settings = (state={},action) => {
  switch (action.type) {

    default: return {...state, language:'en'}
    
  }
}
