import React, { useState } from 'react';
import './App.css';

function Widget() {
  const [showBackButton, setShowBackButton] = useState(false);

  const handleSubscribe = () => {
    // Create the iframe element
    const iframe = document.createElement('iframe');
    iframe.style.position = 'fixed'; // Set position to fixed
    iframe.style.top = '50%'; // Center the iframe vertically
    iframe.style.left = '50%'; // Center the iframe horizontally
    iframe.style.transform = 'translate(-50%, -50%)'; // Adjust position to center
    iframe.style.width = '800px';
    iframe.style.height = '600px';
    iframe.style.border = 'none'; // Remove border
    iframe.src = 'http://consent.hutch.lk/register-service/Wg%3D%3DAA%3D%3DcQ%3D%3D';

    // Append the iframe to the document body
    document.body.appendChild(iframe);

    // Add event listener to handle back button click
    window.addEventListener('message', handleMessage);

    // Show the back button
    setShowBackButton(true);
  };

  // Function to handle back button click event
  const handleMessage = (event) => {
    if (event.data === 'backButtonClicked') {
      // Remove event listener
      window.removeEventListener('message', handleMessage);
      // Go back to the previous page
      window.history.back();
    }
  };

  const handleBackButtonClick = () => {
    // Reload the entire page
    window.location.reload();
  };

  return (
    <div className="widget-container">
      {/* <img className="image" src="/assets/1.jpg" alt="1" /> */}
      <button className="subscribe-button" onClick={handleSubscribe}>Subscribe</button>
      {showBackButton && (
        <button className="back-button" onClick={handleBackButtonClick}>Back</button>
      )}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Widget />
    </div>
  );
}

export default App;
