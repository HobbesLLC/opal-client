import React from 'react';
import './App.scss';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Grid from './Grid/Grid'
import Form from './Form/Form'
import AnimationApiService from './services/animation-api-services'
import OpalContext from './contexts/OpalContext'


export default class App extends React.Component {
  static contextType = OpalContext

  componentDidMount() {
    // AnimationApiService.getAnimations()
    //   .then(res => {
    //     let animationFiles = res.filter(json => json.type === 'animation')
    //     let staticFiles = res.filter(json => json.type === 'static')
    //     this.context.setExportFiles({
    //       exportFiles: {
    //         animations: animationFiles,
    //         static: staticFiles
    //       }
    //     })
    //   })

    this.context.setProfile('light')
  }
  renderClass() {
    let profile = ''
    switch (this.context.profile) {
      case 'light':
        profile = 'opal-body default'
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
  // setPreview = (e) => {
  //   e.preventDefault()
  //   const id = e.target.getAttribute('data-id')
  //
  // }
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
