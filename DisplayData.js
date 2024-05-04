import React, { useEffect, useState } from 'react';

function DisplayData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/display');
      const jsonData = await response.json();
      setData(jsonData);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <h3>{item.name}</h3>
          <p>Age: {item.age}</p>
          <p>City: {item.city}</p>
        </div>
      ))}
    </div>
  );
}

export default DisplayData;
