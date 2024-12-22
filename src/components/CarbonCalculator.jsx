import React, { useState } from 'react';

const CarbonCalculator = ({ distance }) => {
  const [travelMethod, setTravelMethod] = useState('car');
  const [passengers, setPassengers] = useState(1);

  // CO2 emissions in kg per passenger per km
  const emissionFactors = {
    car: 0.171,
    bus: 0.082,
    train: 0.041,
    plane: 0.255,
  };

  const calculateEmissions = () => {
    const emissionPerKm = emissionFactors[travelMethod];
    const totalEmissions = (distance * emissionPerKm) / (travelMethod === 'car' ? passengers : 1);
    return totalEmissions.toFixed(2);
  };

  const getSuggestions = () => {
    const suggestions = [
      {
        method: 'train',
        text: 'Consider traveling by train - it produces 60% less CO2 than driving alone.',
        icon: '🚂'
      },
      {
        method: 'bus',
        text: 'Public buses are an eco-friendly option, reducing your carbon footprint by 50%.',
        icon: '🚌'
      },
      {
        method: 'car',
        text: 'If driving, try carpooling to share emissions among passengers.',
        icon: '🚗'
      },
      {
        method: 'general',
        text: 'Pack reusable water bottles and containers to reduce plastic waste.',
        icon: '♻️'
      },
      {
        method: 'general',
        text: 'Support local conservation efforts through donations or volunteering.',
        icon: '🌱'
      }
    ];

    return suggestions.filter(s => s.method === 'general' || s.method !== travelMethod);
  };

  return (
    <div className="carbon-calculator">
      <h2>Carbon Footprint Calculator</h2>
      <div className="calculator-form">
        <div className="form-group">
          <label>Travel Method:</label>
          <select 
            value={travelMethod} 
            onChange={(e) => setTravelMethod(e.target.value)}
            className="calculator-select"
          >
            <option value="car">Car 🚗</option>
            <option value="bus">Bus 🚌</option>
            <option value="train">Train 🚂</option>
            <option value="plane">Plane ✈️</option>
          </select>
        </div>

        {travelMethod === 'car' && (
          <div className="form-group">
            <label>Number of Passengers:</label>
            <input
              type="number"
              min="1"
              max="8"
              value={passengers}
              onChange={(e) => setPassengers(Math.max(1, parseInt(e.target.value) || 1))}
              className="calculator-input"
            />
          </div>
        )}

        <div className="emissions-result">
          <h3>Estimated CO2 Emissions</h3>
          <div className="emissions-value">
            {calculateEmissions()} kg CO2
          </div>
        </div>

        <div className="eco-suggestions">
          <h3>Eco-Friendly Suggestions</h3>
          <div className="suggestions-list">
            {getSuggestions().map((suggestion, index) => (
              <div key={index} className="suggestion-item">
                <span className="suggestion-icon">{suggestion.icon}</span>
                <p>{suggestion.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonCalculator; 