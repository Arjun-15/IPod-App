import React, { Component } from 'react';
import Wheel from './Components/wheel';
import Screen from './Components/Screen';
import './App.css';
import { Albums, Main, MainMenuType, MenuItems, Songs } from './data';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: MenuItems(Main),
      selectedOption: Main,
      images:null,
      songs:null,
    };
  }

  // Lifecycle method: set event listeners
  componentDidMount() {
    window.addEventListener('wheel', this.handleScroll);
  }

  // Lifecycle method: update the state when props or state changes
  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedOption !== this.state.selectedOption) {
      console.log('Menu has changed:', this.state.selectedOption);
    }
  }

  // Lifecycle method: clean up event listeners
  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll);
  }
  // Handle menu change
  handleMenuChange = (selectedOption) => {
    debugger;
    const items = MenuItems(selectedOption);
    if (items !== null) {
      this.setState({ selectedOption: selectedOption, options: items });
    }
    else if(selectedOption === MainMenuType.ALBUM){
      this.setState({images:Albums,songs:null,selectedOption:MainMenuType.ALBUM});
    }
    else if(selectedOption === MainMenuType.MUSIC){
      this.setState({songs:Songs,images:null,selectedOption:MainMenuType.MUSIC})
    }
  };

  // Handle back to main menu
  handleBackToMain = () => {
    this.setState({ selectedOption: Main, options: MenuItems(Main) });
  };

  // Handle scrolling logic for the wheel
  handleScroll = (event) => {    
    const { options, selectedOption } = this.state;
    const len = options.length;

    let newIndex = options.indexOf(selectedOption);
    if (event.deltaY > 0) {
      newIndex = (newIndex + 1) % len;
    } else {
      newIndex = (newIndex - 1 + len) % len;
    }

    this.setState({ selectedOption: options[newIndex] });
  };

  // Handle center button click to go deeper into the menu
  handleCenterClick = () => {
    debugger;
    const {  selectedOption } = this.state;
    if(selectedOption === Main)
    {
      const selectnew = Object.values(MainMenuType)[0];
      this.handleMenuChange(selectnew);
    }
    else
      this.handleMenuChange(selectedOption);
  };

  render() {
    const { options, selectedOption } = this.state;
    let selectedIndex = options.indexOf(selectedOption) || -2;
    if(selectedIndex === -1) selectedIndex=0;
    return (
      <div style={{display:'flex'}}>
        <div style={{flex:'1 0 0'}}></div>
        <div className="ipod">
          <Screen menu={selectedOption} options={options} selectedIndex={selectedIndex} data={this.state} />
          <Wheel
            selectedIndex={selectedIndex}
            menu={selectedOption}
            handleCenterClick={this.handleCenterClick}
            handleBackToMain={this.handleBackToMain}
          />
        </div>
        <div style={{flex:'1 0 0'}}></div>
      </div>
    );
  }
}

export default App;
