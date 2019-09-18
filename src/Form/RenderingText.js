import React from 'react'
import { Keyframes, Frame } from 'react-keyframes'

export default class RenderingText extends React.Component {
  render () {
    return (
      <Keyframes loop={1}>
        <Frame duration={2850}><span>Packaging Files</span></Frame>
        <Frame duration={150}><span>Finished!</span></Frame>
      </Keyframes>
    )
  }
}
