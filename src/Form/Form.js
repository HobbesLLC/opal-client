import React from 'react'
import AnimationApiService from '../services/animation-api-services'
import Lottie from 'react-lottie'

export default class Form extends React.Component {
  state = {
    color: null,
    speed: null,
    stroke: null
  }

  calculateColor = (e) => {
    e.preventDefault()
  }

  render() {
    return (
      <div className='form-preview'>
        <div id='preview'></div>
        <form className="lottie-edit-form">
          <fieldset name='color'>
            <span className="field-labels">
              <label htmlFor='hue'>Hue</label>
              <input name="hueOutputName" id="hueOutputId" ></input>
            </span>

            <input type="range" name="hue" id="hueID" min="0" max="360" defaultValue="0" required  />
            <span className="field-labels">
              <label htmlFor='saturation'>Saturation</label>
              <span><input name="saturationOutputName" id="saturationOutputId" oninput="saturationID.value = saturationOutputId.value"></input>%</span>
            </span>
            <input type="range" name="saturation" id="saturationID" min="0" max="100" defaultValue="100" steps="100" required oninput="saturationOutputId.value = saturation.value" />

            <span className="field-labels">
              <label htmlFor='lightness'>Lightness</label>
              <span><input name="lightnessOutputName" id="lightnessOutputId" oninput="lightnessID.value = lightnessOutputId.value"></input>%</span>
            </span>


            <input type="range" name="lightness" id="lightnessID" min="0" max="100" defaultValue="50" steps="100" required oninput="lightnessOutputId.value = lightness.value" />
          </fieldset>
          <div className="scale-edit">
            <span class="field-labels">
              <label for="scale">Scale</label>
              <span><input name="scaleOutputName" id="scaleOutputId" oninput="scale.value = scaleOutputId.value"></input>px</span>
            </span>

            <input type="range" name="scale" id="scale" required min="24" max="1080" value="24" oninput="scaleOutputId.value = scale.value"/>
          </div>
          <div className="stroke-edit">
            <span class="field-labels">
              <label for="stroke">Stroke</label>
              <span><input name="strokeOutputName" id="strokeOutputId" oninput="stroke.value = strokeOutputId.value" onchange="stroke.value = strokeOutputId.value"></input>pt</span>
            </span>

            <input type="range" name="stroke" id="stroke" required min="1" max="90" value="1" oninput="strokeOutputId.value = stroke.value" onchange="strokeOutputId.value = stroke.value"/>

          </div>
          <div class="duration-edit">
            <span class="field-labels">
              <label for="duration">Duration</label>
              <span><input name="durationOutputName" id="durationOutputId" oninput="duration.value = durationOutputId.value"></input>ms</span>
            </span>
            <input type="range" name="duration" id="duration" required min="200" max="3000" value="3000"  oninput="durationOutputId.value = duration.value"/>
          </div>
          <button type="submit" id="render">Render <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/></svg></button>
        </form>
      </div>
    )
  }
}
