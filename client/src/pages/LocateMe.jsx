import React, { useEffect, useState } from 'react';

const LocateMe = () => {
  const [city, setCity] = useState('');

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          successCallback,
          errorCallback
        );
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    };

    const successCallback = (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      getCity([lat, lng]);
      saveLocationToDatabase(lat, lng); 
    };

    const errorCallback = (error) => {
      console.error("Error getting user location:", error);
      alert("Permission to access location was denied.");
    };

    const getCity = (coordinates) => {
      const [lat, lng] = coordinates;
      const token = "pk.2a08df6900bc9ab64ca80083b3433d78"; 
      const url = `https://us1.locationiq.com/v1/reverse.php?key=${token}&lat=${lat}&lon=${lng}&format=json`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const city = data.address.city;
          setCity(city);
        })
        .catch((error) => {
          console.error("Error fetching city:", error);
        });
    };

    const saveLocationToDatabase = (lat, lng) => {
      fetch('/api/location', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          city: city,
          coordinates: [lat, lng]
        })
      })
      .then(response => response.json())
      .then(data => console.log('Location saved to database:', data))
      .catch(error => console.error('Error saving location to database:', error));
    };

    getLocation();
  }, [city]);

  return (
    <div>
      <h2>Your Current City: {city}</h2>
    </div>
  );
};

export default LocateMe;
