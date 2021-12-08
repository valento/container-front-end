import axios from 'axios'

export default {
  user: {
  // Sign up new user with email:
    signup: credentials => axios.post('/user/auth', { credentials }).then(res => res.data.user),
  // Login old user with email and password:
    login: credentials => axios.post('/user/login', { credentials }).then(res => res.data.user),
  // Authenticate user with token:
    auth: credentials => axios.get('user/auth/ckeck', { credentials }).then(res => res.data.user),
  // Authorize user to role:
    //
  }
}
