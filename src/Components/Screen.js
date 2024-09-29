import React from 'react';
import Menu from './Menues';
import { MainMenuType, MenuItems } from '../data';

class Screen extends React.Component {
  render() {
    const { menu, options, selectedIndex,data } = this.props;
    const {songs,images} = data;
    return (
      <div className="screen">
        <div>{menu}</div>
        {
        menu === MainMenuType.ALBUM && images != null ?
        images.map((option, index) => ( <img src={option} alt={index} key={index}/>))
        : menu === MainMenuType.MUSIC && songs != null ?
        songs.map((option, index) => (
            <>
                <audio controls="true" preload="none" controlslist="nodownload" key={index}>
                    <source src={option} type="audio/mpeg"></source>
                </audio>
            </>
        ))
        :
          <Menu
            options={ options}
            selectedIndex={selectedIndex}
          />
        }
      </div>
    );
  }
}

export default Screen;
