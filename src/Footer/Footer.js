import React from 'react'
import ReactSVG from 'react-svg'
import Lottie from 'react-lottie'
import PlusToMinus from '../Img/Plus_to_Minus.json'
import MinusToPlus from '../Img/Minus_to_Plus.json'
import PlusIcon from '../Img/Plus_Icon.svg'

export default class Footer extends React.Component {
  state = {
    profile: 'default',
    expanded: false,
    footerIcon: null,
    footerImage: PlusIcon
  }
  openMenu = (e) => {
    if (this.state.footerIcon === MinusToPlus) {
      this.setState({
        footerIcon: PlusToMinus,
      })
    }
    else if (this.state.footerIcon === PlusToMinus) {
      this.setState({
        footerIcon: MinusToPlus
      })
    }
    else {
      this.setState({
        footerIcon: PlusToMinus
      })
    }
    this.setState({
      expanded: !this.state.expanded,
      footerImage: null
    })
  }

  render() {
    let expandedDiv = (
        <aside className='about'>
          <div className='about-content'>
            <h1>About</h1>
            <p>Opal is a free web tool for creating fully customize animated JSON iconsets</p>
            <p>json files are lightweight text files that (with the help of <a href='https://aescripts.com/bodymovin/' target='_blank' rel="noopener noreferrer">Bodymovin</a> and <a href='https://airbnb.io/lottie/#/' target='_blank' rel="noopener noreferrer">Lottie</a>) can be used to render SVG animations. This assures that each animated icon is vector-based and fully scalable for any website or application.</p>
            <p>Check out the details on the Lottie Website here or in the readme file included in the download.</p>
            <p>Created by <a href='https://www.hobbes.work'>Hobbes</a></p>
          </div>
        </aside>
    )
    if (this.state.expanded) {
      expandedDiv = (
        <aside className='about expanded'>
          <div className='about-content'>
            <h1>About</h1>
            <p>Opal is a free web tool for creating fully customize animated JSON iconsets</p>
            <p>json files are lightweight text files that (with the help of <a href='https://aescripts.com/bodymovin/' target='_blank' rel="noopener noreferrer">Bodymovin</a> and <a href='https://airbnb.io/lottie/#/' target='_blank' rel="noopener noreferrer">Lottie</a>) can be used to render SVG animations. This assures that each animated icon is vector-based and fully scalable for any website or application.</p>
            <p>Check out the details on the Lottie Website here or in the readme file included in the download.</p>
            <p>Created by <a href='https://www.hobbes.work'>Hobbes</a></p>
          </div>
        </aside>
      )
    }

    let defaultOptions = {
      loop: false,
      autoplay: false,
      animationData: this.state.footerIcon
    }



    return (
      <>
      {expandedDiv}
      <footer>
        <div
          onClick={this.openMenu}
          className='hobbes-about'>
          <Lottie options={defaultOptions} />
          <ReactSVG
            src={this.state.footerImage}
            alt='Plus Icon'
            />
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
