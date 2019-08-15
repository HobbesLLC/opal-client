import React from 'react'

const initialState = {
  json: {},
  profile: '',
  previewJson: null,
  exportFiles: null,
}

const OpalContext = React.createContext({
  ...initialState,
  setPreview: () => { },
  setJson: () => { },
  setProfile: () => { },
  setExportFiles: () => { }
})

export default OpalContext

export class OpalContextProvider extends React.Component {
  state = {
    ...initialState
  }

  setPreview = previewJson => {
    this.setState({ previewJson })
  }

  setProfile = profile => {
    this.setState({ profile })
  }

  setExportFiles = exportFiles => {
    this.setState({ exportFiles })
  }

  setJson = json => {
    this.setState({ json })
  }

  render() {
    const value = {
      // values
      json: this.state.json,
      profile: this.state.profile,
      exportFiles: this.state.exportFiles,
      previewJson: this.state.previewJson,
      // methods
      setPreview: this.setPreview,
      setProfile: this.setProfile,
      setExportFiles: this.setExportFiles,
      setJson: this.setJson
    }
    return (
      <OpalContext.Provider value={value}>
        {this.props.children}
      </OpalContext.Provider>
    )
  }
}
