import React from 'react';

class Menu extends React.Component {
  render() {
    const { options, selectedIndex } = this.props;

    return (
      <div className="menu">
        {options.map((option, index) => (
          <div key={index} className={`menu-item ${selectedIndex === index ? 'active' : ''}`}>
            {option}
          </div>
        ))}
      </div>
    );
  }
}

export default Menu;

