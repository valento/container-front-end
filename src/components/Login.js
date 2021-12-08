import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

import LoginForm from './forms/login'
import { signUp } from '../actions/auth'

const ui = {
  en: ['Welcome'],
  bg: ['Добре дошли']
}
const Login = ({lan}) => {
  console.log(lan)
  return (
    <div className='App centric full-vh'>
      <h2>{`${ui[lan][0]}, user`}</h2>
      <LoginForm pass={true}/>
      <div className='oval-but'><Button fluid content='Button' /></div>
    </div>
  )
}

const mapStateToProps = state => ({
  lan: state.settings.language
})

export default connect(mapStateToProps)(Login)
