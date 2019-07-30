import React from 'react';
import './App.scss';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Grid from './Grid/Grid'
import Form from './Form/Form'


export default class App extends React.Component {
  state = {
    profile: 'light'
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
  render() {

    return (
      <main
        className={this.renderClass()}

        >
        <Header />
        <div className='form-grid'>
          <Grid />
          <Form />

        </div>
        <Footer
          setClass={this.setClass}
        />
      </main>
    );
  }
}
