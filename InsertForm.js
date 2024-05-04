import React, { useState } from 'react';

function InsertForm() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:3000/insert', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, age, city }),
    });
    alert('Data inserted successfully');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
      <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Age" required />
      <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="City" required />
      <button type="submit">Submit</button>
    </form>
  );
}

export default InsertForm;
