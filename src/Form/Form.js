import React from 'react'
import AnimationApiService from '../services/animation-api-services'
import Lottie from 'react-lottie'
import ReactSVG from 'react-svg'
import { saveAs } from 'file-saver'
import Build from '../Img/Download_Moment.json'
import BackArrow from '../Img/BackArrow.svg'
import OpalContext from '../contexts/OpalContext'
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
  }

  calculateColor = () => {
      function rgbatolottie(h,s,l){
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

      function hslToHex(h,s,l) {
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

      let lottieColor = rgbatolottie(this.context.hue, this.context.saturation, this.context.lightness)

      this.context.setColor({
        hexcolor: hslToHex(this.context.hue, this.context.saturation, this.context.lightness),
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

  handleChange = (e) => {
    e.preventDefault()
    let hue = e.currentTarget.hue.value
    let lightness = e.currentTarget.lightness.value
    let saturation = e.currentTarget.saturation.value
    let duration = e.currentTarget.duration.value
    let scale = e.currentTarget.scale.value
    let stroke = e.currentTarget.stroke.value
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
      fillBar: null,
      renderingText: 'packaging files'
      // setting the text back to it's default state for the next download action
    })
  }

  playPreview = () => {
    let defaultOptions = ''

    // let tempFile = this.context.previewJson

    // this.context.setPreview({
    //   previewJson: null
    // })
    // setTimeout(() => {
    //   this.context.setPreview({
    //     previewJson: tempFile
    //   })
    // }, 500)
    if (this.context.previewJson !== null) {

        defaultOptions = {
          loop: false,
          // set loop to false
          // play, pause when it's near the end somehow and then play again after a setTimeout
          autoplay: true,
          animationData: JSON.parse(this.context.previewJson)
        }

        let opalEvents = [
          {
            eventName: 'complete',
            callback: () => {
              this.playPreview()
            },
          }
        ]

        return <Lottie
          eventListeners={opalEvents}
          options={defaultOptions} />

      } else {

      }
    // else if (file) {
    //   this.setState({
    //     previewFile: file
    //   })
    //   defaultOptions = {
    //     loop: false,
    //     // set loop to false
    //     // play, pause when it's near the end somehow and then play again after a setTimeout
    //     autoplay: true,
    //     animationData: this.state.previewFile
    //   }
    //   debugger;
    //   let opalEvents = [
    //     {
    //       eventName: 'complete',
    //       callback: () => {
    //         this.context.setPreview({
    //           previewJson:null
    //         })
    //         setTimeout(() => {
    //           console.log('after 500ms');
    //           this.playPreview(tempFile)
    //         }, 500)
    //
    //       },
    //     }
    //   ]
    //   return <Lottie
    //     eventListeners={opalEvents}
    //     options={defaultOptions} />
    // }


    // setting the componentState from isPaused to true / false seems to just result in infinite loops



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
          isRendering: true,
        }))
      })
      setTimeout(() => {
        this.setState({
          fillBar: true,
        })
      }, 500)
      setTimeout(() => {
        this.setState({
          renderingText: 'finished',
        },
        this.downloadFiles()
      )
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
    let blob = new Blob([zip], {type: 'application/zip'})
    zip.generateAsync({type:'blob'}).then(function(content) {
      saveAs(blob, 'exportedjson.zip');
    });

    // There seems to be an issue with Chrome (maybe FireFox) which blocks the downloading of this zip file.
    // Safari works ok
    // Might need to reach out to Chrome somehow
  }

  render() {
    let buildOptions = {
      loop: false,
      autoplay: true,
      animationData: Build
    }

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
              <Lottie options={buildOptions} />
              <div className='fill-bar'>
                <span>{this.state.renderingText}</span>
                {this.state.fillBar
                ? ( <div className='bar active'></div>)
                : ( <div className='bar'></div>)}
              </div>
            </div>
          )
          : (
            <>
            <div className='preview-header'>
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
              <fieldset name='color' className='color-edit'>
                <span className="field-labels">
                  <label htmlFor='hue'>Hue</label>
                  <input name="hueOutputName" id="hueOutputId" value={this.context.hue}></input>
                </span>

                <input type="range" name="hue" id="hueID" min="0" max="360" defaultValue={this.context.hue} required/>

                <span className="field-labels">
                  <label htmlFor='saturation'>Saturation</label>
                  <span><input name="saturationOutputName" id="saturationOutputId" value={this.context.saturation}></input>%</span>
                </span>
                <input type="range" name="saturation" id="saturationID" min="0" max="100" defaultValue={this.context.saturation} steps="100" required/>

                <span className="field-labels">
                  <label htmlFor='lightness'>Lightness</label>
                  <span><input name="lightnessOutputName" id="lightnessOutputId" value={this.context.lightness}></input>%</span>
                </span>


                <input type="range" name="lightness" id="lightnessID" min="0" max="100" defaultValue={this.context.lightness} steps="100" required/>
              </fieldset>
              <div className="scale-edit">
                <span className="field-labels">
                  <label htmlFor="scale">Scale</label>
                  <span><input name="scaleOutputName" id="scaleOutputId" value={this.context.scale} ></input>px</span>
                </span>

                <input type="range" name="scale" id="scale" required min="24" max="1080" defaultValue={this.context.scale} />
              </div>
              <div className="stroke-edit">
                <span className="field-labels">
                  <label htmlFor="stroke">Stroke</label>
                  <span><input name="strokeOutputName" id="strokeOutputId" value={this.context.stroke}></input>pt</span>
                </span>

                <input type="range" name="stroke" id="stroke" required min="1" max="90" defaultValue={this.context.stroke} />

              </div>
              <div className="duration-edit">
                <span className="field-labels">
                  <label htmlFor="duration">Duration</label>
                  <span><input name="durationOutputName" id="durationOutputId"  value={this.context.duration}></input>ms</span>
                </span>
                <input type="range" name="duration" id="duration" required min="200" max="3000" defaultValue={this.context.duration}/>
              </div>
              <button type="submit" id="render">Download All</button>
            </form>
            </>
          )}
          {/*(this.state.downloadReady)
           ? <button onClick={this.downloadFiles} className='download'>Download Now</button>
           : '' */
           /* the issue with downloading files seems to occur regardless of the action beign taken on a setTimeout or on an onClick function*/
         }

      </div>
    )
  }
}
