import React from 'react'
import AnimationApiService from '../services/animation-api-services'
import Lottie from 'react-lottie'
import { saveAs } from 'file-saver'
import OpalContext from '../contexts/OpalContext'
let JSZip = require('jszip')


export default class Form extends React.Component {
  static contextType = OpalContext
  state = {
    // hue: 0,
    // saturation: 100,
    // lightness: 50,
    // lottieColor: null,
    // hexcolor: null,
    // duration: 3000,
    // previewFrameRate: null,
    // scale: 24,
    // stroke: 1
  }
  componentDidMount() {
    AnimationApiService.saveAnimation(this.context.lottieColor, this.context.duration, this.context.stroke, this.context.scale)
      .then(res => {
        let animationFiles = res.filter(json => json.type === 'animation')
        let staticFiles = res.filter(json => json.type === 'static')
        this.context.setExportFiles({
          animations: animationFiles,
          static: staticFiles
        })
      })
  }

  calculateColor = () => {
      // let hsl = `hsl(${this.context.hue}, ${this.context.saturation}%, ${this.context.lightness}%)`;
      //
      // function hslToRgb(h,s,l) {
      //   s /= 100;
      //   l /= 100;
      //
      //   let c = (1 - Math.abs(2 * l - 1)) * s,
      //       x = c * (1 - Math.abs((h / 60) % 2 - 1)),
      //       m = l - c/2,
      //       r = 0,
      //       g = 0,
      //       b = 0;
      //
      //   if (0 <= h && h < 60) {
      //     r = c; g = x; b = 0;
      //   } else if (60 <= h && h < 120) {
      //     r = x; g = c; b = 0;
      //   } else if (120 <= h && h < 180) {
      //     r = 0; g = c; b = x;
      //   } else if (180 <= h && h < 240) {
      //     r = 0; g = x; b = c;
      //   } else if (240 <= h && h < 300) {
      //     r = x; g = 0; b = c;
      //   } else if (300 <= h && h < 360) {
      //     r = c; g = 0; b = x;
      //   }
      //   r = Math.round((r + m) * 255);
      //   g = Math.round((g + m) * 255);
      //   b = Math.round((b + m) * 255);
      //
      //   return 'rgb(' + r + ',' + g + ',' + b + ')';
      // }

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

      this.context.updateFiles()

      // if (this.context.previewJson) {
      //   // there is already exportFiles in context from componentDidMount()
      //   // consider removing this if statement
      //   // Make the updates to all the context files
      //   const updatePreview = async () => {
      //     this.context.updatePreview(this.context.previewJson.file, lottieColor, this.state.scale, this.state.stroke, this.state.duration)
      //   }
      //   updatePreview()
      //     .then(res => {
      //       console.log('play preview .then()');
      //       this.playPreview()
      //     })
      //
      // }

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
    this.context.updateState({
      hue,
      lightness,
      saturation,
      duration,
      previewFrameRate,
      scale,
      stroke
    })

    this.calculateColor()
  }

  playPreview = () => {
    let defaultOptions = ''
    let previewJsonFile
    if (this.context.previewJson) {
      previewJsonFile = JSON.stringify(this.context.previewJson.file)
      // this.calculateColor()
      // This works, but need to limit the amount of times this runs somehow
      // debugger;
      defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: this.context.previewJson.file
      }

      return <Lottie options={defaultOptions} />
    }

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
        })
        this.setState({
          returnedFiles: res
        })
      })

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

    zip.generateAsync({type:'blob'}).then(function(content) {
      saveAs(content, 'exportedjson.zip');
    });
  }

  render() {


    return (
      <div className='form-preview'>
        <div className='preview-header'>

        </div>
        <div id='preview'>
          {this.playPreview()}

        </div>

        <form
          className="lottie-edit-form"
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          >
          <fieldset name='color'>
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
          <button type="submit" id="render">Render <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></button>
          {(this.state.returnedFiles)
           ? <button onClick={this.downloadFiles} className='download'>Download Now</button>
           : ''}
        </form>
      </div>
    )
  }
}
