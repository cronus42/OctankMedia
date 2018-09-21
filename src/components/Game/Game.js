import React from 'react'
import PropTypes from 'prop-types'

import { state } from 'aws-cognito-redux-saga'

const style = {
  page: {},
  layout: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center'
  },
  heading: {
    textAlign: 'center',
    fontSize: '48px',
    margin: '64px'
  },
  label: {
    fontSize: '24px',
    margin: '8px 0',
    color: 'rgb(0,64,128)'
  },
  token: {
    overflow: 'auto',
    overflowWrap: 'break-word',
    fontSize: '16px',
    width: '90vw'
  }
}

export class GameComponent extends React.Component {
  static propTypes = {
    isSignedIn: PropTypes.string,
    auth: PropTypes.object
  }

  renderAuthInfo(auth) {
    return (
      <div style={style.token}>
       <div>Vote</div>
      </div>
    )
  }

  render() {
    const { auth } = this.props

    return (
      <div style={style.page}>
        <div style={style.layout}>
          <div style={style.heading}>Game Play</div>

          {auth.isSignedIn === state.AUTH_SUCCESS
            ? this.renderGame(auth)
            : null}
        </div>
      </div>
    )
  }
}
