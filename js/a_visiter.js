const cardLeft1 = document.querySelector(".card_left1");
const cardRight2 = document.querySelector(".card_right2");
const cardLeft3 = document.querySelector(".card_left3");
const cardRight4 = document.querySelector(".card_right4");
const cardLeft5 = document.querySelector(".card_left5");
const cardRight6 = document.querySelector(".card_right6");
const cardLeft7 = document.querySelector(".card_left7");
const cardRight8 = document.querySelector(".card_right8");
const cardLeft9 = document.querySelector(".card_left9");
const cardRight10 = document.querySelector(".card_right10");

const blockContentLeft1 = document.querySelector(".block_content_show_left1");
const blockContentRight2 = document.querySelector(".block_content_show_right2");
const blockContentLeft3 = document.querySelector(".block_content_show_left3");
const blockContentRight4 = document.querySelector(".block_content_show_right4");
const blockContentLeft5 = document.querySelector(".block_content_show_left5");
const blockContentRight6 = document.querySelector(".block_content_show_right6");
const blockContentLeft7 = document.querySelector(".block_content_show_left7");
const blockContentRight8 = document.querySelector(".block_content_show_right8");
const blockContentLeft9 = document.querySelector(".block_content_show_left9");
const blockContentRight10 = document.querySelector(
  ".block_content_show_right10"
);

const titleLeft1 = document.querySelector(".block_content_show_left1 h2");
const titleRight2 = document.querySelector(".block_content_show_right2 h2");
const titleLeft3 = document.querySelector(".block_content_show_left3 h2");
const titleRight4 = document.querySelector(".block_content_show_right4 h2");
const titleLeft5 = document.querySelector(".block_content_show_left5 h2");
const titleRight6 = document.querySelector(".block_content_show_right6 h2");
const titleLeft7 = document.querySelector(".block_content_show_left7 h2");
const titleRight8 = document.querySelector(".block_content_show_right8 h2");
const titleLeft9 = document.querySelector(".block_content_show_left9 h2");
const titleRight10 = document.querySelector(".block_content_show_right10 h2");

const separationLeft1 = document.querySelector(".block_content_show_left1 hr");
const separationRight2 = document.querySelector(
  ".block_content_show_right2 hr"
);
const separationLeft3 = document.querySelector(".block_content_show_left3 hr");
const separationRight4 = document.querySelector(
  ".block_content_show_right4 hr"
);
const separationLeft5 = document.querySelector(".block_content_show_left5 hr");
const separationRight6 = document.querySelector(
  ".block_content_show_right6 hr"
);
const separationLeft7 = document.querySelector(".block_content_show_left7 hr");
const separationRight8 = document.querySelector(
  ".block_content_show_right8 hr"
);
const separationLeft9 = document.querySelector(".block_content_show_left9 hr");
const separationRight10 = document.querySelector(
  ".block_content_show_right10 hr"
);

const allTxtLeft1 = document.querySelectorAll(".block_content_show_left1 p");
const allTxtRight2 = document.querySelectorAll(".block_content_show_right2 p");
const allTxtLeft3 = document.querySelectorAll(".block_content_show_left3 p");
const allTxtRight4 = document.querySelectorAll(".block_content_show_right4 p");
const allTxtLeft5 = document.querySelectorAll(".block_content_show_left5 p");
const allTxtRight6 = document.querySelectorAll(".block_content_show_right6 p");
const allTxtLeft7 = document.querySelectorAll(".block_content_show_left7 p");
const allTxtRight8 = document.querySelectorAll(".block_content_show_right8 p");
const allTxtLeft9 = document.querySelectorAll(".block_content_show_left9 p");
const allTxtRight10 = document.querySelectorAll(
  ".block_content_show_right10 p"
);

const imgZoom1 = document.querySelector(".img_zoom1");
const imgZoom2 = document.querySelector(".img_zoom2");
const imgZoom3 = document.querySelector(".img_zoom3");
const imgZoom4 = document.querySelector(".img_zoom4");
const imgZoom5 = document.querySelector(".img_zoom5");
const imgZoom6 = document.querySelector(".img_zoom6");
const imgZoom7 = document.querySelector(".img_zoom7");
const imgZoom8 = document.querySelector(".img_zoom8");
const imgZoom9 = document.querySelector(".img_zoom9");
const imgZoom10 = document.querySelector(".img_zoom10");

/* IMAGE 1 */

const TLANIM1 = gsap.timeline({ paused: true });

