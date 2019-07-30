import React from 'react'

export default class Footer extends React.Component {
  state = {
    profile: 'default'
  }
  render() {

    return (
      <footer>
        <h3>Color Mode</h3>
        <p
        onClick={this.props.setClass}
        id='light'
        > Light</p>
        <p
        onClick={this.props.setClass}
        id='grey'
        > Grey</p>
        <p
        onClick={this.props.setClass}
        id='dark'
        > Dark</p>
      </footer>
    )
  }
}
