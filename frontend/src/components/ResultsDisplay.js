import React from 'react';

function ResultsDisplay({ result }) {
  return (
    <div>
      <h2>Results:</h2>
      {result ? (
        <pre>{JSON.stringify(result, null, 2)}</pre>
      ) : (
        <p>No results</p>
      )}
    </div>
  );
}

export default ResultsDisplay;