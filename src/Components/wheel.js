import React from 'react';
import './Button.css'

class Wheel extends React.Component {
  render() {
    const { handleCenterClick, handleBackToMain } = this.props;

    return (
      <div className="wheel">
        <div className="menu-button" onClick={handleBackToMain}>Menu</div>
        <div className="center-button" onClick={handleCenterClick}></div>
        <div className="forward next">
          <div className="triangle-right"></div>
          <div className="triangle-right"></div>
          <div className="bar"></div>
        </div>
        <div className="backward previous">
          <div className="bar"></div>
          <div className="triangle-left"></div>
          <div className="triangle-left"></div>
        </div>
        <div className="playpause">
          <div className="play"></div>
          <div className="pause"></div>
          <div className="pause"></div>
        </div>
      </div>
    );
  }
}

export default Wheel;
