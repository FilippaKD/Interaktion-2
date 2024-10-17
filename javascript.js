
// Markers för bilder
let picMarkers = [
  {
    position: [500, 390],
    imageUrl: "img/slott.jpeg", 
  },
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
    imageUrl: "img/sculture.jpeg", 
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
        <h2 class="infotext">Drunkningsolyckan 1775</h2>
        <div class="background">
        </div>
        <img src="img/stencomp.jpg" alt="sten" class="infoimg">
      </div>
    `
  },
];

function init() {
  createMap();
  createHMarkers();
}
window.addEventListener("load", init);

function createMap() {
  // Skapar kartan
  map = L.map('map', {
    crs: L.CRS.Simple, 
    minZoom: 0,        
    maxZoom: 2,
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

  picMarkers.forEach(function(markerData) {
    let marker = L.marker(markerData.position, { icon: picmarker }).addTo(map);

    marker.on('click', function() {
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

  modal.style.display = "block"; 

  if (imageUrl) {
    modalImg.src = imageUrl; // Visa bild om imageUrl finns
    modalImg.style.display = "block"; // Se till att bilden visas
    modalHtmlContent.style.display = "none"; // Dölj HTML-innehåll
  } else if (htmlContent) {
    modalHtmlContent.innerHTML = htmlContent; // Lägg in HTML-innehållet
    modalHtmlContent.style.display = "block"; // Visa HTML-innehåll
    modalImg.style.display = "none"; // Dölj bilden
  }

  let closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function() {
    modal.style.display = "none"; 
  }

  // Stänger vid klick utanför
  modal.onclick = function(event) {
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
  hMarker.forEach(function(markerData) {
    // Skapa markör med den nya ikonen
    var marker = L.marker(markerData.position, { icon: factIcon }).addTo(map);

    // När markören klickas, öppna modalfönstret med HTML-innehållet
    marker.on('click', function() {
      openModal(null, markerData.content);  // Skickar dynamiskt HTML-innehåll
    });
  });
}



/*
let map;  // Kartam

// Markers för bilder
let picMarkers = [
  {
    position: [450, 380],
    imageUrl: "img/startSlott.jpg", 
  }
];

let hMarker = [
  {
    position: [400, 500],
    content: `
      <div>
        <h2>Bild och text om Slottet</h2>
        <img src="img/startSlott.jpg" alt="Slott" style="width:100%;border-radius:10px;">
        <p>Här är lite text om slottet. Det är en väldigt historisk byggnad.</p>
        <button onclick="alert('Du klickade på en knapp i modalrutan!')">Tryck här</button>
      </div>
    `
  },
];

function init() {



  createMap();


  createHMarkers();



}
window.addEventListener("load", init);



function createMap() {


  // Skapar kartan
  map = L.map('map', {
    crs: L.CRS.Simple, 
    minZoom: 0,        
    maxZoom: 2,
    zoomSnap: 0.1,
    maxBoundsViscosity: 1.0
  });

  let imageURL = "img/firstMap6.svg"; 
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
    iconSize: [50, 50], 
    iconAnchor: [25, 50],  
    popupAnchor: [0, -50]
  });


  picMarkers.forEach(function(markerData) {
    let marker = L.marker(markerData.position, { icon: picmarker }).addTo(map);

    marker.on('click', function() {
      openModal(markerData.imageUrl);
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


// Modalfönster med bild
function openModal(imageUrl, htmlContent) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("modalImage");

  modal.style.display = "block"; 
  modalImg.src = imageUrl; 

  
  let closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function() {
    modal.style.display = "none"; 
  }

  // Stänger vid klick utanför
  modal.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none"; 
    }
  }
}


function createHMarkers() {
  // Definiera en ny ikon för faktapinnarna
  let factIcon = L.icon({
    iconUrl: "img/faktapin.svg",  // Använd den nya ikonen
    iconSize: [50, 50],  // Storleken på ikonen
    iconAnchor: [25, 50],  // Var på ikonen som den ska förankras
    popupAnchor: [0, -50]  // Var popup kommer att visas relativt till markören
  });

  // Lägg till alla hMarkers på kartan
  hMarker.forEach(function(markerData) {
    // Skapa markör med den nya ikonen
    var marker = L.marker(markerData.position, { icon: factIcon }).addTo(map);

    // När markören klickas, öppna modalfönstret med HTML-innehållet
    marker.on('click', function() {
      openModal(markerData.content);  // Skickar dynamiskt HTML-innehåll
    });
  });
}

*/