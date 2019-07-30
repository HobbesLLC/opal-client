import React from 'react'
import './Header.scss'
import Logo from '../Img/Opal_Slash.svg'
import Hobbes from '../Img/Hobbes.svg'


export default class Header extends React.Component{
  state = {
    expanded: false
  }

  openMenu = (e) => {
    this.setState({
      expanded: true
    })
  }
  closeMenu = (e) => {
    this.setState({
      expanded: false
    })
  }
  render() {
    let expandedDiv = (
      <aside className='about'>
        <p onClick={this.closeMenu}>Close</p>
        <h1>Opal</h1>
        <p>lorem ipsum lorem ipsum</p>
      </aside>
    )
    return (
      <>
      <header className='opal-header'>
        <h1
          className='opal-logo'
          aria-label="Opal Logo">
          <img src={Logo} alt='Opal Logo'/>
          Opal
        </h1>
        <h1
          className='opal-logo'
          aria-label="Opal Logo"
          onClick={this.openMenu}
          >
          <img src={Hobbes} alt='Opal Logo'/>
          Hobbes
        </h1>
      </header>
      {(this.state.expanded)
        ? expandedDiv
        : expandedDiv = ''
        }
      </>
    )
  }
}
