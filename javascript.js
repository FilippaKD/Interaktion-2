
// Markers för bilder
let picMarkers = [
  {
    position: [390, 391],
    imageUrl: "img/entrance.jpeg",
  },
  {
    position: [495, 490],
    imageUrl: "img/path.jpeg",
  },
  {
    position: [650, 230],
    imageUrl: "img/viewgarden.jpeg",
  },
  {
    position: [825, 478],
    imageUrl: "img/tree.jpeg",
  },
  {
    position: [850, 600],
    imageUrl: "img/walkway.jpeg",
  },
  {
    position: [480, 660],
    imageUrl: "img/sculpture.jpeg",
  },

];

let hMarker = [
  {
    position: [575, 458],
    content: `
      <div class="infodiv">
        <h2 class="infotext">
        Drunkningsolyckan 1775
        <img src="img/audio.svg" class="audioimg">
        </h2>
        <div class="background">
        </div>
        <img src="img/stencomp.jpg" alt="Drunkningsolyckan 1775" class="infoimg">
      </div>
    `
  },
  {
    position: [445, 262],
    content: `
      <div class="infodiv">
        <h2 class="infotext">
        Fontänen
        <img src="img/audio.svg" class="audioimg">
        </h2>
        <div class="background">
        </div>
        <img src="img/fontain.jpg" alt="Fontän" class="infoimg">
      </div>
    `
  },
  {
    position: [760, 281],
    content: `
      <div class="infodiv">
        <h2 class="infotext">
        Köksträdgården
        <img src="img/audio.svg" class="audioimg">
        </h2>
        <div class="background">
        </div>
        <img src="img/veggarden.jpg" alt="Köksträdgården" class="infoimg">
      </div>
    `
  },
  {
    position: [770, 890],
    content: `
      <div class="infodiv">
        <h2 class="infotext">
        Minnesmärke
        <img src="img/audio.svg" class="audioimg">
        </h2>
        <div class="background">
        </div>
        <img src="img/sten.jpg" alt="Minnesmärke" class="infoimg">
      </div>
    `
  },
  {
    position: [480, 852],
    content: `
      <div class="infodiv">
        <h2 class="infotext">
        Kryddgården
        <img src="img/audio.svg" class="audioimg">
        </h2>
        <div class="background">
        </div>
        <img src="img/garden.jpg" alt="Kryddgården" class="infoimg">
      </div>
    `
  },
  {
    position: [510, 942],
    content: `
      <div class="infodiv">
        <h2 class="infotext">
        Ameliden
        <img src="img/audio.svg" class="audioimg">
        </h2>
        <div class="background">
        </div>
        <img src="img/almeliden.jpg" alt="Ameliden" class="infoimg">
      </div>
    `
  },
  {
    position: [393, 935],
    content: `
      <div class="infodiv">
        <h2 class="infotext">
        Djurkyrkogården
        <img src="img/audio.svg" class="audioimg">
        </h2>
        <div class="background">
        </div>
        <img src="img/grave.jpg" alt="Djurkyrkogården" class="infoimg">
      </div>
    `
  },
  {
    position: [330, 665],
    content: `
      <div class="infodiv">
        <h2 class="infotext">
        Humlegården
        <img src="img/audio.svg" class="audioimg">
        </h2>
        <div class="background">
        </div>
        <img src="img/humle.jpg" alt="Humlegården" class="infoimg">
      </div>
    `
  },
];









function init() {
  createMap();
  createHMarkers();
  addrestmarker();
  addfactmarker();

  let expandButton = document.getElementById("expandButton");
  let expandableDiv = document.getElementById("expandableDiv");

  // Lägg till en klick-händelse för knappen
  expandButton.addEventListener("click", function () {
      // Kontrollera om div-boxen är dold eller synlig
      if (expandableDiv.style.display === "none" || expandableDiv.style.display === "") {
          expandableDiv.style.display = "block";  // Visa div-boxen
          expandButton.textContent = "Stäng";  // Ändra knappens text till "Stäng"
      } else {
          expandableDiv.style.display = "none";  // Dölj div-boxen
          expandButton.innerHTML = 'Mer <img src="img/arrow.svg" alt="pil" id="arrow">' ;  // Återställ knappens text
      }
  });


}
window.addEventListener("load", init);

