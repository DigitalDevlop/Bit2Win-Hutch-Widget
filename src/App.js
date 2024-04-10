import React from 'react';
import './App.css';

class Widget extends React.Component {
  handleSubscribe = () => {
    // Redirect to the desired URL within an iframe
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed'; // Set position to fixed
    iframe.style.top = '50%'; // Center the iframe vertically
    iframe.style.left = '50%'; // Center the iframe horizontally
    iframe.style.transform = 'translate(-50%, -50%)'; // Adjust position to center
    iframe.style.width = '500px'; // Set the width
    iframe.style.height = '300px'; // Set the height
    iframe.style.overflow = 'hidden'; // Hide scrollbar
    iframe.style.border = 'none'; // Remove border
    iframe.style.zIndex = '9999'; // Set a high z-index to ensure the iframe is displayed on top
    iframe.src = 'http://consent.hutch.lk/register-service/Wg%3D%3DAA%3D%3DcQ%3D%3D';
    document.body.appendChild(iframe);

    // Add event listener to handle back button click
    window.addEventListener('message', this.handleMessage);
  };

  // Function to handle back button click event
  handleMessage = (event) => {
    if (event.data === 'backButtonClicked') {
      // Remove event listener
      window.removeEventListener('message', this.handleMessage);
      // Go back to the previous page
      window.history.back();
    }
  };

  render() {
    return (
      <div className="widget-container">
        <img className="image" src="/assets/1.jpg" alt="1" />
        <button className="subscribe-button" onClick={this.handleSubscribe}>Subscribe</button>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <Widget />
    </div>
  );
}

export default App;
