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
          <p>Opal is a free web tool for creating fully customize animated JSON iconsets</p>
          <p>json files are lightweight text files that (with the help of <a href='https://aescripts.com/bodymovin/' target='_blank' rel="noopener noreferrer">Bodymovin</a> and <a href='https://airbnb.io/lottie/#/' target='_blank' rel="noopener noreferrer">Lottie</a>) can be used to render SVG animations. This assures that each animated icon is vector-based and fully scalable for any website or application.</p>
          <p>Check out the details on the Lottie Website here or in the readme file included in the download.</p>
          <p>Created by <a href='https://www.hobbes.work'>Hobbes</a></p>
        </aside>
    )
    if (this.state.expanded) {
      expandedDiv = (
        <aside className='about expanded'>
          <h1>About</h1>
          <p>Opal is a free web tool for creating fully customize animated JSON iconsets</p>
          <p>json files are lightweight text files that (with the help of <a href='https://aescripts.com/bodymovin/' target='_blank' rel="noopener noreferrer">Bodymovin</a> and <a href='https://airbnb.io/lottie/#/' target='_blank' rel="noopener noreferrer">Lottie</a>) can be used to render SVG animations. This assures that each animated icon is vector-based and fully scalable for any website or application.</p>
          <p>Check out the details on the Lottie Website here or in the readme file included in the download.</p>
          <p>Created by <a href='https://www.hobbes.work'>Hobbes</a></p>
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
