
// Markers för bilder
let picMarkers = [
  {
    position: [225, 660],
    imageUrl: "img/path.jpeg",
  },
  {
    position: [300, 340],
    imageUrl: "img/viewgarden.jpeg",
  },
  {
    position: [420, 570],
    imageUrl: "img/tree.jpeg",
  },
  {
    position: [430, 700],
    imageUrl: "img/walkway.jpeg",
  },
  {
    position: [220, 830],
    imageUrl: "img/sculpture.jpeg",
  },

];

// Markers för fakta
let hMarker = [
  {
    position: [280, 610],
    content: `
      <div class="infodiv">
        <h2 class="infotext">
        Drunkningsolyckan 1775
        <img src="img/audio.svg" class="audioimg" onclick="audioCases('drunkning')">
        </h2>
        <div class="background">
        </div>
        <div class="containerlike">
        <img src="img/stencomp.jpg" alt="Drunkningsolyckan 1775" class="infoimg">
          <div class="heartdiv">
        <p>Vill du tipsa andra om denna platsen? Ge den en like!</p>
        <button id="drownbtn" class="counterbtn"></button>
        <p id="drowncounter" class="counter">0</p><p>andra personer gillar denna platsen</p>
        </div>
      </div>
      </div>
    `
  },
  {
    position: [195, 400],
    content: `
      <div class="infodiv">
        <h2 class="infotext">
        Fontänen
        <img src="img/audio.svg" class="audioimg" onclick="audioCases('fontän')">
        </h2>
        <div class="background">
        </div>
        <div class="containerlike">
        <img src="img/fontain.jpg" alt="Fontän" class="infoimg">
          <div class="heartdiv">
        <p>Vill du tipsa andra om denna platsen? Ge den en like!</p>
        <button id="fontainbtn" class="counterbtn"></button>
        <p id="fontaincounter" class="counter">0</p><p>andra personer gillar denna platsen</p>
        </div>
      </div>
      </div>
    `
  },
  {
    position: [380, 410],
    content: `
      <div class="infodiv">
        <h2 class="infotext">
        Köksträdgården
        <img src="img/audio.svg" class="audioimg" onclick="audioCases('köksträdgård')">
        </h2>
        <div class="background">
        </div>
        <div class="containerlike">
        <img src="img/veggarden.jpg" alt="Köksträdgården" class="infoimg">
          <div class="heartdiv">
        <p>Vill du tipsa andra om denna platsen? Ge den en like!</p>
        <button id="gardenbtn" class="counterbtn"></button>
        <p id="gardencounter" class="counter">0</p><p>andra personer gillar denna platsen</p>
        </div>
      </div>
      </div>
    `
  },
  {
    position: [365, 1127],
    content: `
      <div class="infodiv">
        <h2 class="infotext">
        Minnesmärke
        <img src="img/audio.svg" class="audioimg" onclick="audioCases('minnesmärke')" >
        </h2>
        <div class="background">
        </div>
        <div class="containerlike">
        <img src="img/sten.jpg" alt="Minnesmärke" class="infoimg">
          <div class="heartdiv">
        <p>Vill du tipsa andra om denna platsen? Ge den en like!</p>
        <button id="stonebtn" class="counterbtn"></button>
        <p id="stonecounter" class="counter">0</p><p>andra personer gillar denna platsen</p>
        </div>
      </div>
      </div>
    `
  },
  {
    position: [225, 1043],
    content: `
      <div class="infodiv">
        <h2 class="infotext">
        Kryddgården
        <img src="img/audio.svg" class="audioimg" onclick="audioCases('kryddgården')" >
        </h2>
        <div class="background">
        </div>
        <div class="containerlike">
        <img src="img/garden.jpg" alt="Kryddgården" class="infoimg">
          <div class="heartdiv">
        <p>Vill du tipsa andra om denna platsen? Ge den en like!</p>
        <button id="kryddbtn" class="counterbtn"></button>
        <p id="spicecounter" class="counter">0</p><p>andra personer gillar denna platsen</p>
        </div>
        </div>
      </div>
    `
  },
  {
    position: [245, 1175],
    content: `
      <div class="infodiv">
        <h2 class="infotext">
        Ameliden
        <img src="img/audio.svg" class="audioimg" onclick="audioCases('almeliden')">
        </h2>
        <div class="background">
        </div>
        <div class="containerlike">
        <img src="img/almeliden.jpg" alt="Ameliden" class="infoimg">
          <div class="heartdiv">
        <p>Vill du tipsa andra om denna platsen? Ge den en like!</p>
        <button id="amelidbtn" class="counterbtn"></button>
        <p id="almecounter" class="counter">0</p><p>andra personer gillar denna platsen</p>
        </div>
        </div>
      </div>
    `
  },
  {
    position: [155, 1185],
    content: `
      <div class="infodiv">
        <h2 class="infotext">
        Djurkyrkogården
        <img src="img/audio.svg" class="audioimg" onclick="audioCases('kyrkogård')">
        </h2>
        <div class="background">
        </div>
        <div class="containerlike">
        <img src="img/grave.jpg" alt="Djurkyrkogården" class="infoimg">
          <div class="heartdiv">
        <p>Vill du tipsa andra om denna platsen? Ge den en like!</p>
        <button id="gravebtn"class="counterbtn" ></button>
        <p id="gravecounter" class="counter">0</p><p>andra personer gillar denna platsen</p>
        </div>
        </div>
      </div>
    `
  },
  {
    position: [145, 770],
    content: `
      <div class="infodiv">
        <h2 class="infotext">
        Humlegården
        <img src="img/audio.svg" class="audioimg" onclick="audioCases('humle')">
        </h2>
        <div class="background">
        </div>
        <div class="containerlike">
        <img src="img/humle.jpg" alt="Humlegården" class="infoimg">
        <div class="heartdiv">
        <p>Vill du tipsa andra om denna platsen? Ge den en like!</p>
        <button id="humlebtn" class="counterbtn"></button>
        <p id="humlecounter" class="counter">0</p><p>andra personer gillar denna platsen</p>
        </div>
        </div>
      </div>
    `
  },
];