TLANIM1.fromTo(
  imgZoom1,
  { scale: 1 },
  {
    scale: 2,
    y: 100,
    x: 300,
    duration: 0.4,
    ease: ExpoScaleEase.config(1, 2, "power2.inOut"),
  }
)
  .to(blockContentLeft1, { left: 280, duration: 0.5 }, 0.5)
  .from(titleLeft1, { opacity: 0, duration: 0.5 }, "-=0.1")
  .from(separationLeft1, { opacity: 0, duration: 1 }, "-=0.2")
  .from(allTxtLeft1, { opacity: 0, duration: 0.3, stagger: 0.2 });

cardLeft1.addEventListener("mouseenter", () => {
  TLANIM1.play();
});

cardLeft1.addEventListener("mouseleave", () => {
  TLANIM1.reverse();
});

/* IMAGE 2 */

const TLANIM2 = gsap.timeline({ paused: true });

TLANIM2.fromTo(
  imgZoom2,
  { scale: 1 },
  {
    scale: 1.5,
    y: 50,
    x: -150,
    duration: 0.4,
    ease: ExpoScaleEase.config(1, 1.5, "power2.inOut"),
  }
)
  .to(blockContentRight2, { right: 280, duration: 0.5 }, 0.5)
  .from(titleRight2, { opacity: 0, duration: 0.5 }, "-=0.1")
  .from(separationRight2, { opacity: 0, duration: 1 }, "-=0.2")
  .from(allTxtRight2, { opacity: 0, duration: 0.3, stagger: 0.2 });

cardRight2.addEventListener("mouseenter", () => {
  TLANIM2.play();
});

cardRight2.addEventListener("mouseleave", () => {
  TLANIM2.reverse();
});

/* IMAGE 3 */

const TLANIM3 = gsap.timeline({ paused: true });

TLANIM3.fromTo(
  imgZoom3,
  { scale: 1 },
  {
    scale: 2,
    y: -50,
    x: 0,
    duration: 0.4,
    ease: ExpoScaleEase.config(1, 2, "power2.inOut"),
  }
)
  .to(blockContentLeft3, { left: 280, duration: 0.5 }, 0.5)
  .from(titleLeft3, { opacity: 0, duration: 0.5 }, "-=0.1")
  .from(separationLeft3, { opacity: 0, duration: 1 }, "-=0.2")
  .from(allTxtLeft3, { opacity: 0, duration: 0.3, stagger: 0.2 });

cardLeft3.addEventListener("mouseenter", () => {
  TLANIM3.play();
});

cardLeft3.addEventListener("mouseleave", () => {
  TLANIM3.reverse();
});

/* IMAGE 4 */

const TLANIM4 = gsap.timeline({ paused: true });

TLANIM4.fromTo(
  imgZoom4,
  { scale: 1 },
  {
    scale: 2,
    y: 100,
    x: -100,
    duration: 0.4,
    ease: ExpoScaleEase.config(1, 2, "power2.inOut"),
  }
)
  .to(blockContentRight4, { right: 280, duration: 0.5 }, 0.5)
  .from(titleRight4, { opacity: 0, duration: 0.5 }, "-=0.1")
  .from(separationRight4, { opacity: 0, duration: 1 }, "-=0.2")
  .from(allTxtRight4, { opacity: 0, duration: 0.3, stagger: 0.2 });

cardRight4.addEventListener("mouseenter", () => {
  TLANIM4.play();
});

cardRight4.addEventListener("mouseleave", () => {
  TLANIM4.reverse();
});

/* IMAGE 5 */

const TLANIM5 = gsap.timeline({ paused: true });

TLANIM5.fromTo(
  imgZoom5,
  { scale: 1 },
  {
    scale: 1.5,
    y: 0,
    x: 150,
    duration: 0.4,
    ease: ExpoScaleEase.config(1, 1.5, "power2.inOut"),
  }
)
  .to(blockContentLeft5, { left: 280, duration: 0.5 }, 0.5)
  .from(titleLeft5, { opacity: 0, duration: 0.5 }, "-=0.1")
  .from(separationLeft5, { opacity: 0, duration: 1 }, "-=0.2")
  .from(allTxtLeft5, { opacity: 0, duration: 0.3, stagger: 0.2 });

cardLeft5.addEventListener("mouseenter", () => {
  TLANIM5.play();
});

cardLeft5.addEventListener("mouseleave", () => {
  TLANIM5.reverse();
});

/* IMAGE 6 */

