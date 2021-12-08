import { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


const FrontEnd = ({ document,host,name,history,token }) => {

  useEffect( () => {
    console.log(host)
    fetch(`${host}/asset-manifest.json`)
    .then( res => res.json() )
    .then( manifest => {
      const script = document.createElement('script')
      script.id = `microfront-script-${name}`
      script.crossOrigin = ''
      script.onLoad = renderMicro
      script.src = `${host}${manifest.files['main.js']}`
      document.head.appendChild(script)
    } )
    return (name) => {
      window[`clean${name}App`](`${name}-div`)
    }
  } )

  const renderMicro = () => {
    console.log('Run this MicroFront Render:',name)
    window[`render${name}`](`${name}-div`,history,token)
  }

  return (
    <div id={`${name}-div`}></div>
  )
}

FrontEnd.defaultProps = { document,window }

const mapStateToProps = state => ({
  token: state.user.token
})

export default connect(mapStateToProps)(FrontEnd)