function createMap() {
  // Skapar kartan
  map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 0,
    maxZoom: 1,
    zoomSnap: 0.1,
    maxBoundsViscosity: 1.0
  });

  let imageURL = "img/map.svg";
  let imageBounds = [[0, 0], [1000, 1000]];

  // Bildöverlagring på kartan
  L.imageOverlay(imageURL, imageBounds).addTo(map);

  // Start för kartan
  map.fitBounds(imageBounds);
  map.setMaxBounds(imageBounds);
  map.setView([500, 500], 0);

  // Ikon för bilderna
  let picmarker = L.icon({
    iconUrl: "img/bildPin.svg",
    iconSize: [30, 30],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
  });

  picMarkers.forEach(function (markerData) {
    let marker = L.marker(markerData.position, { icon: picmarker }).addTo(map);

    marker.on('click', function () {
      openModal(markerData.imageUrl);  // Öppna modal för bild
    });
  });
}

// Zoom knappar
function zoomIn() {
  map.zoomIn();
}

function zoomOut() {
  map.zoomOut();
}

// Modalfönster för både bild och HTML-innehåll
function openModal(imageUrl = null, htmlContent = null) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("modalImage");
  let modalHtmlContent = document.getElementById("modalContent"); // Ny div för HTML-innehåll

  modalImg.style.display = "none";
  modalHtmlContent.style.display = "none";

  modal.style.display = "block";

  if (imageUrl) {
    modalImg.src = "";
    
    modalImg.onload = function () {
      modalImg.style.display = "block";
    };
    
    modalImg.src = imageUrl;

  } else if (htmlContent) {
    modalHtmlContent.innerHTML = htmlContent; // Lägg in HTML-innehållet
    modalHtmlContent.style.display = "block"; // Visa HTML-innehåll
   // modalImg.style.display = "none"; // Dölj bilden
  }

  let closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function () {
    modal.style.display = "none";
  }

  // Stänger vid klick utanför
  modal.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function createHMarkers() {
  // Definiera en ny ikon för faktapinnarna
  let factIcon = L.icon({
    iconUrl: "img/faktapin.svg",  // Använd den nya ikonen
    iconSize: [25, 25],  // Storleken på ikonen
    iconAnchor: [25, 50],  // Var på ikonen som den ska förankras
    popupAnchor: [0, -50]  // Var popup kommer att visas relativt till markören
  });

  // Lägg till alla hMarkers på kartan
  hMarker.forEach(function (markerData) {
    // Skapa markör med den nya ikonen
    var marker = L.marker(markerData.position, { icon: factIcon }).addTo(map);

    // När markören klickas, öppna modalfönstret med HTML-innehållet
    marker.on('click', function () {
      openModal(null, markerData.content);  // Skickar dynamiskt HTML-innehåll
    });
  });
}

function addrestmarker() {

   let position = [115, 360]; 

   let restIcon = L.icon({
    iconUrl: "img/restpin.svg", 
    iconSize: [35, 35],
    iconAnchor: [25, 50], 
    popupAnchor: [0, -50] 
  });

   let popupContent = `
     <div>
       <h3>Torups slottscafé</h3>
       <p>På Torups slottscafé finns både mat och fika. Besök oss för att se om något faller dig i smak!</p>
       <a href="cafe.html" class="popupbtn">Se meny och öppetider</a>
     </div>
   `;

   let marker = L.marker(position,{ icon: restIcon } ).addTo(map);
 
   marker.bindPopup(popupContent);

}


function addfactmarker() {

  let position = [500, 390]; 

  let restIcon = L.icon({
   iconUrl: "img/starpin.svg", 
   iconSize: [35, 35],
   iconAnchor: [25, 50], 
   popupAnchor: [0, -50] 
 });

  let popupContent = `
    <div>
      <p>Är du mer intresserad av Torups historia?</p>
      <a href="fact.html" class="popupbtn">Se mer fakta</a>
    </div>
  `;

  let marker = L.marker(position,{ icon: restIcon } ).addTo(map);

  marker.bindPopup(popupContent);

}


