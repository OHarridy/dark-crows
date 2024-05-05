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
          {/* <iframe className="z-1" src={"https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1514.652430116504!2d"+longitude+"!3d"+latitude+"!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2seg!4v1714772641910!5m2!1sen!2seg"} style={{border:"0"}} loading="lazy">
            <button className="absolute w-32 h-32 top-0 right-0 z-10">Click me</button>
          </iframe> */}
            </div>
         );
    }
     
    export default TheMAP;