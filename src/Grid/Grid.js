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
  setPreview = (e) => {
    debugger;
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
          <div className="icon" data-id="1" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="2" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="3" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="4" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="5" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="6" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="7" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="8" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="9" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="10" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="11" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="12" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="13" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="14" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="15" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="16" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="17" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="18" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="19" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="20" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="21" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="22" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="23" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="24" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="25" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="26" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="27" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="28" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="29" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="30" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="31" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="32" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="33" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="34" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="35" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="36" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="37" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="38" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="39" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="40" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="41" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="42" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="43" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="44" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="45" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="46" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="47" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="48" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="49" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="50" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="51" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="52" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="53" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="54" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="55" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="56" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="57" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="58" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="59" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="60" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="61" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="62" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="63" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="64" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="65" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="66" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="67" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="68" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="69" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="70" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="71" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="72" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="73" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="74" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="75" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="76" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="77" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="78" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="79" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="80" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="81" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="82" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="83" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="84" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="85" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="86" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="87" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="88" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="89" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="90" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="91" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="92" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="93" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="94" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="95" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="96" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="97" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="98" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="99" data-name='' onClick={this.props.setPreview}>
          </div>
          <div className="icon" data-id="100" data-name='' onClick={this.props.setPreview}>
          </div>
        </div>
      </div>
    )
  }
}
