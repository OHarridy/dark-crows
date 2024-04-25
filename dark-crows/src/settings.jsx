import React, { useState } from 'react';

function settings() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <h1>Change Password</h1>
      
      <div style={{ padding: 30 }}>
        <button style={{ marginRight: '20px', marginLeft:'20px' }}>Button 3</button>
        <button style={{ marginRight: '20px', marginLeft:'20px' }}>Button 4</button>
        <button style={{ marginRight: '20px', marginLeft:'20px' }}>Button 5</button>
      </div>

      {isOpen && (
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: '#fff',
          padding: '50px',
          zIndex: 1000,
        }}>
          <button onClick={togglePopup}>Close</button>
          <h1>Popup Content</h1>
        </div>
      )}

      {isOpen && <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 500,
      }}/>}
    </div>
  );
}

export default settings;