import React, { useState } from "react";
import "./App.css";

function Widget() {
  const [showBackButton, setShowBackButton] = useState(false);

  const handleSubscribe = () => {
    // Open the URL in a new window
    window.open(
      "http://consent.hutch.lk/register-service/Wg%3D%3DAA%3D%3DcQ%3D%3D",
      "_blank"
    );

    // Show the back button
    // setShowBackButton(true);
  };

  // const handleMessage = (event) => {
  //   if (event.data === "backButtonClicked") {
  //     // Remove event listener
  //     window.removeEventListener("message", handleMessage);
  //     // Go back to the previous page
  //     window.history.back();
  //   }
  // };

  // const handleBackButtonClick = () => {
  //   // Reload the entire page
  //   window.location.reload();
  // };

  return (
    <div className="widget-container">
      {/* <img className="image" src="/assets/1.jpg" alt="1" /> */}
      <button className="subscribe-button" onClick={handleSubscribe}>
        Subscribe
      </button>
      {/* {showBackButton && (
        <button className="back-button" onClick={handleBackButtonClick}>
          Back
        </button>
      )} */}
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
