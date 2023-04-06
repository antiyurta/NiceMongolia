import React, { useEffect, useState } from 'react';
import { DirectionsRenderer } from 'react-google-maps';
function MapDirectionsRenderer(props) {
   const [directions, setDirections] = useState(null);
   const [error, setError] = useState(null);
   useEffect(() => {
      const { places, travelMode } = props;

      const waypoints = places?.map((p) => ({
         location: {
            lat: parseFloat(p.latitude),
            lng: parseFloat(p.longitude)
         },
         stopover: true
      }));
      const origin = waypoints?.shift()?.location;
      const destination = waypoints?.pop()?.location;
      const directionsService = new window.google.maps.DirectionsService();
      //   const directionsDisplay = new window.google.maps.DirectionsRenderer();
      //   directionsDisplay.setMap(places);
      directionsService.route(
         {
            origin: origin,
            destination: destination,
            travelMode: travelMode,
            waypoints: waypoints
         },
         (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
               setDirections(result);
            } else {
               setError(result);
            }
         }
      );
   }, []);
   if (error) {
      return <h1>{error}</h1>;
   }
   return directions && <DirectionsRenderer directions={directions} />;
}
export default MapDirectionsRenderer;