//Ljud 
let minnesaudio = new Audio('mp3s/Minne.mp3');
let humleaudio = new Audio('mp3s/Humle.mp3');
let kyrkogårdaudio = new Audio('mp3s/Kyrkogård.mp3');
let kryddgårdaudio = new Audio('mp3s/Kryddgården.mp3');
let köksträdgårdaudio = new Audio('mp3s/köksträdgård.mp3');
let fontänaudio = new Audio('mp3s/fontan.mp3');
let drunkningaudio = new Audio('mp3s/drunkning.mp3');
let almelidenaudio = new Audio('mp3s/Almeliden.mp3');


let factMarkerGroup = L.layerGroup();
let picMarkerGroup = L.layerGroup();
let starMarkerGroup = L.layerGroup();
let cafeMarkerGroup = L.layerGroup();

function init() {
  createMap();
  createHMarkers();
  addrestmarker();
  addstarmarker();
  addheremarker();


  let expandButton = document.getElementById("expandButton");
  let expandableDiv = document.getElementById("expandableDiv");

  expandButton.addEventListener("click", function () {
    expandableDiv.style.display = expandableDiv.style.display === "block" ? "none" : "block";
    expandButton.innerHTML = expandableDiv.style.display === "block" ? 'Inställningar <img src="img/arrow.svg" alt="pil" id="arrow" style="transform:rotateX(180deg)">' : 'Inställningar <img src="img/arrow.svg" alt="pil" id="arrow">';
  });

  document.addEventListener("click", function (event) {
    let target = event.target;
    if (!expandableDiv.contains(target) && target !== expandButton) {
      expandableDiv.style.display = "none";
      expandButton.innerHTML = 'Inställningar <img src="img/arrow.svg" alt="pil" id="arrow">';
    }
  });


  let checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = true;
    let pinType = checkbox.parentElement.previousElementSibling.id;
    togglePin(pinType, checkbox);
  });


  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("counterbtn")) {
      buttoncases(event);
    }
  });


}
window.addEventListener("load", init);


