import React from 'react';
import './App.scss';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Grid from './Grid/Grid'
import Form from './Form/Form'
import OpalContext from './contexts/OpalContext'


export default class App extends React.Component {
  static contextType = OpalContext

  componentDidMount() {
    this.context.setProfile('grey')
    this._doSignature()
  }
  _doSignature() {

    var styles = [
         'width: 100vw '
       , 'color: black'
       , 'margin: 0'
       , 'padding: 0'
       , 'margin-right: -7.5px'
       , 'padding-right: 0px'
       , 'padding-bottom: 0px'
       , 'margin-bottom: 0px'
       , 'display: block'
       , 'text-align: center'
       , 'font-size: 24px'
       , 'font-family: Helvetica Neue, Helvetica'
       , 'font-weight: regular'
    ].join(';');

    var style2 = [
       'position: absolute'
       , 'bottom: 100px'
       , 'text-align: center'
       , 'font-size: 25px'
       , 'font-family: Helvetica Neue, Helvetica'
       , 'font-weight: 500'
       , 'text-transform: uppercase'
    ].join(';');

    console.log('%c Built by %c Buena Suerte ', styles, style2);
  }
  renderClass() {
    let profile = ''
    switch (this.context.profile) {
      case 'light':
        profile = 'opal-body light'
        break;
      case 'grey':
        profile = 'opal-body grey'
        break;
      case 'dark':
        profile = 'opal-body dark'
        break;
      default:

    }
    return profile
  }
  setClass = (e) => {
    e.preventDefault()
    const color = e.target.id
    this.context.setProfile(color)
  }
  render() {

    return (
      <main
        className={this.renderClass()}
        >
        <Header />
        <div className='form-grid'>
          <Grid
            setPreview={this.setPreview}
          />
          <Form />

        </div>
        <Footer
          setClass={this.setClass}
        />
      </main>
    );
  }
}
