import React from 'react'
import Lottie from 'react-lottie'
import animationData from '../Opal_Grid_081419.json'
import OpalContext from '../contexts/OpalContext'
import MediaQuery from 'react-responsive'


export default class Grid extends React.Component {
  static contextType = OpalContext
  state = {
    loaded: true
  }

  setPreview = (e) => {
    let previewFile
    let jsonString
    this.context.previewJson = null
    if (this.context.exportFiles !== null) {
      previewFile = this.context.exportFiles.animations.find(icon => icon.name === e.target.dataset.name)
      jsonString = JSON.stringify(previewFile.file)

      this.context.setPreview({
        previewJson: jsonString
      })
    }

  }
  render() {
    let defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData
    }
    return (
      <>
      <MediaQuery minWidth={1024}>
        <div
        className='grid-container'
        id='grid-container'
        >
          <div id="lottie-player">
            {(this.state.loaded)
              ? <Lottie options={defaultOptions} />
              : ''}
          </div>
          <div className="lottie-grid">
            {/* These files are in a particular order, so I'm manually ordering them this way*/}
            <div className='icon' data-id={69} data-name={'Plus_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={59} data-name={'Minus_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={5} data-name={'Arrow_Left_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={6} data-name={'Arrow_Right_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={7} data-name={'Arrow_TopLeft_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={8} data-name={'Arrow_TopRight_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={2} data-name={'Arrow_BottomLeft_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={3} data-name={'Arrow_BottomRight_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={4} data-name={'Arrow_Down_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={9} data-name={'Arrow_Up_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={98} data-name={'X_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={56} data-name={'Microphone_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={38} data-name={'Eye_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={20} data-name={'Camera_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={62} data-name={'Pencil_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={38} data-name={'Edit_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={37} data-name={'Download_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={90} data-name={'Upload_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={87} data-name={'Undo_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={72} data-name={'Redo_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={55} data-name={'Menu_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={57} data-name={'Microphone_Off_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={40} data-name={'Eye_Off_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={52} data-name={'Lock_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={89} data-name={'Unlock_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={29} data-name={'Chevrons_Left_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={30} data-name={'Chevrons_Right_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={65} data-name={'Play_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={61} data-name={'Pause_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={84} data-name={'Stop_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={22} data-name={'Cart_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={21} data-name={'Cart_Add_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={79} data-name={'Shuffle_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={84} data-name={'Statistics_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={83} data-name={'Statistics_Alternate_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={45} data-name={'Home_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={44} data-name={'Heart_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={82} data-name={'Star_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={53} data-name={'Mail_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={10} data-name={'Attach_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={96} data-name={'Volume_Low_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={95} data-name={'Volume_High_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={97} data-name={'Volume_Mute_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={19} data-name={'Calendar_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={87} data-name={'Target_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={91} data-name={'User_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={49} data-name={'Info_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={47} data-name={'Image_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={93} data-name={'Video_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={18} data-name={'Bookmark_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={71} data-name={'Printer_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={74} data-name={'Repeat_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={75} data-name={'Repeat_One_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={60} data-name={'Notifications_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={36} data-name={'Download_Alternate_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={51} data-name={'Link_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={23} data-name={'Cast_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={77} data-name={'Settings_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={43} data-name={'Garbage_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={1} data-name={'Alarm_Clock_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={16} data-name={'Battery_100_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={15} data-name={'Battery_75_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={14} data-name={'Battery_50_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={13} data-name={'Battery_25_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={12} data-name={'Battery_0_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={17} data-name={'Battery_Charging_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={76} data-name={'Search_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={99} data-name={'Zoom_In_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={100} data-name={'Zoom_Out_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={33} data-name={'Document_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={86} data-name={'Sync_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={54} data-name={'Maximize_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={58} data-name={'Minimize_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={27} data-name={'Chevron_Right_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={26} data-name={'Chevron_Left_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={25} data-name={'Chevron_Down_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={28} data-name={'Chevron_Up_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={67} data-name={'Playlist_Added_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={66} data-name={'Playlist_Add_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={68} data-name={'Playlist_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={31} data-name={'Cloud_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={81} data-name={'Skip_Forward_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={80} data-name={'Skip_Backward_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={35} data-name={'Dots_Vertical_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={34} data-name={'Dots_Horizontal_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={73} data-name={'Refresh_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={50} data-name={'Laptop_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={63} data-name={'Phone_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={32} data-name={'DirectionalPad_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={70} data-name={'Power_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={46} data-name={'Image_Add_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={92} data-name={'Video_Add_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={48} data-name={'ImageGallery_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={94} data-name={'VideoGallery_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={42} data-name={'Folder_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={41} data-name={'Folder_Add_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={11} data-name={'Audio_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={24} data-name={'Check_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={78} data-name={'Share_Build'} onClick={this.setPreview}></div>
            <div className='icon' data-id={64} data-name={'Pin_Build'} onClick={this.setPreview}></div>


          </div>
        </div>
      </MediaQuery>
      </>
    )
  }
}
