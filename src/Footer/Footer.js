import React from 'react'
import About from '../Img/About.svg'
import ReactSVG from 'react-svg'



export default class Footer extends React.Component {
  state = {
    profile: 'default',
    expanded: false
  }
  openMenu = (e) => {
    this.setState({
      expanded: !this.state.expanded
    })
  }


  render() {
    let expandedDiv = (
      <aside className='about'>
        <h1>About</h1>
        <p>Opal is lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
      </aside>
    )
    if (this.state.expanded) {
      expandedDiv = (
        <aside className='about expanded'>
          <h1>About</h1>
          <p>Opal is lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
        </aside>
      )
    }

// <img src={About} alt='About Hobbes'/>

    return (
      <>
      {expandedDiv}
      <footer>
        <div
          onClick={this.openMenu}
          className='hobbes-about'>
          <ReactSVG

            src={About} />
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
      </>
    )
  }
}
