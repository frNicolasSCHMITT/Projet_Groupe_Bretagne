let counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

AOS.init();
$(function () {
  $(".map").hover(function () {
    $("#mapFrance").fadeOut(1000);
    $("#mapBretagne").fadeIn(2000);
  });
});

$(function () {
  $(".btnBackFranceMap").click(function () {
    $("#mapBretagne").fadeOut();
    $("#mapFrance").fadeIn(2000);
  });
});
/* map change France to Bretagne */

// let dptFrance = document.getElementById("FR-BRE");
// let franceMap = document.getElementById("mapFrance");
// let bretagneMap = document.getElementById("mapBretagne");

// dptFrance.addEventListener("mouseover", () => {
//   franceMap.style.display = "none";
//   bretagneMap.style.display = "block";
// });

// /* name dpt with mouse */

let dptFinistere = document.getElementById("FR-29-1");
let dptArmor = document.getElementById("FR-22-1");
let dptMorbihan = document.getElementById("FR-56-1");
let textFinistere = document.getElementById("titreFinistere");
let textArmor = document.getElementById("titrArmor");
let textMorbihan = document.getElementById("titreMorbihan");

let f = function (a, b) {
  a.addEventListener("mouseover", () => {
    b.style.display = "inline";
  });
  a.addEventListener("mouseleave", () => {
    b.style.display = "none";
  });
};
f(dptFinistere, textFinistere);
f(dptArmor, textArmor);
f(dptMorbihan, textMorbihan);
