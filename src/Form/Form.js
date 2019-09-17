import React from 'react'
import AnimationApiService from '../services/animation-api-services'
import Lottie from 'react-lottie'
import ReactSVG from 'react-svg'
import { saveAs } from 'file-saver'
import MediaQuery from 'react-responsive'
import Build from '../Img/Download_Moment.json'
import BackArrow from '../Img/BackArrow.svg'
import OpalContext from '../contexts/OpalContext'

let hexToHsl = require('hex-to-hsl');
let JSZip = require('jszip')


export default class Form extends React.Component {
  static contextType = OpalContext
  state = {
    previewFile: null,
    isRendering: false,
    doneRendering: false,
    renderingText: 'packaging files',
    fillBar: null,
    pausedStatus: false
  }
  componentDidMount() {
    const {lottieColor, duration, scale, stroke} = this.context

    AnimationApiService.saveAnimation(lottieColor, duration, stroke, scale)
      .then(res => {
        let animationFiles = res.filter(file => file.type === 'animation')
        let staticFiles = res.filter(file => file.type === 'static')
        this.context.setExportFiles({
          animations: animationFiles,
          static: staticFiles
        })
      })
      .then(data => {
        let defaultAnimation = this.context.exportFiles.animations.find(icon => icon.name === 'Pencil_Build');
        let jsonString = JSON.stringify(defaultAnimation.file)

        this.context.setPreview({
          previewJson: jsonString
        })
        this.context.setDownloadFile(JSON.stringify(Build))

      })
  }

  hslToLottie(h,s,l){
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    let r_converted = (r/255).toFixed(2),
    g_converted = (g/255).toFixed(2),
    b_converted = (b/255).toFixed(2),
    lottieR = parseFloat(r_converted),
    lottieG = parseFloat(g_converted),
    lottieB = parseFloat(b_converted);

    return [lottieR,lottieG,lottieB, 1];

  }
  hslToHex(h,s,l) {
    s /= 100;
    l /= 100;

    let c = (1 - Math.abs(2 * l - 1)) * s,
        x = c * (1 - Math.abs((h / 60) % 2 - 1)),
        m = l - c/2,
        r = 0,
        g = 0,
        b = 0;

    if (0 <= h && h < 60) {
      r = c; g = x; b = 0;
    } else if (60 <= h && h < 120) {
      r = x; g = c; b = 0;
    } else if (120 <= h && h < 180) {
      r = 0; g = c; b = x;
    } else if (180 <= h && h < 240) {
      r = 0; g = x; b = c;
    } else if (240 <= h && h < 300) {
      r = x; g = 0; b = c;
    } else if (300 <= h && h < 360) {
      r = c; g = 0; b = x;
    }
    // Having obtained RGB, convert channels to hex
    r = Math.round((r + m) * 255).toString(16);
    g = Math.round((g + m) * 255).toString(16);
    b = Math.round((b + m) * 255).toString(16);

    // Prepend 0s, if necessary
    if (r.length === 1)
      r = '0' + r;
    if (g.length === 1)
      g = '0' + g;
    if (b.length === 1)
      b = '0' + b;

    return '#' + r + g + b;
  }
  calculateColor = () => {

      let lottieColor = this.hslToLottie(this.context.hue, this.context.saturation, this.context.lightness)

      this.context.setLottieColor({
        hexcolor: this.hslToHex(this.context.hue, this.context.saturation, this.context.lightness),
        lottieColor
      })

    const updateFileColors = async () => {
      this.context.updateFiles()
    }
    updateFileColors()
      .then(response => {
        this.playPreview()
      })

  }
  handleHexSubmit = e => {
    e.preventDefault()

    if (e.target.value.length === 7) {
      let newHSL = hexToHsl(e.target.value)
      let lottieColor = this.hslToLottie(newHSL[0], newHSL[1], newHSL[2])



        const updateFileColors = async () => {
          this.context.setLottieColorFromHex({
            hue: newHSL[0],
            saturation: newHSL[1],
            lightness: newHSL[2],
            hexcolor: e.target.value,
            lottieColor
          })
        }
        updateFileColors()
          .then(response => {
            this.context.updateFiles()
          })
    }
  }
  handleChange = (e) => {
    e.preventDefault()
    let hue
    let lightness
    let saturation
    let duration
    let scale
    let stroke


    e.target.name === 'hueOutputName'
    ?  hue = e.target.value
    :  hue = e.currentTarget.hue.value


    e.target.name === 'saturationOutputName'
    ? saturation = e.target.value
    : saturation = e.currentTarget.saturation.value


    e.target.name === 'lightnessOutputName'
    ? lightness = e.target.value
    : lightness = e.currentTarget.lightness.value


    e.target.name === 'scaleOutputName'
    ? scale = e.target.value
    : scale = e.currentTarget.scale.value

    e.target.name === 'strokeOutputName'
    ? stroke = e.target.value
    : stroke = e.currentTarget.stroke.value

    e.target.name === 'durationOutputName'
    ? duration = e.target.value
    : duration = e.currentTarget.duration.value

    // validation
    if (isNaN(e.target.value)) {
      switch (e.target.value) {
        case 'hue':
        case 'hueOutputName':
          hue = this.context.hue
          break;
        case 'saturation':
        case 'saturationOutputName':
          saturation = this.context.saturation
          break;
        case 'lightness':
        case 'lightnessOutputName':
          lightness = this.context.lightness
          break;
        case 'scale':
        case 'scaleOutputName':
          scale = this.context.scale
          break;
        case 'stroke':
        case 'strokeOutputName':
          stroke = this.context.stroke
          break;
        case 'duration':
        case 'durationOutputName':
          duration = this.context.duration
          break;
        default:

      }
    }

    let op = 30;
    let framerate = parseFloat(((op/duration)*1000), 10);
    let previewFrameRate = Math.round(framerate * 1e2) / 1e2;

    const updateContextValues = async () => {
      this.context.updateState({
        hue,
        lightness,
        saturation,
        duration,
        previewFrameRate,
        scale,
        stroke
      })
    }
    updateContextValues()
      .then(res => {
        this.calculateColor()
      })
  }

