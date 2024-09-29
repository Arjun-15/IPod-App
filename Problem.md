# iPod React App (Class Components with Lifecycle Methods)
This project is a simple simulation of an iPod interface built using React.js class components. It demonstrates key functionality like navigating through menus, handling submenus, and interacting using a simulated circular scroll wheel. It also utilizes React Lifecycle Methods such as componentDidMount, componentDidUpdate, and componentWillUnmount to handle events and state management.

## Features
Circular Scroll Navigation: Use the mouse wheel to scroll through options in the menu.
Menu Navigation: Navigate through a menu of options such as "Music", "Games", and "Settings".
Submenus: For example, under "Music", you'll find options like "All Songs", "Artists", and "Albums".
Back Navigation: Clicking the "Menu" button takes you back to the main menu.
React Class Components: This project uses React class components and lifecycle methods for state and event management.
# Demo
The iPod application consists of:
A screen that displays the menu and options.
A clickable wheel for navigation.
Menu and submenus that can be accessed by scrolling and selecting.
Project Structure
graphql
Copy code
src/
│
├── components/
│   ├── Menu.js        # Handles rendering of menu options
│   ├── Wheel.js       # Simulates iPod scroll wheel for navigation
│   ├── Screen.js      # Displays the menu and submenu options
│   └── App.css        # Basic styles for the iPod look and feel
│
├── App.js             # Main component managing state and handling lifecycle methods
└── index.js           # Entry point for the React app
Installation and Setup
Clone the Repository:

bash
Copy code
git clone https://github.com/arjun-15/ipod-app.git
cd ipod-react-lifecycle-app
Install Dependencies: Run the following command to install all necessary dependencies:

bash
Copy code
npm install
Run the App: Start the development server using:

bash
Copy code
npm start
This will start the app on http://localhost:3000.

How It Works
State and Lifecycle
The app manages the current menu (main, music, etc.) and selectedIndex (highlighted item) using the component’s state.
When the component mounts, an event listener for the mouse wheel is added in componentDidMount.
Menu selection is handled by changing selectedIndex based on the wheel event.
Clicking the center button selects the current option, and clicking the Menu button takes the user back to the main menu.
The app dynamically renders different screens and submenus based on the current state.
Key Files
App.js: The main component that manages the iPod’s state and behavior. It handles the main menu and submenu transitions and binds the wheel event.
Menu.js: Renders a list of options based on the current menu.
Wheel.js: Simulates the circular scroll wheel and captures user interactions (clicks and scrolls).
Screen.js: Displays the currently selected menu or submenu.
Lifecycle Methods Used
componentDidMount: Adds the wheel event listener when the component is first mounted.
componentDidUpdate: Triggers on state change to respond to menu changes.
componentWillUnmount: Removes the wheel event listener to prevent memory leaks when the component is unmounted.
Future Enhancements
Games and Settings Functionality: Currently, the "Games" and "Settings" options only display text. You can enhance these with more interactive submenus or features.
Music Player: Implement a music player with play, pause, and navigation through songs.
Animations: Add animations to smooth transitions between menu screens for a better user experience.
Screenshots

Technologies Used
React.js (Class Components)
CSS (For styling the iPod interface)
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Contributions are welcome! Please feel free to submit a Pull Request for improvements, bug fixes, or new features.