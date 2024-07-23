import React from 'react';
import Header from './components/Header.js';
import BreedCard from './components/BreedCard.js';
import Footer from './components/Footer.js';
import MoneySection from './components/MoneySection.js';
import './styles/index.css';
import InsurancePlans from './components/InsurancePlan.js';

import store from './store.js';
import { increment, decrement } from './actions';
import { useSelector, useDispatch } from 'react-redux';
import { Provider } from 'react-redux';

const App = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

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
        <h2 style={{ textAlign: 'center', marginTop: '20px' }}>Rate Your Experience</h2>
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <button onClick={handleIncrement}>Increment</button>
          <span style={{ margin: '0 10px' }}>{count}</span>
          <button onClick={handleDecrement}>Decrement</button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default function WrappedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}