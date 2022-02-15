import { Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import UserRoute from './routes/UserRoute'
import FrontEnd from './FrontEnd'
import Top from './components/Top'
import Login from './components/Login'
import Home from './components/home'

const App = ( {location} ) => {

  const { REACT_APP_TIMELINE_HOST: timelineHost } = process.env || null

  const TimelineApp = ({ history }) => (
    <FrontEnd history={history} host={timelineHost ? timelineHost : 'http://localhost:3001'} name='Timeline' />
  )

  return (
    <div className='container'>
      <Route location={location} path='/' component={Top} />
      <UserRoute location={location} path='/' exact component={Home} />
      <Route location={location} path='/login' exact component={Login} />
      <Route location={location} path='/timeline' exact component={TimelineApp} />
      {/*<UserRoute location={location} path='/timeline' exact component={TimelineApp} />*/}
    </div>
  )
}

App.propTypes = ({
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
})

export default App
