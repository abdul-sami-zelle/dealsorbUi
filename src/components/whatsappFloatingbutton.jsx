import React from 'react';




function WhatsAppFloatingButton() {
  const handleButtonClick = () => {
    // Define the action you want to perform when the button is clicked
    // For example, scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <button style={{
      position: 'fixed',
      bottom: '80px',
      left: '20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '50%',
      padding: '23px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundImage: `url("https://cdn-icons-png.flaticon.com/128/3670/3670051.png")`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      zIndex:'9999'
    }} className="floating-button-what" onClick={handleButtonClick}>
    </button>
  );
}

export default WhatsAppFloatingButton;
