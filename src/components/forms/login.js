import React from 'react'
import validator from 'validator'
import { connect } from 'react-redux'
import { Form,Button,Message } from 'semantic-ui-react'

import { signUp } from '../../actions/auth'

class LoginForm extends React.Component {
  state = {
    ui: {
      en: ['user@email.com','mySecre8Pa$$word','Submit'],
      bg: ['user@email.com','mySecre8Pa$$word','Потвърди']
    },
    data: {},
    errors:{}
  }

  //validate data:
  validate = ( data ) => {
    const errors = {}
    const { email, password } = data
    if(!validator.isEmail(email)) errors.email = 'Invalid email address'
    if(!password) errors.password = 'No password data'
    return errors
  }

  // handle data input:
  onChange = (e, {name}) => {
    this.setState({
      errors: {},
      data: {...this.state.data, [name]:e.target.value}
    })
  }

  //submit => action creator:
  onSubmit = (e) => {
  // Validate data:
    const errors = this.validate(this.state.data)
    this.setState({errors,data:{}})
    if(!Object.keys(errors).length) {
      this.props.signUp(this.state.data)
      .catch(err => this.setState({ errors: err.response.data.errors, data:{} }))
    }
  }

  render() {
    const { lan,pass } = this.props
    const { errors,data } = this.state
    const { [lan]:ui } = this.state.ui
    return (
      <div className={pass? 'custom-form oval-but alert' : 'custom-form oval-but'}>
        {errors.global && <Message negative size='mini'>
          <Message.Header>Something went wrong</Message.Header>
          <p>{errors.global}</p>
        </Message>}
        <Form onSubmit={this.onSubmit}>
          <Form.Input
            onChange={this.onChange}
            name='email'
            type='email'
            placeholder={ui[0]}
          />
  {/*  Error messages:  */}
        {errors.email && <Message warning>
          <p>{errors.email}</p>
        </Message>}

          {pass && <Form.Input
            onChange={this.onChange}
            name='password'
            type='password'
            placeholder={ui[1]}
          />}
          <Button disabled={Boolean(Object.keys(errors).length || !data.email || !data.password)}
            type='submit' color='blue' fluid
            content={(ui[2]).toUpperCase()}
          />
        </Form>
      </div>
    )}
}

const mapStateToProps = state => ({
  lan: state.settings.language
})

export default connect(mapStateToProps, { signUp })(LoginForm)
