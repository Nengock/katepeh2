import React, { useState } from 'react';

function ImageUpload({ onImageUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      fetch('/upload', {
        method: 'POST',
        body: formData,
      })
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
            }
          return response.text();
      })
        .then(data => {
          console.log('Image uploaded:', data);
          onImageUpload(file);
        })
        .catch(error => {
          console.error('Error uploading image:', error);
        });
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
    </div>
  );
}

function ImagePreview({ imageUrl }) {
  return (
    <div>
      {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '300px' }} />}
    </div>
  );
}

function ResultsDisplay({ results }) {
    return (
      <div>
        {results && (
          <pre>{JSON.stringify(results, null, 2)}</pre>
        )}
      </div>
    );
  }

function App() {
  const [imageUrl, setImageUrl] = useState(null);
  const [results, setResults] = useState(null);

  const handleImageUpload = (file) => {
    setImageUrl(URL.createObjectURL(file));
    setResults({message:"image received"});
  };

  return (
    <div>
      <ImageUpload onImageUpload={handleImageUpload} />
      <ImagePreview imageUrl={imageUrl} />
      <ResultsDisplay results={results} />
    </div>
  );
}

export default App;