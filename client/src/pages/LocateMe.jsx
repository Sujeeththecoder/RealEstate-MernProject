import React, { useState } from 'react';

function LocateMe() {
  const [city, setCity] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLocateMe = () => {
    setIsLoading(true);
    setError(null);

    getCoordinates();
  };

  function getCoordinates() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    function success(pos) {
      const crd = pos.coords;
      getCity([crd.latitude, crd.longitude]);
    }

    function error(err) {
      setError(`Error getting location: ${err.message}`);
      setIsLoading(false); 
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }

  function getCity(coordinates) {
    const xhr = new XMLHttpRequest(); 
    const lat = coordinates[0]; 
    const lng = coordinates[1]; 

    // Replace with your actual LocationIQ access token
    const url = `https://us1.locationiq.com/v1/reverse.php?key=pk.2a08df6900bc9ab64ca80083b3433d78&lat=${lat}&lon=${lng}&format=json`;

    xhr.open('GET', url, true);
    xhr.send();
    xhr.onreadystatechange = processRequest; 

    function processRequest(e) { 
      if (xhr.readyState == 4) {
        setIsLoading(false);
        if (xhr.status == 200) { 
          const response = JSON.parse(xhr.responseText); 
          setCity(response.address.city); 
        } else {
          setError('Error getting city data');
        }
      }
    } 
  }

  return (
    <>
      <button onClick={handleLocateMe} disabled={isLoading}>
        {isLoading ? 'Locating...' : 'Locate Me'}
      </button>
      {city && <p>Your city: {city}</p>}
      {error && <p className="error-message">{error}</p> } 
    </>
  );
}

export default LocateMe;
