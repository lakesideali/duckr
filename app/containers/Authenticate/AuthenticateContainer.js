import React, { PropTypes } from 'react'
import { Authenticate } from 'components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActionCreators from 'redux/modules/users'

const AuthenticateContainer = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchAndHandleAuthedUser: PropTypes.func.isRequired
  },
  contextTypes: {
    router: PropTypes.object.isRequired
  },
  handleAuth (e) {
    e.preventDefault()
    this.props.fetchAndHandleAuthedUser()
    .then(() => this.context.router.replace('feed'))
  },
  render () {
    return (
      <Authenticate
        onAuth={this.handleAuth}
        isFetching={this.props.isFetching}
        error={this.props.error} />
    )
  },
})

export default connect(
  ({users}) => ({isFetching: users.isFetching, error: users.error}),
  (dispatch) => bindActionCreators(userActionCreators, dispatch)
  )(AuthenticateContainer)
