import React from "react"
import { useState } from 'react';
import './App.css';


function Home() {
  const [weight, setWeight] = useState(); // State for weight
  const [ft, setFt] = useState(); // State for feet
  const [inches, setInches] = useState(); // State for inches

  const handleClick = () => {
    
    const heightInMeters = (parseInt(ft) * 12 + parseInt(inches)) * 0.0254; // Convert height to meters
if(parseInt(ft)>9){
  alert('height cannot be greater than 9ft')
  return
}

if(parseInt(inches)>11){
  alert('inches cannot be greater than 11inches')
 return
}
    if (weight && heightInMeters) {
      const calculatedBmi = (weight / (heightInMeters ** 2)).toFixed(2);
    
      alert(`Your BMI is: ${calculatedBmi}`);
    } else {
      alert('Enter valid inputs');
    }
    setWeight('');
    setFt('');
    setInches('');
  };

  return (
    <>
      
      <main>
        <div className='calc-cont'>
          <div>
            <h2>BMI CATEGORIES</h2>
            <p>Underweight : less than 18.5</p>
            <p>Normal weight : 18.5 - 24.9</p>
            <p>Overweight : 25 - 29.9</p>
            <p>Obesity : 30 or greater</p>
          </div>
          <div className='cal'>
            <h2>Calculator</h2>
            <label>
              <figcaption>Input weight in <span>kg</span></figcaption>
              <input 
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className='in'
                type="number"
                placeholder='e.g. 10 kg'
                min='1'
              />
            </label>
            <label>
              <figcaption className='tyo'>Input height in feet and inches</figcaption>
              <div className='inn-cont'>
                <input
                  value={ft}
                  onChange={(e) => setFt(e.target.value)}
                  className='inn'
                  type="number"
                  placeholder='ft'
                  min='0'
                />
                <input
                  value={inches}
                  onChange={(e) => setInches(e.target.value)}
                  className='innn'
                  type="number"
                  placeholder='inch'
                  min='0'
                />
              </div>
            </label>
            <button onClick={handleClick}>Calculate</button>
          </div>
        </div>
      </main>
      <footer>
        <p>Made By Dan-Vic | &copy; 2024</p>
      </footer>
    </>
  );
}

export default Home;
