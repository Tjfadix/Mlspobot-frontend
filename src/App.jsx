import React, { useState } from 'react';

function App() {
  const [parlay, setParlay] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const fetchParlay = async () => {
    const response = await fetch('https://your-backend-url.com/api/parlay');
    const data = await response.json();
    setSuggestions(data.suggestions);
  };

  const addToParlay = (leg) => {
    if (!parlay.includes(leg)) {
      setParlay([...parlay, leg]);
    }
  };

  const removeLeg = (leg) => {
    setParlay(parlay.filter(item => item !== leg));
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">MLSPoBot Parlay Optimizer</h1>
      <button
        onClick={fetchParlay}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Fetch Suggestions
      </button>

      <div>
        <h2 className="text-lg font-semibold">Suggested Legs</h2>
        <ul className="mb-4">
          {suggestions.map((leg, idx) => (
            <li key={idx} className="flex justify-between items-center border-b py-2">
              {leg}
              <button
                onClick={() => addToParlay(leg)}
                className="bg-green-500 text-white px-2 py-1 rounded"
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-semibold">Your Parlay</h2>
        <ul>
          {parlay.map((leg, idx) => (
            <li key={idx} className="flex justify-between items-center border-b py-2">
              {leg}
              <button
                onClick={() => removeLeg(leg)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
