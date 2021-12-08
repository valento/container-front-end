import { Route } from 'react-router-dom'

import UserRoute from './routes/UserRoute'
import FrontEnd from './FrontEnd'
import Top from './components/Top'
import Login from './components/Login'
import Home from './components/home'

const App = () => {

  const { REACT_APP_TIMELINE_HOST: timelineHost } = process.env || null

  const TimelineApp = ({ history }) => (
    <FrontEnd history={history} host={timelineHost ? timelineHost : 'http://localhost:3001'} name='Timeline' />
  )

  return (
    <div className='container'>
      <Route path='/' component={Top} />
      <UserRoute path='/' exact component={Home} />
      <Route path='/login' exact component={Login} />
      <UserRoute path='/timeline' exact component={TimelineApp} />
    </div>
  )
}

export default App
