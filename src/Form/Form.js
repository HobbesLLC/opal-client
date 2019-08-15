import React from 'react'
import AnimationApiService from '../services/animation-api-services'
import Lottie from 'react-lottie'
import { saveAs } from 'file-saver'
import OpalContext from '../contexts/OpalContext'
let JSZip = require('jszip')


export default class Form extends React.Component {
  static contextType = OpalContext
  state = {
    hue: 0,
    saturation: 100,
    lightness: 50,
    lottieColor: null,
    duration: 3000,
    scale: 24,
    stroke: 1
  }

  calculateColor = () => {

  let hsl = `hsl(${this.state.hue}, ${this.state.saturation}%, ${this.state.lightness}%)`;

  function hslToRgb(h,s,l) {
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

    return 'rgb(' + r + ',' + g + ',' + b + ')';
  }

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
  let lottieColor = rgbatolottie(this.state.hue, this.state.saturation, this.state.lightness)

  this.setState({
    lottieColor
  })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const {lottieColor, duration, scale, stroke} = this.state
    // let scaleStrokeDuration = [scale, stroke, duration]

    AnimationApiService.saveAnimation(lottieColor, duration, stroke, scale)
      .then(res => {
        let animationFiles = res.filter(json => json.type === 'animation')
        let staticFiles = res.filter(json => json.type === 'static')
        this.context.setExportFiles({
          animations: animationFiles,
          static: staticFiles
        })
        this.setState({
          returnedFiles: res
        })
      })

  }
  playLottie = e => {

    let defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: this.state.returnedFiles[Math.floor(Math.random() * 201)]
    }
  }
  handleChange = (e) => {
    e.preventDefault()
    let hue = e.currentTarget.hue.value
    let lightness = e.currentTarget.lightness.value
    let saturation = e.currentTarget.saturation.value
    let duration = e.currentTarget.duration.value
    let scale = e.currentTarget.scale.value
    let stroke = e.currentTarget.stroke.value

    this.setState({
      hue,
      lightness,
      saturation,
      duration,
      scale,
      stroke
    })
    this.calculateColor()
  }

  downloadFiles = () => {

    let zip = new JSZip()



    let exportedJson = this.state.returnedFiles.map(opalFile => {
      let json = JSON.stringify(opalFile.file)
      if (opalFile.type === 'animation') {
        let animationsZip = zip.folder('Animations')
        animationsZip.file(`${opalFile.name}.json`, `${json}`)
      } else if (opalFile.type === 'static') {
        let staticZip = zip.folder('Static')
        staticZip.file(`${opalFile.name}.json`, `${json}`)
      }

    })

    // all the array indexes are undefined
    zip.generateAsync({type:'blob'}).then(function(content) {
      saveAs(content, 'exportedjson.zip');
    });




  }
  render() {
    let defaultOptions = ''

    if (this.context.previewJson) {
      defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: this.context.previewJson.file
      }
    }

    // if (this.context.exportFiles !== null && this.context.previewJson !== null) {
    //   debugger;
    //   defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: this.context.previewJson.json
    //   }
    // }
    // else if (this.context.previewJson !== null) {
    //   defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: this.context.previewJson.json
    //   }
    // }

    // NEEDS WORK
    // Do this in Grid.js
    //


    return (
      <div className='form-preview'>
        <div id='preview'>
          {(this.context.previewJson || this.context.exportFiles)
           ? <Lottie options={defaultOptions} />
           : ''}
        </div>

        <form
          className="lottie-edit-form"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          >
          <fieldset name='color'>
            <span className="field-labels">
              <label htmlFor='hue'>Hue</label>
              <input name="hueOutputName" id="hueOutputId" value={this.state.hue}></input>
            </span>

            <input type="range" name="hue" id="hueID" min="0" max="360" defaultValue={this.state.hue} required/>
            <span className="field-labels">
              <label htmlFor='saturation'>Saturation</label>
              <span><input name="saturationOutputName" id="saturationOutputId" value={this.state.saturation}></input>%</span>
            </span>
            <input type="range" name="saturation" id="saturationID" min="0" max="100" defaultValue={this.state.saturation} steps="100" required/>

            <span className="field-labels">
              <label htmlFor='lightness'>Lightness</label>
              <span><input name="lightnessOutputName" id="lightnessOutputId" value={this.state.lightness}></input>%</span>
            </span>


            <input type="range" name="lightness" id="lightnessID" min="0" max="100" defaultValue={this.state.lightness} steps="100" required/>
          </fieldset>
          <div className="scale-edit">
            <span className="field-labels">
              <label htmlFor="scale">Scale</label>
              <span><input name="scaleOutputName" id="scaleOutputId" value={this.state.scale} ></input>px</span>
            </span>

            <input type="range" name="scale" id="scale" required min="24" max="1080" defaultValue={this.state.scale} />
          </div>
          <div className="stroke-edit">
            <span className="field-labels">
              <label htmlFor="stroke">Stroke</label>
              <span><input name="strokeOutputName" id="strokeOutputId" value={this.state.stroke}></input>pt</span>
            </span>

            <input type="range" name="stroke" id="stroke" required min="1" max="90" defaultValue={this.state.stroke} />

          </div>
          <div className="duration-edit">
            <span className="field-labels">
              <label htmlFor="duration">Duration</label>
              <span><input name="durationOutputName" id="durationOutputId"  value={this.state.duration}></input>ms</span>
            </span>
            <input type="range" name="duration" id="duration" required min="200" max="3000" defaultValue={this.state.duration}/>
          </div>
          <button type="submit" id="render">Render <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></button>
          {(this.state.returnedFiles)
           ? <button onClick={this.downloadFiles} className='download'>Download Now</button>
           : ''}
        </form>
      </div>
    )
  }
}