  backToForm = (e) => {
    e.preventDefault()
    this.setState({
      isRendering: false,
      fillBar: false,
      renderingText: 'packaging files'
      // setting the text back to it's default state for the next download action
    },
    () => {
      return
    } )
  }

  playPreview = () => {
    let defaultOptions = ''

    if (this.context.previewJson !== null) {

        defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: JSON.parse(this.context.previewJson)
        }

        let opalEvents = [
          {
            eventName: 'complete',
            callback: () => {
              defaultOptions.loop = false
              this.playPreview()
            },
          }
        ]

        return <Lottie
          eventListeners={opalEvents}
          options={defaultOptions} />

      } else {

      }
  }
  playBuild = () => {
    let buildOptions
    if (this.context.downloadFile !== null) {
      buildOptions = {
        loop: false,
        autoplay: true,
        animationData: JSON.parse(this.context.downloadFile)
      }
    }
    return (
      <Lottie options={buildOptions} />
    )
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {lottieColor, duration, scale, stroke} = this.context

    AnimationApiService.saveAnimation(lottieColor, duration, stroke, scale)
      .then(res => {
        let animationFiles = res.filter(json => json.type === 'animation')
        let staticFiles = res.filter(json => json.type === 'static')
        this.context.setExportFiles({
          animations: animationFiles,
          static: staticFiles
        },
        this.setState({
          returnedFiles: res,
          isRendering: true
        }))
      })
      setTimeout(() => {
        this.downloadFiles()
      }, 3000)

  }

  downloadFiles = () => {
    let zip = new JSZip()
    this.state.returnedFiles.forEach(opalFile => {
      let json = JSON.stringify(opalFile.file)
      if (opalFile.type === 'animation') {
        let animationsZip = zip.folder('Animations')
        animationsZip.file(`${opalFile.name}.json`, `${json}`)
      } else if (opalFile.type === 'static') {
        let staticZip = zip.folder('Static')
        staticZip.file(`${opalFile.name}.json`, `${json}`)
      }
    })
    zip.generateAsync({type:'blob'}).then(function(content) {
      saveAs(content, 'exportedjson.zip');
    });
  }
  returnText(text) {
    if (text === 'finished!') {
      return `finished!`
    }
    return text
  }
  render() {
    let saturationStyle = {
      background: `linear-gradient(to right, hsl(${this.context.hue}, 10%, 0%), hsl(${this.context.hue}, 20%, 50%), hsl(${this.context.hue}, 30%, 50%), hsl(${this.context.hue}, 40%, 50%), hsl(${this.context.hue}, 50%, 50%), hsl(${this.context.hue}, 60%, 50%), hsl(${this.context.hue}, 70%, 50%), hsl(${this.context.hue}, 80%, 50%), hsl(${this.context.hue}, 90%, 50%), hsl(${this.context.hue}, 100%, 50%))`
    };
    let lightnessStyle = {
      background: `linear-gradient(to right, hsl(${this.context.hue}, 100%, 0%), hsl(${this.context.hue}, 100%, 20%), hsl(${this.context.hue}, 100%, 30%), hsl(${this.context.hue}, 100%, 40%), hsl(${this.context.hue}, 100%, 50%), hsl(${this.context.hue}, 100%, 60%), hsl(${this.context.hue}, 100%, 70%), hsl(${this.context.hue}, 100%, 80%),hsl(${this.context.hue}, 100%, 90%), hsl(${this.context.hue}, 100%, 100%))`
    };

    return (
      <div className='form-preview'>
        {this.state.isRendering
          ? (
            <div id='build'>
              <ReactSVG
                src={BackArrow}
                className='back-arrow'
                onClick={this.backToForm}
                />
              <div id='build-json'>
                  {this.playBuild()}
              </div>
              <div className='fill-bar'>
                {/* need to dynamically change rendering text without updating state and re-rendering this component*/}
                <span>{'packaging files'}</span>
                {/* need to dynamically change the width without updating state and re-rendering this component*/}
                {this.state.fillBar
                ? ( <div className='bar active' style={{width: `100%`}}></div>)
                : ( <div className='bar' style={{width: `100%`, transition: `width 3s ease`}}></div>)}
              </div>
            </div>
            )
          : (
            <>
            <div className='preview-header'>
              {this.context.previewJson
              ? <span className='preview-name'>{JSON.parse(this.context.previewJson).nm}</span>
              : ''}
              {this.context.previewJson
              ? <form
              className='preview-hex'
              onChange={this.handleHexSubmit}>
                <input
                  type="text"
                  value={this.context.hexcolor}
                  onChange={this.handleHexSubmit}
                  >
                </input>
              </form>
              : ''}
            </div>
            <div id='preview'>
              {this.context.previewJson
                ? this.playPreview()
                : ''}
            </div>
            <form
              className="lottie-edit-form"
              onSubmit={this.handleSubmit}
              onChange={this.handleChange}
              >

                <div className='option'>
                  <span className="field-labels">
                    <label htmlFor='hue'>Hue</label>
                    <input
                      name="hueOutputName"
                      id="hueOutputId"
                      min="0"
                      max="360"
                      value={this.context.hue}></input>
                  </span>
                  <div
                    id="visibleHue"
                    />
                  <input
                    type="range"
                    name="hue"
                    id="hueID"
                    min="0"
                    max="360"
                    value={this.context.hue}
                    onChange={this.handleHueChange}
                    required/>
                </div>

                <div className='option'>
                  <span className="field-labels">
                    <label htmlFor='saturation'>Saturation</label>
                    <span><input
                      name="saturationOutputName"
                      id="saturationOutputId"
                      min="0"
                      max="100"
                      value={this.context.saturation}
                      onChange={this.handleHueChange}></input>%</span>
                  </span>
                  <div
                    id="visibleSaturation"
                    style={saturationStyle}
                    />
                  <input
                    type="range"
                    name="saturation"
                    id="saturationID"
                    min="0"
                    max="100"
                    value={this.context.saturation}
                    onChange={this.handleHueChange}
                    steps="100"
                    required/>
                </div>

                <div className='option'>
                  <span className="field-labels">
                    <label htmlFor='lightness'>Lightness</label>
                    <span><input
                      name="lightnessOutputName"
                      id="lightnessOutputId"
                      min="0"
                      max="100"
                      value={this.context.lightness}
                      onChange={this.handleHueChange}/>%</span>
                  </span>


                <div
                  id="visibleLightness"
                  style={lightnessStyle}
                  ></div>
                <input
                  type="range"
                  name="lightness"
                  id="lightnessID"
                  min="0"
                  max="100"
                  value={this.context.lightness}
                  onChange={this.handleHueChange}
                  steps="100"
                  required/>
              </div>

              <div className="scale-edit">
                <span className="field-labels">
                  <label htmlFor="scale">Scale</label>
                  <span><input
                    name="scaleOutputName"
                    id="scaleOutputId"
                    min="24"
                    max="1080"
                    value={this.context.scale}
                    onChange={this.handleScaleChange}></input>px</span>
                </span>

                <input
                  type="range"
                  name="scale"
                  id="scale"
                  required
                  min="24"
                  max="1080"
                  value={this.context.scale}
                  onChange={this.handleHueChange}/>
              </div>
              <div className="stroke-edit">
                <span className="field-labels">
                  <label htmlFor="stroke">Stroke</label>
                  <span><input
                    name="strokeOutputName"
                    id="strokeOutputId"
                    min={1}
                    max={this.context.scale / 12}
                    value={this.context.stroke}
                    onChange={this.handleHueChange}></input>pt</span>
                </span>

                <input
                  type="range"
                  name="stroke"
                  id="stroke"
                  required
                  min={1}
                  max={this.context.scale / 12}
                  onChange={this.handleHueChange}
                  value={this.context.stroke}
                  />

              </div>
              <div className="duration-edit">
                <span className="field-labels">
                  <label htmlFor="duration">Duration</label>
                  <span><input
                    name="durationOutputName"
                    id="durationOutputId"
                    min="200"
                    max="3000"
                    value={this.context.duration}
                    onChange={this.handleHueChange}></input>ms</span>
                </span>
                <input
                  type="range"
                  name="duration"
                  id="duration"
                  required
                  min="200"
                  max="3000"
                  onChange={this.handleHueChange}
                  value={this.context.duration}
                  />
              </div>
              <MediaQuery minWidth={1024}>
                <button type="submit" id="render">Download All</button>
              </MediaQuery>
              <MediaQuery maxWidth={1024}>
                <div className='mobile-form-announcement'>experience the full site on desktop</div>
              </MediaQuery>



            </form>
            </>
          )}

      </div>
    )
  }
}
