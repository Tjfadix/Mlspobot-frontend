```jsx
import React from 'react';

const data = [
  {
    fixture: "Chicago Fire II vs Columbus Crew II",
    bet: "Chicago Fire II -1.0 AH",
    confidence: 0.93,
    odds: 1.90,
    framework: "Bayesian Updating"
  },
  {
    fixture: "Philadelphia Union II vs FC Cincinnati II",
    bet: "Philadelphia Union II -1.0 AH",
    confidence: 0.91,
    odds: 1.85,
    framework: "Contrarian Sentiment + Form Filter"
  },
  {
    fixture: "Orlando City B vs NYCFC II",
    bet: "Over 2.5 Goals",
    confidence: 0.89,
    odds: 1.78,
    framework: "xG Disparity Mapping"
  },
  {
    fixture: "North Texas vs Colorado Rapids II",
    bet: "North Texas HT/FT Win",
    confidence: 0.87,
    odds: 2.10,
    framework: "Tactical Archetype Clustering"
  }
];

function App() {
  const totalOdds = data.reduce((acc, leg) => acc * leg.odds, 1).toFixed(2);
  const projectedWinRate = (data.reduce((acc, leg) => acc * leg.confidence, 1) * 100).toFixed(1);

  return (
    <div className="min-h-screen p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">
        MLSPoBot Parlay Optimizer
      </h1>

      <div className="space-y-4">
        {data.map((leg, idx) => (
          <div key={idx} className="bg-white p-4 rounded-2xl shadow">
            <h2 className="font-semibold">{leg.fixture}</h2>
            <p>Bet: {leg.bet}</p>
            <p>Confidence: {(leg.confidence * 100).toFixed(1)}%</p>
            <p>Edge: {leg.framework}</p>
            <p>Odds: {leg.odds}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 bg-yellow-100 p-4 rounded-xl text-center">
        <p className="font-bold">Total Odds: {totalOdds}</p>
        <p className="font-bold">Projected Win Rate: {projectedWinRate}%</p>
      </div>
    </div>
  );
}

export default App;
```

---
