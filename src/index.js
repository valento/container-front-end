import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { setAuthHeader,setAPI } from './misc/'
import rootReducer from './rootReducer'

import App from './App'

const { REACT_APP_API_HOST: API_HOST, NODE_ENV } = process.env
if(NODE_ENV !== 'development') setAPI(API_HOST)

let settings = {
  language: ''
}
let user = {}

if(localStorage.PIuserSecret) {
  user.token = localStorage.PIuserSecret
  user.new_user = false
} else {
  user.new_user = true
  //user.token = 'foo'
}

let initStore = Object.assign({},{user,settings})

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  rootReducer,
  initStore,
  enhancer(applyMiddleware(thunk))
)

const Root = (
  <Provider store={store}>
    <Router>
      <Route component={App} />
    </Router>
  </Provider>
)

ReactDOM.render(
  Root,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
