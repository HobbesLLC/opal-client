import React from 'react'
import About from '../Img/About.svg'

export default class Footer extends React.Component {
  state = {
    profile: 'default'
  }
  render() {

    return (
      <footer>
        <div className='hobbes-about'>
          <img src={About} alt='About Hobbes'/>
        </div>

        <div className='color-picker'>
          <div
          onClick={this.props.setClass}
          id='light'
          ></div>
        <div
          onClick={this.props.setClass}
          id='grey'
          ></div>
        <div
          onClick={this.props.setClass}
          id='dark'
          ></div>
        </div>

      </footer>
    )
  }
}
