import React from 'react'

const initialState = {
  profile: '',
  previewJson: null,
  exportFiles: null,
  lottieColor: [0,0,0,1],
  previewFrameRate: null,
  hue: 0,
  saturation: 100,
  lightness: 50,
  hexcolor: null,
  duration: 1500,
  scale: 24,
  stroke: 1
}

const OpalContext = React.createContext({
  ...initialState,
  setPreview: () => { },
  setProfile: () => { },
  setExportFiles: () => { },
  setColor: () => {},
  updateState: () => {},
  updateFiles: () => {},
  updatePreview: () => {}
})

export default OpalContext

export class OpalContextProvider extends React.Component {
  state = {
    ...initialState
  }

  setPreview = previewJson => {
    this.setState({ previewJson: previewJson.previewJson })
  }

  updateFiles = () => {
    let updatedAnimations = this.state.exportFiles.animations.map(object => {
      let file = object.file
      file.op = 30;
      let lottieColor = this.state.lottieColor
      let scale = this.state.scale
      let stroke = this.state.stroke
      let duration = this.state.duration
      let strokeAdjusted = stroke*20
      let height = parseInt(scale)
      // let outputheight = ((height/24)*100).toFixed(2)
      // let jsonsize = [outputheight, outputheight, 100]
      let framerate = parseFloat(((file.op/duration)*1000), 10);
      let lottieFramerate = Math.round(framerate * 1e2) / 1e2;
      file.fr = lottieFramerate;

      // if (file.layers[0].ks['s'].k) {
      //   // need to dig deeper. I get bugs when attempting to preview files like this. Maybe this only occurs on the backend server with Dan's example files
      //   file.layers[0].ks['s'].k = jsonsize;
      // }

      // file.h = height;
      // file.w = height;

      // Current JSON paths:
      switch (file.nm) {
        case 'Alarm_Clock_Build':
        case 'Alarm_Clock_Static':
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[3].c.k = lottieColor;
        file.layers[4].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[3].w.k = strokeAdjusted;
        file.layers[4].shapes[2].w.k = strokeAdjusted;
        break;
        case 'Arrow_BottomLeft_Build':
        case 'Arrow_BottomLeft_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Arrow_BottomRight_Build':
        case 'Arrow_BottomRight_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Arrow_Down_Build':
        case 'Arrow_Down_Static':
        file.layers[1].shapes[0].it[2].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[2].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Arrow_Left_Build':
        case 'Arrow_Left_Static':
        file.layers[1].shapes[0].it[2].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[2].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Arrow_Right_Build':
        case 'Arrow_Right_Static':
        file.layers[1].shapes[0].it[2].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[2].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Arrow_TopLeft_Build':
        case 'Arrow_TopLeft_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Arrow_TopRight_Build':
        case 'Arrow_TopRight_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Arrow_Up_Build':
        case 'Arrow_Up_Static':
        file.layers[1].shapes[0].it[2].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[2].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Attach_Build':
        case 'Attach_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Audio_Build':
        case 'Audio_Static':
        file.layers[1].shapes[5].c.k = lottieColor;
        file.layers[1].shapes[5].w.k = strokeAdjusted;
        break;
        case 'Battery_0_Build':
        case 'Battery_0_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Battery_25_Build':
        case 'Battery_25_Static':
        file.layers[1].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[2].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Battery_50_Build':
        case 'Battery_50_Static':
        file.layers[1].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[2].c.k = lottieColor;
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[2].w.k = strokeAdjusted;
        file.layers[2].shapes[2].w.k = strokeAdjusted;
        file.layers[3].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Battery_75_Build':
        case 'Battery_75_Static':
        file.layers[1].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[2].c.k = lottieColor;
        file.layers[3].shapes[2].c.k = lottieColor;
        file.layers[4].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[2].w.k = strokeAdjusted;
        file.layers[2].shapes[2].w.k = strokeAdjusted;
        file.layers[3].shapes[2].w.k = strokeAdjusted;
        file.layers[4].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Battery_100_Build':
        case 'Battery_100_Static':
        file.layers[1].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[2].c.k = lottieColor;
        file.layers[3].shapes[2].c.k = lottieColor;
        file.layers[4].shapes[2].c.k = lottieColor;
        file.layers[5].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[2].w.k = strokeAdjusted;
        file.layers[2].shapes[2].w.k = strokeAdjusted;
        file.layers[3].shapes[2].w.k = strokeAdjusted;
        file.layers[4].shapes[2].w.k = strokeAdjusted;
        file.layers[5].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Battery_Charging_Build':
        case 'Battery_Charging_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Bookmark_Build':
        case 'Bookmark_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Calendar_Build':
        case 'Calendar_Static':
        file.layers[2].shapes[2].c.k = lottieColor;
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[4].shapes[1].c.k = lottieColor;
        file.layers[5].shapes[1].c.k = lottieColor;
        file.layers[6].shapes[1].c.k = lottieColor;
        file.layers[2].shapes[2].w.k = strokeAdjusted;
        file.layers[3].shapes[1].w.k = strokeAdjusted;
        file.layers[4].shapes[1].w.k = strokeAdjusted;
        file.layers[5].shapes[1].w.k = strokeAdjusted;
        file.layers[6].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Camera_Build':
        case 'Camera_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[1].it[1].c.k = lottieColor;
        file.layers[1].shapes[2].it[1].c.k = lottieColor;
        file.layers[1].shapes[2].it[2].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[1].shapes[1].it[1].w.k = strokeAdjusted;
        file.layers[1].shapes[2].it[2].w.k = strokeAdjusted;
        break;
        case 'Cart_Add_Build':
        case 'Cart_Add_Static':
        file.layers[1].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[1].it[1].c.k = lottieColor;
        file.layers[2].shapes[2].it[1].c.k = lottieColor;
        file.layers[2].shapes[3].it[1].c.k = lottieColor;
        file.layers[2].shapes[6].c.k = lottieColor;
        file.layers[3].shapes[2].c.k = lottieColor;
        file.layers[1].shapes[2].w.k = strokeAdjusted;
        file.layers[2].shapes[6].w.k = strokeAdjusted;
        file.layers[3].shapes[2].w.k = strokeAdjusted;
        break;
        case 'Cart_Build':
        case 'Cart_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[1].it[1].c.k = lottieColor;
        file.layers[1].shapes[2].it[1].c.k = lottieColor;
        file.layers[1].shapes[3].it[1].c.k = lottieColor;
        file.layers[1].shapes[7].c.k = lottieColor;
        file.layers[1].shapes[7].w.k = strokeAdjusted;
        break;
        case 'Cast_Build':
        case 'Cast_Static':
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[4].shapes[0].it[1].c.k = lottieColor;
        file.layers[5].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        file.layers[3].shapes[1].w.k = strokeAdjusted;
        file.layers[4].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[5].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Check_Build':
        case 'Check_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Chevron_Down_Build':
        case 'Chevron_Down_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Chevron_Left_Build':
        case 'Chevron_Left_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted
        break;
        case 'Chevrons_Left_Build':
        case 'Chevrons_Left_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Chevron_Right_Build':
        case 'Chevron_Right_Static':
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Chevrons_Right_Build':
        case 'Chevrons_Right_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Chevron_Up_Build':
        case 'Chevron_Up_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Cloud_Build':
        case 'Cloud_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'DirectionalPad_Build':
        case 'DirectionalPad_Static':
        file.layers[1].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[4].shapes[0].it[1].c.k = lottieColor;
        file.layers[5].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[2].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[4].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[5].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Document_Build':
        case 'Document_Static':
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Dots_Horizontal_Build':
        case 'Dots_Horizontal_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[2].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[2].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[2].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Dots_Vertical_Build':
        case 'Dots_Vertical_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[2].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[2].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[2].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Download_Alternate_Build':
        case 'Download_Alternate_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Download_Build':
        case 'Download_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Edit_Build':
        case 'Edit_Static':
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[4].shapes[0].it[1].c.k = lottieColor;
        file.layers[5].shapes[0].it[1].c.k = lottieColor;
        file.layers[6].shapes[8].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[4].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[5].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[6].shapes[8].w.k = strokeAdjusted;
        break;
        case 'Eye_Build':
        case 'Eye_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Eye_Off_Build':
        case 'Eye_Off_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        file.layers[3].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Folder_Add_Build':
        case 'Folder_Add_Static':
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[4].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        file.layers[3].shapes[1].w.k = strokeAdjusted;
        file.layers[4].shapes[2].w.k = strokeAdjusted;
        break;
        case 'Folder_Build':
        case 'Folder_Static':
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        file.layers[3].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Garbage_Build':
        case 'Garbage_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[1].it[1].c.k = lottieColor;
        file.layers[1].shapes[2].it[1].c.k = lottieColor;
        file.layers[1].shapes[3].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[1].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[1].shapes[1].it[1].w.k = strokeAdjusted;
        file.layers[1].shapes[2].it[1].w.k = strokeAdjusted;
        file.layers[1].shapes[3].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[1].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Heart_Build':
        case 'Heart_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Home_Build':
        case 'Home_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[4].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[4].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Image_Add_Build':
        case 'Image_Add_Static':
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[1].it[1].c.k = lottieColor;
        file.layers[3].shapes[2].c.k = lottieColor;
        file.layers[4].shapes[2].c.k = lottieColor;
        file.layers[5].shapes[0].it[1].c.k = lottieColor;
        file.layers[5].shapes[0].it[2].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[2].w.k = strokeAdjusted;
        file.layers[4].shapes[2].w.k = strokeAdjusted;
        file.layers[5].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Image_Build':
        case 'Image_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[1].it[1].c.k = lottieColor;
        file.layers[1].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[2].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'ImageGallery_Build':
        case 'ImageGallery_Static':
        file.layers[1].shapes[3].c.k = lottieColor;
        file.layers[1].shapes[4].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[3].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Info_Build':
        case 'Info_Static':
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[3].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        file.layers[3].shapes[2].w.k = strokeAdjusted;
        break;
        case 'Laptop_Build':
        case 'Laptop_Static':
        file.layers[2].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[2].w.k = strokeAdjusted;
        break;
        case 'Link_Build':
        case 'Link_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Lock_Build':
        case 'Lock_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Mail_Build':
        case 'Mail_Static':
        file.layers[2].shapes[0].it[2].c.k = lottieColor;
        file.layers[3].shapes[0].it[2].c.k = lottieColor;
        file.layers[4].shapes[0].it[1].c.k = lottieColor;
        file.layers[5].shapes[0].it[1].c.k = lottieColor;
        file.layers[6].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[2].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[2].w.k = strokeAdjusted;
        file.layers[4].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[5].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[6].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Maximize_Build':
        case 'Maximize_Static':
        file.layers[1].shapes[4].c.k = lottieColor;
        file.layers[1].shapes[4].w.k = strokeAdjusted;
        break;
        case 'Menu_Build':
        case 'Menu_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Microphone_Build':
        case 'Microphone_Static':
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Microphone_Off_Build':
        case 'Microphone_Off_Static':
        file.layers[1].shapes[0].it[2].c.k = lottieColor;
        file.layers[2].shapes[2].c.k = lottieColor;
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[5].shapes[0].it[1].c.k = lottieColor;
        file.layers[5].shapes[2].c.k = lottieColor;
        file.layers[1].shapes[0].it[2].w.k = strokeAdjusted;
        file.layers[2].shapes[2].w.k = strokeAdjusted;
        file.layers[3].shapes[1].w.k = strokeAdjusted;
        file.layers[5].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[5].shapes[2].w.k = strokeAdjusted;
        break;
        case 'Minimize_Build':
        case 'Minimize_Static':
        file.layers[1].shapes[4].c.k = lottieColor;
        file.layers[1].shapes[4].w.k = strokeAdjusted;
        break;
        case 'Minus_Build':
        case 'Minus_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Notifications_Build':
        case 'Notifications_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Pause_Build':
        case 'Pause_Static':
        file.layers[1].shapes[2].c.k = lottieColor;
        file.layers[1].shapes[2].w.k = strokeAdjusted;
        break;
        case 'Pencil_Build':
        case 'Pencil_Static':
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[4].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[4].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Phone_Build':
        case 'Phone_Static':
        file.layers[2].shapes[0].it[1].c.k  = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[1].c.k  = lottieColor;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Pin_Build':
        case 'Pin_Static':
        file.layers[2].shapes[1].c.k  = lottieColor;
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[3].shapes[2].c.k = lottieColor;
        file.layers[4].shapes[1].c.k  = lottieColor;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        file.layers[3].shapes[2].w.k = strokeAdjusted;
        file.layers[4].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Play_Build':
        case 'Play_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Playlist_Add_Build':
        case 'Playlist_Add_Static':
        file.layers[1].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[4].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[2].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[4].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Playlist_Added_Build':
        case 'Playlist_Added_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[4].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[4].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Playlist_Build':
        case 'Playlist_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[4].shapes[0].it[1].c.k = lottieColor;
        file.layers[4].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[4].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Plus_Build':
        case 'Plus_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Power_Build':
        case 'Power_Static':
        file.layers[1].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[2].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Printer_Build':
        case 'Printer_Static':
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[4].shapes[0].it[1].c.k = lottieColor;
        file.layers[5].shapes[0].it[1].c.k = lottieColor;
        file.layers[6].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        file.layers[3].shapes[1].w.k = strokeAdjusted;
        file.layers[4].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[5].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[6].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Redo_Build':
        case 'Redo_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Refresh_Build':
        case 'Refresh_Static':
        file.layers[1].shapes[0].it[1].c.k  = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Repeat_Build':
        case 'Repeat_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[4].shapes[0].it[1].c.k = lottieColor;
        file.layers[5].shapes[0].it[1].c.k = lottieColor;
        file.layers[7].shapes[0].it[1].c.k = lottieColor;
        file.layers[8].shapes[0].it[1].c.k = lottieColor;
        file.layers[9].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[4].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[5].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[7].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[8].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[9].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Repeat_One_Build':
        case 'Repeat_One_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[4].shapes[0].it[1].c.k = lottieColor;
        file.layers[4].shapes[0].it[1].c.k = lottieColor;
        file.layers[5].shapes[0].it[1].c.k = lottieColor;
        file.layers[6].shapes[0].it[1].c.k = lottieColor;
        file.layers[8].shapes[0].it[1].c.k = lottieColor;
        file.layers[9].shapes[0].it[1].c.k = lottieColor;
        file.layers[10].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[4].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[4].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[6].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[5].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[8].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[9].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[10].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Search_Build':
        case 'Search_Static':
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Settings_Build':
        case 'Settings_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[4].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[4].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Share_Build':
        case 'Share_Static':
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[4].shapes[1].c.k = lottieColor;
        file.layers[5].shapes[1].c.k = lottieColor;
        file.layers[6].shapes[1].c.k = lottieColor;
        file.layers[7].shapes[1].c.k = lottieColor;
        file.layers[3].shapes[1].w.k = strokeAdjusted;
        file.layers[4].shapes[1].w.k = strokeAdjusted;
        file.layers[5].shapes[1].w.k = strokeAdjusted;
        file.layers[6].shapes[1].w.k = strokeAdjusted;
        file.layers[7].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Shuffle_Build':
        case 'Shuffle_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[4].shapes[0].it[1].c.k = lottieColor;
        file.layers[5].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[4].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[5].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Skip_Backward_Build':
        case 'Skip_Backward_Static':
        file.layers[1].shapes[2].c.k = lottieColor;
        file.layers[1].shapes[2].w.k = strokeAdjusted;
        break;
        case 'Skip_Forward_Build':
        case 'Skip_Forward_Static':
        file.layers[1].shapes[2].c.k = lottieColor;
        file.layers[1].shapes[2].w.k = strokeAdjusted;
        break;
        case 'Star_Build':
        case 'Star_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Statistics_Build':
        case 'Statistics_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Statistics_Alternate_Build':
        case 'Statistics_Alternate_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Stop_Build':
        case 'Stop_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Sync_Build':
        case 'Sync_Static':
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[1].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[1].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[1].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[1].it[1].w.k = strokeAdjusted;
        break;
        case 'Target_Build':
        case 'Target_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        file.layers[3].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Undo_Build':
        case 'Undo_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Unlock_Build':
        case 'Unlock_Static':
        file.layers[1].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[2].c.k = lottieColor;
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[2].w.k = strokeAdjusted;
        file.layers[2].shapes[2].w.k = strokeAdjusted;
        file.layers[3].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Upload_Build':
        case 'Upload_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[2].c.k = lottieColor;
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[2].w.k = strokeAdjusted;
        file.layers[3].shapes[1].w.k = strokeAdjusted;
        break;
        case 'User_Build':
        case 'User_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Video_Add_Build':
        case 'Video_Add_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[2].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[4].shapes[2].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[4].shapes[2].w.k = strokeAdjusted;
        break;
        case 'Video_Build':
        case 'Video_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[2].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'VideoGallery_Build':
        case 'VideoGallery_Static':
        file.layers[1].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[2].c.k = lottieColor;
        file.layers[2].shapes[0].it[1].c.k = lottieColor;
        file.layers[3].shapes[0].it[1].c.k = lottieColor;
        file.layers[1].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[2].shapes[0].it[1].w.k = strokeAdjusted;
        file.layers[3].shapes[0].it[1].w.k = strokeAdjusted;
        break;
        case 'Volume_High_Build':
        case 'Volume_High_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        file.layers[3].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Volume_Low_Build':
        case 'Volume_Low_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Volume_Mute_Build':
        case 'Volume_Mute_Static':
        file.layers[1].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[2].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'X_Build':
        case 'X_Static':
        file.layers[1].shapes[1].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[1].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Zoom_In_Build':
        case 'Zoom_In_Static':
        file.layers[1].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[3].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[2].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        file.layers[3].shapes[1].w.k = strokeAdjusted;
        break;
        case 'Zoom_Out_Build':
        case 'Zoom_Out_Static':
        file.layers[1].shapes[2].c.k = lottieColor;
        file.layers[2].shapes[1].c.k = lottieColor;
        file.layers[1].shapes[2].w.k = strokeAdjusted;
        file.layers[2].shapes[1].w.k = strokeAdjusted;
        break;
        default:
      }
      return file
    })
    this.setState({
      exportFiles: {
        animations: updatedAnimations,
        ...this.state.exportFiles
      }
    },
    this.updatePreview())
  }