function createMap() {
  // Kartan
  map = L.map('map', {
    crs: L.CRS.Simple,
    minZoom: 0,
    maxZoom: 1,
    zoomSnap: 0.1,
    maxBoundsViscosity: 1.0
  });

  let imageURL = "img/pngkarta.png";
  let imageBounds = [[0, 0], [482, 1320]];

  L.imageOverlay(imageURL, imageBounds).addTo(map);

  map.fitBounds(imageBounds);
  map.setMaxBounds(imageBounds);
  map.setView([500, 500], 0);

  let picmarker = L.icon({
    iconUrl: "img/bildPin.svg",
    iconSize: [40, 40],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
  });

  picMarkers.forEach(function (markerData) {
    let marker = L.marker(markerData.position, { icon: picmarker });
    marker.on('click', function () {
      openModal(markerData.imageUrl);
    });
    picMarkerGroup.addLayer(marker);
  });

  picMarkerGroup.addTo(map);

}

function openModal(imageUrl = null, htmlContent = null) {
  let modal = document.getElementById("myModal");
  let modalImg = document.getElementById("modalImage");
  let modalHtmlContent = document.getElementById("modalContent");

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
    modalHtmlContent.innerHTML = htmlContent;
    modalHtmlContent.style.display = "block";
  }

  let closeBtn = document.getElementsByClassName("close")[0];
  closeBtn.onclick = function () {
    modal.style.display = "none";
    if (minnesaudio) {
      minnesaudio.pause();
    }
    if (kyrkogårdaudio) {
      kyrkogårdaudio.pause();
    }
    if (kryddgårdaudio) {
      kryddgårdaudio.pause();
    }
    if (köksträdgårdaudio) {
      köksträdgårdaudio.pause();
    }
    if (humleaudio) {
      humleaudio.pause();
    }
    if (fontänaudio) {
      fontänaudio.pause();
    }
    if (drunkningaudio) {
      drunkningaudio.pause();
    }
    if (almelidenaudio) {
      almelidenaudio.pause();
    }
  }

  //Stänger vid klick utanför 
  modal.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      if (minnesaudio) {
        minnesaudio.pause();
      }
      if (kyrkogårdaudio) {
        kyrkogårdaudio.pause();
      }
      if (kryddgårdaudio) {
        kryddgårdaudio.pause();
      }
      if (köksträdgårdaudio) {
        köksträdgårdaudio.pause();
      }
      if (humleaudio) {
        humleaudio.pause();
      }
      if (fontänaudio) {
        fontänaudio.pause();
      }
      if (drunkningaudio) {
        drunkningaudio.pause();
      }
      if (almelidenaudio) {
        almelidenaudio.pause();
      }
    }
  }
  loadLocalStorage();
}





// Markers
function createHMarkers() {

  let factIcon = L.icon({
    iconUrl: "img/faktapin.svg",
    iconSize: [40, 40],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
  });
  hMarker.forEach(function (markerData) {
    var marker = L.marker(markerData.position, { icon: factIcon });

    marker.on('click', function () {
      openModal(null, markerData.content);
    });

    factMarkerGroup.addLayer(marker);
  });

  factMarkerGroup.addTo(map);
}

