let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

AOS.init();
let dptFrance = document.getElementById("FR-BRE");
let franceMap = document.getElementById("mapFrance");
let bretagneMap = document.getElementById("mapBretagne");

dptFrance.addEventListener("mouseover", () => {
  franceMap.style.display = "none";
  bretagneMap.style.display = "block";
});

let dptFinistere = document.getElementById("FR-29-1");
let dptArmor = document.getElementById("FR-22-1");
let dptMorbihan = document.getElementById("FR-56-1");
let textFinistere = document.getElementById("titreFinistere");
let textArmor = document.getElementById("titrArmor");
let textMorbihan = document.getElementById("titreMorbihan");

dptFinistere.addEventListener("mouseover", () => {
  textFinistere.style.display = "inline";
});

dptFinistere.addEventListener("mouseleave", () => {
  textFinistere.style.display = "none";
});

dptArmor.addEventListener("mouseover", () => {
  textArmor.style.display = "inline";
});

dptArmor.addEventListener("mouseleave", () => {
  textArmor.style.display = "none";
});
dptMorbihan.addEventListener("mouseover", () => {
  textMorbihan.style.display = "inline";
});

dptMorbihan.addEventListener("mouseleave", () => {
  textMorbihan.style.display = "none";
});
