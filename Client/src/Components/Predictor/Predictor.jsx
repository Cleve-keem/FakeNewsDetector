import { useState } from "react";

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
    <div>
      <h1>ML Fake News Prediction</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={news}
          onChange={(e) => setNews(e.target.value)}
          placeholder="Enter Your News"
          name="input_text"
          required
        ></textarea>
        <button type="submit">Predict</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error if any */}
      {prediction && <p>Prediction: {prediction}</p>} {/* Display prediction */}
    </div>
  );
}

export default Predictor;