// RÖR INTE DENNA DEN FUNKAR NU 
function addrestmarker() {

  let position = [28, 462];

  let restIcon = L.icon({
    iconUrl: "img/restpin.svg",
    iconSize: [40, 40],
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
  let marker = L.marker(position, { icon: restIcon }).bindPopup(popupContent);
  cafeMarkerGroup.addLayer(marker);
  cafeMarkerGroup.addTo(map);
}
// RÖR ABSOLUT INTE DENNA HELLER
function addstarmarker() {

  let position = [200, 530];

  let starIcon = L.icon({
    iconUrl: "img/starpin.svg",
    iconSize: [40, 40],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
  });

  let popupContent = `
    <div>
      <h3>Är du mer intresserad av Torups historia?</h3>
      <a href="fact.html" class="popupbtn">Tryck här!</a>
    </div>
  `;

  let marker = L.marker(position, { icon: starIcon }).bindPopup(popupContent);
  starMarkerGroup.addLayer(marker);
  starMarkerGroup.addTo(map);
}

function addheremarker() {

  let position = [170, 580];

  let restIcon = L.icon({
    iconUrl: "img/here.svg",
    iconSize: [35, 35],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50]
  });

  let popupContent = `
    <div>
      <h2>Du är här</h2>
      <p>Torups slott har öppet varje dag kl.08-20</p>
    </div>
  `;

  let marker = L.marker(position, { icon: restIcon }).addTo(map);
  marker.bindPopup(popupContent);

}



// Togglecases och pin som tas bort 
function togglePin(pinType, checkbox) {
  switch (pinType) {
    case 'faktaPin':
      toggleFactPins(checkbox);
      break;
    case 'bilderPin':
      togglePicPins(checkbox);
      break;
    case 'historiaPin':
      toggleHistoryPins(checkbox);
      break;
    case 'cafePin':
      toggleCafePins(checkbox);
      break;
  }
}


function toggleFactPins(checkbox) {
  if (checkbox.checked) {
    map.addLayer(factMarkerGroup);
  } else {
    map.removeLayer(factMarkerGroup);
  }
}

function togglePicPins(checkbox) {
  if (checkbox.checked) {
    map.addLayer(picMarkerGroup);
  } else {
    map.removeLayer(picMarkerGroup);
  }
}

function toggleHistoryPins(checkbox) {
  if (checkbox.checked) {
    map.addLayer(starMarkerGroup);
  } else {
    map.removeLayer(starMarkerGroup);
  }
}

function toggleCafePins(checkbox) {
  if (checkbox.checked) {
    map.addLayer(cafeMarkerGroup);
  } else {
    map.removeLayer(cafeMarkerGroup);
  }
}






//Knappar och localstorage
function buttoncases(event) {
  let button = event.target;
  button.disabled = true;
  let counter = button.nextElementSibling;
  let count = parseInt(counter.textContent) || 0;

  count += 1;
  counter.textContent = count;

  localStorage.setItem(button.id, count);

}

function loadLocalStorage() {
  let buttons = document.querySelectorAll(".counterbtn");
  buttons.forEach(button => {
    let counter = button.nextElementSibling;

    let storedCount = localStorage.getItem(button.id);

    if (storedCount) {
      counter.textContent = storedCount;
    } else {
      counter.textContent = "0";
    }
  });
}


//Ljud cases
function audioCases(audios) {
  switch (audios) {
    case 'minnesmärke':
      if (minnesaudio.paused) {
        minnesaudio.currentTime = 0;
        minnesaudio.play();
      }
      break;
    case 'humle':
      if (humleaudio.paused) {
        humleaudio.currentTime = 0;
        humleaudio.play();
      }
      break;
    case 'fontän':
      if (fontänaudio.paused) {
        fontänaudio.currentTime = 0;
        console.log(fontänaudio);
        fontänaudio.play();
      }
      break;
    case 'drunkning':
      if (drunkningaudio.paused) {
        drunkningaudio.currentTime = 0;
        drunkningaudio.play();
      }
      break;
    case 'köksträdgård':
      if (köksträdgårdaudio.paused) {
        köksträdgårdaudio.currentTime = 0;
        köksträdgårdaudio.play();
      }
      break;
    case 'kryddgården':
      if (kryddgårdaudio.paused) {
        kryddgårdaudio.currentTime = 0;
        kryddgårdaudio.play();
      }
      break;
    case 'kyrkogård':
      if (kyrkogårdaudio.paused) {
        kyrkogårdaudio.currentTime = 0;
        kyrkogårdaudio.play();
      }
      break;
    case 'almeliden':
      if (almelidenaudio.paused) {
        almelidenaudio.currentTime = 0;
        almelidenaudio.play();
      }
      break;
  }
}









