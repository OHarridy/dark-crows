const TheMAP = () => {
    async function initMap() {
            const { Map, InfoWindow } = await window.google.maps.importLibrary("maps");
            const { AdvancedMarkerElement } = await window.google.maps.importLibrary("marker");
            
            const map = new Map(document.getElementById("map"), {
              center: { lat: 30.01909234513576, lng: 31.322912398067018 },
              zoom: 14,
              mapId: "4504f8b37365c3d0",
            });
            const infoWindow = new InfoWindow();
            const draggableMarker = new AdvancedMarkerElement({
              map,
              position: { lat: 30.019092345135768, lng: 31.322912398067018 },
              gmpDraggable: true,
              title: "This marker is draggable.",
            });
          
            draggableMarker.addListener("dragend", (event) => {
              const position = draggableMarker.position;
          
              infoWindow.close();
              infoWindow.setContent(`Pin dropped at: ${position.lat}, ${position.lng}`);
              infoWindow.open(draggableMarker.map, draggableMarker);
              console.log(position.lat, position.lng);
            });
          }
          initMap();
        return ( 
            <div>
          <div id="map" style={{height:"1000px", width:"1000px"}}></div>
            </div>
         );
    }
     
    export default TheMAP;