import React, {useState} from 'react';



const Header = () => {
  // eslint-disable-next-line
  const[showOffer, setShowOffer]= useState(true);

  const handleHomeClick = () => {
    window.location.reload(); // Reloads the current page
  };
  return (
    <header>
      <div className="container">
      {showOffer &&(
        <div className="floating-offer">
          <p>20% off today with code: Bark20</p>
        </div>
      )}
        <h1>Bark Insurance</h1>
        <nav>
        <div className="nav-button" onClick={handleHomeClick}>Home</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;








