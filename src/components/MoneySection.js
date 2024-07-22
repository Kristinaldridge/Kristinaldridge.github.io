import React, {useState} from "react";

const InsuranceCalculator = () => {
const [numberOfDogs, setNumberOfDogs] = useState(1);
const [insurancePlan, setInsurancePlan] = useState('Basic');
const [totalPrice, setTotalPrice] = useState(10);


const handleNumberOfDogChange = (e) => {
    setNumberOfDogs(parseInt(e.target.value));
};

const handleInsurancePlanChange = (e) => {
    setInsurancePlan(e.target.value);
    if(e.target.value ==='Basic') {
        setTotalPrice(numberOfDogs * 10);
    }else if (e.target.value === 'Advanced') {
        setTotalPrice(numberOfDogs * 20);
    }
};

const handleStartPlanClick = () => {
    alert('Submitted');
  };

return (
    
        <section className="dog-quote">
            <div className="container">
        <h1>Get An Instant Quote</h1>
        <h2>Insurance Calculator</h2>
        <div className="dog-calculator">
        <label htmlFor="numberOfDogs">Select Number of Dogs: </label>
        <select id="numberOfDogs" value={numberOfDogs} onChange={handleNumberOfDogChange}>
            {[...Array(10).keys()].map(num => (
                <option key= {num +1} value={num +1}>{num +1}</option>
            ))}
        </select>
        </div>
        <div className="dog-calculator">
        <label htmlFor="insurancePlan">Select Insurance Plan:</label>
        <select id="insurancePlan" value={insurancePlan} onChange={handleInsurancePlanChange}>
          <option value="Basic">Basic</option>
          <option value="Advanced">Advanced</option>
          </select>
        </div>
    <div>
        <p className="dog-calculator">Here is your price: ${totalPrice}</p>
      </div>
      <div className="dog-calculator">
          <button className="btn" onClick={handleStartPlanClick}>Start Plan</button>
        </div>
    </div>
</section> 
);
};

export default InsuranceCalculator;
