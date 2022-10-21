import React from 'react';

export default function Location() {
  const googleMapsKey = process.env.GOOGLE_MAPS_API_KEY;
  return (
    <div>
      <iframe
        width="600"
        height="450"
        loading="lazy"
        allowfullscreen
        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJS0Nrbcxk8YcR-KLPPbj-akY&key=..."
      ></iframe>
    </div>
  );
}
