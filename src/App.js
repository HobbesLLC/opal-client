import React from 'react';
import './App.scss';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Grid from './Grid/Grid'
import Form from './Form/Form'


export default class App extends React.Component {
  state = {
    profile: 'light',
    previewFile: null
  }
  renderClass() {
    let profile = ''
    switch (this.state.profile) {
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
    this.setState({
      profile: color
    })
  }
  setPreview = (e) => {
    e.preventDefault()
    const id = e.target.getAttribute('data-id')
    debugger;
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
