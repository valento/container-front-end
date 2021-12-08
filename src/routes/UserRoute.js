import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

const  UserRoute = ({ isAuth, lan, component: Component, ...rest }) => {
  return (
    <Route {...rest} render = {props => isAuth? <Component lan={lan} {...props} /> : <Redirect to='/login' />}/>
  )
}

const mapStateToProps = state => ({
  isAuth: !!state.user.token,
  lan: state.settings.language
})

export default connect(mapStateToProps)(UserRoute)
