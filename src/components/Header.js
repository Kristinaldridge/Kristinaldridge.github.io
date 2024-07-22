import React, {useState} from 'react';
// import {Link} from 'react-router-dom';


const Header = () => {
  // eslint-disable-next-line
  const[showOffer, setShowOffer]= useState(true);

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
          <ul>
            
             <li>Home</li>
            <li>Insurance Plans</li>
            <li>Quote</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;








