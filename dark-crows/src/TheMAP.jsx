import { useState } from "react";
const TheMAP = () => {
  const [latitude, setLatitude] = useState(30.019092345135768);
  const [longitude, setLongitude] = useState(31.322912398067018);

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