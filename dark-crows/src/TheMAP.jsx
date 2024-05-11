import { useState } from "react";
import propTypes from 'prop-types';
const TheMAP = (props) => {

  TheMAP.propTypes = {
    handleMapChange: propTypes.func,
    lat: propTypes.number,
    long: propTypes.number,
  }
  const lat = 30;
   console.log("LAT", lat);
  const long = 31;
  console.log("LONG", long);

  const snapshotLatitude = lat;
  const snapshotLongitude = long;


  const [latitude, setLatitude] = useState(+snapshotLatitude);
  const [longitude, setLongitude] = useState(+snapshotLongitude);
  console.log("COORDS", latitude, longitude);


  function changeLatitude(input){
    setLatitude(input);
    localStorage.setItem("latitude", latitude);
    console.log("LAT", localStorage.getItem("latitude"));
  }

  function changeLongitude(input){
    setLongitude(input);
    localStorage.setItem("longitude", longitude);
    console.log("LONG", localStorage.getItem("longitude"));
  }
        
    async function initMap() {
            const { Map, InfoWindow } = await window.google.maps.importLibrary("maps");
            const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");
            
            const map = new Map(document.getElementById("map"), {
              center: { lat: latitude, lng: longitude },
              zoom: 14,
              mapId: "4504f8b37365c3d0",
            });
            const infoWindow = new InfoWindow();
            const draggableMarker = new AdvancedMarkerElement({
              map,
              position: { lat: latitude, lng: longitude },
              gmpDraggable: true,
              title: "This marker is draggable.",
            });
            
            draggableMarker.addListener("dragend", (event) => {
              const position = draggableMarker.position;
              changeLatitude(position.lat);
              changeLongitude(position.lng);
              props.handleMapChange(position.lng, position.lat);
              infoWindow.close();
              infoWindow.setContent(`Pin dropped at: ${position.lat}, ${position.lng}`);
              infoWindow.open(draggableMarker.map, draggableMarker);
              console.log(longitude, latitude);
              });
          }
          initMap();
          
        return ( 
            <div>
          <div id="map"  className="z-1" style={{height:"600px", width:"600px"}}></div>
            </div>
         );
    }
     
    export default TheMAP;