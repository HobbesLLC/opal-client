import React from 'react'
import './Header.scss'
import Logo from '../Img/Opal_Logo.svg'
import Hobbes from '../Img/Hobbes.svg'
import ReactSVG from 'react-svg'


export default class Header extends React.Component{
  state = {

  }

  render() {

    return (
      <>
      <header className='opal-header'>

          <ReactSVG
            src={Logo}
            alt='Opal Logo'
            aria-label="Opal Logo"
            className='opal-logo' />

          <a href="https://www.hobbes.work"
              target="_blank"
              rel="noopener noreferrer">
            <ReactSVG src={Hobbes}
              className='hobbes-logo'
              aria-label="hobbes Logo"
              alt='Opal Logo'/>
          </a>

      </header>
      </>
    )
  }
}
