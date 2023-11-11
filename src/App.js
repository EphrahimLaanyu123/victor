import React, { useState, useEffect } from 'react';


function App() {
  const [propertyListings, setPropertyListings] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('http://localhost:4000/properties')  // Replace 'YOUR_JSON_API_ENDPOINT' with the actual API endpoint
      .then((response) => response.json())
      .then((data) => setPropertyListings(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="App">
      <h1>Property Listings</h1>
      <ul>
        {propertyListings.map((listing) => (
          <li key={listing.id}>
            <h2>{listing.name}</h2>
            <p>Type: {listing.type}</p>
            <p>Location: {listing.location}</p>
            <p>Bedrooms: {listing.bedrooms}</p>
            <p>Bathrooms: {listing.bathrooms}</p>
            <p>Price: ${listing.price}</p>
            <p>Availability: {listing.availability ? 'Yes' : 'No'}</p>
            {listing.image && <img src={listing.image} alt={listing.name} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
