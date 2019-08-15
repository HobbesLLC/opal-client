import React from 'react'
import AnimationApiService from '../services/animation-api-services'
import Lottie from 'react-lottie'
import animationData from '../Opal_Grid_081419.json'
import OpalContext from '../contexts/OpalContext'


export default class Grid extends React.Component {
  static contextType = OpalContext
  state = {
    loaded: true
  }

  componentDidMount() {
    // AnimationApiService.getGrid()
    //   .then(res => {
    //     if (!res.ok) {
    //       this.setState({ error: res.error })
    //     }
    //     this.setState({
    //       loaded: true,
    //       file: JSON.stringify(res)
    //     })
    //   })

  }
  setPreview = (e) => {
    let previewFile
    let jsonString
    if (this.context.exportFiles !== null) {
      previewFile = this.context.exportFiles.animations.find(icon => icon.name === e.target.dataset.name)
      jsonString = JSON.stringify(previewFile.file)
      this.context.setPreview({
        file: jsonString,
        ...previewFile
      })
      // Need to ensure that both of these setPreview have a file.file or file.json and persist that everywhere
    } else {
      previewFile = this.context.json.animations.find(icon => icon.name === e.target.dataset.name)
      jsonString = JSON.stringify(previewFile.json)
      this.context.setPreview({
        file: jsonString,
        ...previewFile
      })
    }

  }
  render() {
    let defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    }
    let gridDivs = ''
    if (this.context.json.animations) {
      gridDivs = this.context.json.animations.map(icon => {
        return (
          <div className='icon' data-id={icon.id} key={icon.id} data-name={icon.name} onClick={this.setPreview}></div>
        )
      })
    }
    return (
      <div
      className='grid-container'
      id='grid-container'
      >
        <div id="lottie-player">
          {(this.state.loaded)
            ? <Lottie options={defaultOptions} />
            : ''}
        </div>
        <div className="lottie-grid">
          {gridDivs}
        </div>
      </div>
    )
  }
}