const TLANIM6 = gsap.timeline({ paused: true });

TLANIM6.fromTo(
  imgZoom6,
  { scale: 1 },
  {
    scale: 2,
    y: 100,
    x: -50,
    duration: 0.4,
    ease: ExpoScaleEase.config(1, 2, "power2.inOut"),
  }
)
  .to(blockContentRight6, { right: 280, duration: 0.5 }, 0.5)
  .from(titleRight6, { opacity: 0, duration: 0.5 }, "-=0.1")
  .from(separationRight6, { opacity: 0, duration: 1 }, "-=0.2")
  .from(allTxtRight6, { opacity: 0, duration: 0.3, stagger: 0.2 });

cardRight6.addEventListener("mouseenter", () => {
  TLANIM6.play();
});

cardRight6.addEventListener("mouseleave", () => {
  TLANIM6.reverse();
});

/* IMAGE 7 */

const TLANIM7 = gsap.timeline({ paused: true });

TLANIM7.fromTo(
  imgZoom7,
  { scale: 1 },
  {
    scale: 2,
    y: 200,
    x: 450,
    duration: 0.4,
    ease: ExpoScaleEase.config(1, 2, "power2.inOut"),
  }
)
  .to(blockContentLeft7, { left: 280, duration: 0.5 }, 0.5)
  .from(titleLeft7, { opacity: 0, duration: 0.5 }, "-=0.1")
  .from(separationLeft7, { opacity: 0, duration: 1 }, "-=0.2")
  .from(allTxtLeft7, { opacity: 0, duration: 0.3, stagger: 0.2 });

cardLeft7.addEventListener("mouseenter", () => {
  TLANIM7.play();
});

cardLeft7.addEventListener("mouseleave", () => {
  TLANIM7.reverse();
});

/* IMAGE 8 */

const TLANIM8 = gsap.timeline({ paused: true });

TLANIM8.fromTo(
  imgZoom8,
  { scale: 1 },
  {
    scale: 2,
    y: -150,
    x: -100,
    duration: 0.4,
    ease: ExpoScaleEase.config(1, 2, "power2.inOut"),
  }
)
  .to(blockContentRight8, { right: 280, duration: 0.5 }, 0.5)
  .from(titleRight8, { opacity: 0, duration: 0.5 }, "-=0.1")
  .from(separationRight8, { opacity: 0, duration: 1 }, "-=0.2")
  .from(allTxtRight8, { opacity: 0, duration: 0.3, stagger: 0.2 });

cardRight8.addEventListener("mouseenter", () => {
  TLANIM8.play();
});

cardRight8.addEventListener("mouseleave", () => {
  TLANIM8.reverse();
});

/* IMAGE 9 */

const TLANIM9 = gsap.timeline({ paused: true });

TLANIM9.fromTo(
  imgZoom9,
  { scale: 1 },
  {
    scale: 2,
    y: 0,
    x: 150,
    duration: 0.4,
    ease: ExpoScaleEase.config(1, 2, "power2.inOut"),
  }
)
  .to(blockContentLeft9, { left: 280, duration: 0.5 }, 0.5)
  .from(titleLeft9, { opacity: 0, duration: 0.5 }, "-=0.1")
  .from(separationLeft9, { opacity: 0, duration: 1 }, "-=0.2")
  .from(allTxtLeft9, { opacity: 0, duration: 0.3, stagger: 0.2 });

cardLeft9.addEventListener("mouseenter", () => {
  TLANIM9.play();
});

cardLeft9.addEventListener("mouseleave", () => {
  TLANIM9.reverse();
});

/* IMAGE 10 */

const TLANIM10 = gsap.timeline({ paused: true });

TLANIM10.fromTo(
  imgZoom10,
  { scale: 1 },
  {
    scale: 2,
    y: 0,
    x: -150,
    duration: 0.4,
    ease: ExpoScaleEase.config(1, 2, "power2.inOut"),
  }
)
  .to(blockContentRight10, { right: 280, duration: 0.5 }, 0.5)
  .from(titleRight10, { opacity: 0, duration: 0.5 }, "-=0.1")
  .from(separationRight10, { opacity: 0, duration: 1 }, "-=0.2")
  .from(allTxtRight10, { opacity: 0, duration: 0.3, stagger: 0.2 });

cardRight10.addEventListener("mouseenter", () => {
  TLANIM10.play();
});

cardRight10.addEventListener("mouseleave", () => {
  TLANIM10.reverse();
});
