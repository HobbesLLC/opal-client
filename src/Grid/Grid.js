import React from 'react'
import AnimationApiService from '../services/animation-api-services'
import Lottie from 'react-lottie'
import animationData from '../grid.json'

export default class Grid extends React.Component {
  state = {
    loaded: false
  }

  componentDidMount() {
    AnimationApiService.getGrid()
      .then(res => {
        if (!res.ok) {
          this.setState({ error: res.error })
        }
        this.setState({
          loaded: true,
          file: JSON.stringify(res)
        })
      })

  }
  playGrid() {
    

  }
  render() {
    let defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
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
          <div className="icon" id="icon-1" data-name>
          </div>
          <div className="icon" id="icon-2" data-name>
          </div>
          <div className="icon" id="icon-3" data-name>
          </div>
          <div className="icon" id="icon-4" data-name>
          </div>
          <div className="icon" id="icon-5" data-name>
          </div>
          <div className="icon" id="icon-6" data-name>
          </div>
          <div className="icon" id="icon-7" data-name>
          </div>
          <div className="icon" id="icon-8" data-name>
          </div>
          <div className="icon" id="icon-9" data-name>
          </div>
          <div className="icon" id="icon-10" data-name>
          </div>
          <div className="icon" id="icon-11" data-name>
          </div>
          <div className="icon" id="icon-12" data-name>
          </div>
          <div className="icon" id="icon-13" data-name>
          </div>
          <div className="icon" id="icon-14" data-name>
          </div>
          <div className="icon" id="icon-15" data-name>
          </div>
          <div className="icon" id="icon-16" data-name>
          </div>
          <div className="icon" id="icon-17" data-name>
          </div>
          <div className="icon" id="icon-18" data-name>
          </div>
          <div className="icon" id="icon-19" data-name>
          </div>
          <div className="icon" id="icon-20" data-name>
          </div>
          <div className="icon" id="icon-21" data-name>
          </div>
          <div className="icon" id="icon-22" data-name>
          </div>
          <div className="icon" id="icon-23" data-name>
          </div>
          <div className="icon" id="icon-24" data-name>
          </div>
          <div className="icon" id="icon-25" data-name>
          </div>
          <div className="icon" id="icon-26" data-name>
          </div>
          <div className="icon" id="icon-27" data-name>
          </div>
          <div className="icon" id="icon-28" data-name>
          </div>
          <div className="icon" id="icon-29" data-name>
          </div>
          <div className="icon" id="icon-30" data-name>
          </div>
          <div className="icon" id="icon-31" data-name>
          </div>
          <div className="icon" id="icon-32" data-name>
          </div>
          <div className="icon" id="icon-33" data-name>
          </div>
          <div className="icon" id="icon-34" data-name>
          </div>
          <div className="icon" id="icon-35" data-name>
          </div>
          <div className="icon" id="icon-36" data-name>
          </div>
          <div className="icon" id="icon-37" data-name>
          </div>
          <div className="icon" id="icon-38" data-name>
          </div>
          <div className="icon" id="icon-39" data-name>
          </div>
          <div className="icon" id="icon-40" data-name>
          </div>
          <div className="icon" id="icon-41" data-name>
          </div>
          <div className="icon" id="icon-42" data-name>
          </div>
          <div className="icon" id="icon-43" data-name>
          </div>
          <div className="icon" id="icon-44" data-name>
          </div>
          <div className="icon" id="icon-45" data-name>
          </div>
          <div className="icon" id="icon-46" data-name>
          </div>
          <div className="icon" id="icon-47" data-name>
          </div>
          <div className="icon" id="icon-48" data-name>
          </div>
          <div className="icon" id="icon-49" data-name>
          </div>
          <div className="icon" id="icon-50" data-name>
          </div>
          <div className="icon" id="icon-51" data-name>
          </div>
          <div className="icon" id="icon-52" data-name>
          </div>
          <div className="icon" id="icon-53" data-name>
          </div>
          <div className="icon" id="icon-54" data-name>
          </div>
          <div className="icon" id="icon-55" data-name>
          </div>
          <div className="icon" id="icon-56" data-name>
          </div>
          <div className="icon" id="icon-57" data-name>
          </div>
          <div className="icon" id="icon-58" data-name>
          </div>
          <div className="icon" id="icon-59" data-name>
          </div>
          <div className="icon" id="icon-60" data-name>
          </div>
          <div className="icon" id="icon-61" data-name>
          </div>
          <div className="icon" id="icon-62" data-name>
          </div>
          <div className="icon" id="icon-63" data-name>
          </div>
          <div className="icon" id="icon-64" data-name>
          </div>
          <div className="icon" id="icon-65" data-name>
          </div>
          <div className="icon" id="icon-66" data-name>
          </div>
          <div className="icon" id="icon-67" data-name>
          </div>
          <div className="icon" id="icon-68" data-name>
          </div>
          <div className="icon" id="icon-69" data-name>
          </div>
          <div className="icon" id="icon-70" data-name>
          </div>
          <div className="icon" id="icon-71" data-name>
          </div>
          <div className="icon" id="icon-72" data-name>
          </div>
          <div className="icon" id="icon-73" data-name>
          </div>
          <div className="icon" id="icon-74" data-name>
          </div>
          <div className="icon" id="icon-75" data-name>
          </div>
          <div className="icon" id="icon-76" data-name>
          </div>
          <div className="icon" id="icon-77" data-name>
          </div>
          <div className="icon" id="icon-78" data-name>
          </div>
          <div className="icon" id="icon-79" data-name>
          </div>
          <div className="icon" id="icon-80" data-name>
          </div>
          <div className="icon" id="icon-81" data-name>
          </div>
          <div className="icon" id="icon-82" data-name>
          </div>
          <div className="icon" id="icon-83" data-name>
          </div>
          <div className="icon" id="icon-84" data-name>
          </div>
          <div className="icon" id="icon-85" data-name>
          </div>
          <div className="icon" id="icon-86" data-name>
          </div>
          <div className="icon" id="icon-87" data-name>
          </div>
          <div className="icon" id="icon-88" data-name>
          </div>
          <div className="icon" id="icon-89" data-name>
          </div>
          <div className="icon" id="icon-90" data-name>
          </div>
          <div className="icon" id="icon-91" data-name>
          </div>
          <div className="icon" id="icon-92" data-name>
          </div>
          <div className="icon" id="icon-93" data-name>
          </div>
          <div className="icon" id="icon-94" data-name>
          </div>
          <div className="icon" id="icon-95" data-name>
          </div>
          <div className="icon" id="icon-96" data-name>
          </div>
          <div className="icon" id="icon-97" data-name>
          </div>
          <div className="icon" id="icon-98" data-name>
          </div>
          <div className="icon" id="icon-99" data-name>
          </div>
          <div className="icon" id="icon-100" data-name>
          </div>
        </div>
      </div>
    )
  }
}
