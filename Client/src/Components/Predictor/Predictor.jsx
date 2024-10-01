import React from 'react'
import { useState } from "react";
import './Predictor.modulus.css'

function Predictor() {
  const [news, setNews] = useState("");
  const [prediction, setPrediction] = useState("");
  const [error, setError] = useState(null); // Track any errors

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Sending a POST request to the API with the inputted news
      const response = await fetch('http://127.0.0.1:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ news }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      // Track the response gotten from the API
      const result = await response.json();
      setPrediction(result.prediction); // Set prediction if successful
      setError(null); // Clear any previous errors
    }
    catch (error) {
      console.error("Error fetching data:", error);
      setError("An error occurred during prediction. Please try again."); // Display error message
      setPrediction("");
    }
  };

  return (
    <div className='container'>
      <div className="wrapper">
        <div className="predictor">
          <div className="center-vertical content">
            <h1>Fake News Detector</h1>
            <p className='desc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis reprehenderit, ullam maxime in facilis.</p>
          </div>
          <form onSubmit={handleSubmit} className='center-vertical'>
            <textarea
            className='text-section'
              value={news}
              onChange={(e) => setNews(e.target.value)}
              placeholder="Enter Your News"
              name="input_text"
              required
            ></textarea>
            <button className='predictBtn' type="submit">Predict</button>
          </form>
          {error && <p className='error result'>{error}</p>}
          {prediction && <p className='prediction result'>Prediction: {prediction}</p>}
        </div>
      </div>
    </div>
  );
}

export default Predictor;
