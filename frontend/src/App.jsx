import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/api/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div >
      <h1 >Sample Project </h1>
      <h2 ></h2>
      {data ? (
        <p>{data.message}</p>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;
