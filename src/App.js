import React, { useState, useEffect } from 'react';
import './styles.css';

function App() {
  const url = 'https://picsum.photos/v2/list?page=5&limit=6';

  const [results, setResults] = useState([]);

  const getImages = async (url) => {
    fetch(url)
      const res = await fetch(url)
      const data = await res.json();

      setResults(data)
  }

  useEffect(() => {
    getImages(url);
  }, []);

  return (
    <main>
      <ul className='container'>
        {results.map((image) => (
          <li className='card'>
            <img
              src={image.download_url}
              alt={image.author}
              key={image.id}
              className=''
            />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