  updateState = (updateValues) => {
    this.setState({
      hue: updateValues.hue,
      duration: updateValues.duration,
      lightness: updateValues.lightness,
      previewFrameRate: updateValues.previewFrameRate,
      saturation: updateValues.saturation,
      scale: updateValues.scale,
      stroke: updateValues.stroke
    },
    this.updateFiles())
  }

  updatePreview = (preview) => {
    if (this.state.previewJson) {
      let tempName = JSON.parse(this.state.previewJson).nm
      let updatedPreview = this.state.exportFiles.animations.find(file => file.name === tempName)
      this.setState({
        previewJson: JSON.stringify(updatedPreview.file)
      }, function() {
        return
      })
    } else {
      return
    }
  }
  setColor = (colorValues) => {
    this.setState({
      hexcolor: colorValues.hexcolor,
      lottieColor: colorValues.lottieColor
    }, this.updateFiles()
    )

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
      profile: this.state.profile,
      exportFiles: this.state.exportFiles,
      previewJson: this.state.previewJson,
      lottieColor: this.state.lottieColor,
      previewFrameRate: this.state.previewFrameRate,
      hue: this.state.hue,
      saturation: this.state.saturation,
      lightness: this.state.lightness,
      hexcolor: this.state.hexcolor,
      duration: this.state.duration,
      scale: this.state.scale,
      stroke: this.state.stroke,
      // methods
      setPreview: this.setPreview,
      setColor: this.setColor,
      updateState: this.updateState,
      setProfile: this.setProfile,
      updateFiles: this.updateFiles,
      setExportFiles: this.setExportFiles,
      updatePreview: this.updatePreview,
      setJson: this.setJson
    }
    return (
      <OpalContext.Provider value={value}>
        {this.props.children}
      </OpalContext.Provider>
    )
  }
}
