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
  $("#FR-BRE").hover(function () {
    $("#mapFrance").fadeOut(500);
    $("#mapBretagne").delay(500).fadeIn(500);
  });
});

$(function () {
  $(".btnBackFranceMap").click(function () {
    $("#mapBretagne").fadeOut(500);
    $("#mapFrance").delay(500).fadeIn(500);
  });
});

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
