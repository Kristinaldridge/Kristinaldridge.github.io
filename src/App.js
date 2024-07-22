import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header.js';
import BreedCard from './components/BreedCard.js';
import Footer from './components/Footer.js';
import MoneySection from './components/MoneySection.js';
import './styles/index.css';
import InsurancePlans from './components/InsurancePlan.js';

function App() {
    return (
      <div className="App">
        <Header />    
<main>
<section>
<div>
      <BreedCard />
    </div>
  </section>
  <div>
    <InsurancePlans />
  </div>
<div>
 <MoneySection />
</div>
  </main>
  <Footer />
  </div>
    );
  };

  export default App;