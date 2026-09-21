//? Scroll Button
//? Show the scroll button when the user scrolls down
const scrollBtn = document.querySelector(".scrollBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.opacity = "1";
  } else {
    scrollBtn.style.opacity = "0";
  }
});

//? Scroll smoothly to the top when the button is clicked
scrollBtn.addEventListener("click", (e) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

//? Change Background
//? Select slider controls and background elements
const BtnLeft = document.querySelector(".fa-angle-left");
const BtnRight = document.querySelector(".fa-angle-right");
const LodingImge = document.querySelector(".landing");
const bullets = document.querySelectorAll(".bullets li");

//? Store the index of the currently displayed image
let crruntImge = 1;

//? Store all background images used in the slider
const Imge = [
  "../img/—Pngtree—owl perched on tree branch_16718124.webp",
  "../img/landing.webp",
  "../img/—Pngtree—an owl perched on a_16348151.webp",
];

//? Move to the previous background image
BtnLeft.addEventListener("click", () => {
  crruntImge--;

  //? Return to the last image when reaching the beginning
  if (crruntImge < 0) {
    crruntImge = Imge.length - 1;
  }

  //? Update the landing background image
  LodingImge.style.backgroundImage = `url("${Imge[crruntImge]}")`;

  //? Update the active bullet
  updateBullets();
});

//? Move to the next background image
BtnRight.addEventListener("click", () => {
  crruntImge++;

  //? Return to the first image when reaching the end
  if (crruntImge >= Imge.length) {
    crruntImge = 0;
  }

  //? Update the landing background image
  LodingImge.style.backgroundImage = `url("${Imge[crruntImge]}")`;

  //? Update the active bullet
  updateBullets();
});

//? Update the active bullet according to the current image
function updateBullets() {
  bullets.forEach(function (e, index) {
    e.classList.remove("active");

    //? Activate the bullet that matches the current image
    if (index === crruntImge) {
      e.classList.add("active");
    }
  });
}

//? Dynamic Statistics Counter
//? Select statistics section and counter elements
const StatisticsSection = document.querySelector(".Statistics-section");

const statisticsHiding = document.querySelectorAll(
  ".Statistics-content .box h2",
);

const OurSkills = document.querySelector(".OurSkills");

const progress = document.querySelectorAll(".brog .count span");

const counts = document.querySelectorAll(".brog .count ");

let statisticsSatus = false;
let progressSatus = false;

//? Start statistics and skills animations when reaching their sections
window.addEventListener("scroll", () => {
  //? Start the statistics counter when the section becomes visible
  if (window.scrollY >= StatisticsSection.offsetTop - 500 && !statisticsSatus) {
    statisticsSatus = true;

    statisticsHiding.forEach((h) => {
      let counter = 0;

      //? Increase the counter until it reaches the target value
      let inter = setInterval(() => {
        if (counter < Number(h.dataset.count)) {
          counter++;
          h.textContent = counter;
        } else {
          clearInterval(inter);
        }
      }, 40);
    });
  }

  //? Start the skills progress animation when the section becomes visible
  if (window.scrollY >= OurSkills.offsetTop - 800 && !progressSatus) {
    progressSatus = true;

    progress.forEach((s, i) => {
      let counter = 0;

      //? Increase the progress percentage gradually
      let inter = setInterval(() => {
        if (counter < Number(s.dataset.width)) {
          counter++;

          //? Update the progress bar width
          s.style.width = counter + "%";

          //? Move the progress percentage indicator
          counts[i].style.setProperty("--progress", `${counter}%`);

          //? Update the displayed percentage value
          counts[i].dataset.progress = counter;
        } else {
          clearInterval(inter);
        }
      }, 15);
    });
  }
});

//? Filter Portfolio Images
//? Select filter buttons and portfolio images
const listbar = document.querySelectorAll(".listbar ul li");
const imgeBox = document.querySelectorAll(".box-img");

listbar.forEach((catg) => {
  //? Filter images when a category is selected
  catg.addEventListener("click", () => {
    //? Remove the active class from all filter buttons
    listbar.forEach((e) => {
      e.classList.remove("active");
    });

    //? Add the active class to the selected category
    catg.classList.add("active");

    //? Show matching images and hide the others
    imgeBox.forEach((box) => {
      if (box.classList.contains(catg.dataset.category)) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });
  });
});
