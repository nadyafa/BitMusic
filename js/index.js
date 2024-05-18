// Side Menu
let sideMenu = document.getElementById("side-menu");
let container = document.getElementsByClassName("container");

document.getElementById("openBtn").onclick = openSideMenu;
document.getElementById("closeBtn").onclick = closeSideMenu;

function openSideMenu() {
  if (window.innerWidth >= 992) {
    sideMenu.style.left = "0";
    sideMenu.style.width = "25vw";
    for (let i = 0; i < container.length; i++) {
      container[i].style.width = "calc(100% - 25vw)";
      container[i].style.left = "calc(25vw)";
    }
  } else {
    sideMenu.style.left = "0";
    sideMenu.style.width = "100%";
    for (let i = 0; i < container.length; i++) {
      container[i].style.width = "100%";
    }
  }
}

function closeSideMenu() {
  if (window.innerWidth >= 992) {
    sideMenu.style.left = "-100%";
    sideMenu.style.width = "";
    for (let i = 0; i < container.length; i++) {
      container[i].style.width = "100%";
      container[i].style.left = "0";
    }
  } else {
    sideMenu.style.left = "-100%";
    sideMenu.style.width = "";
    for (let i = 0; i < container.length; i++) {
      container[i].style.width = "100%";
    }
  }
}

// Cards slider
let contentSlider = document.querySelectorAll(".content-slider");

contentSlider.forEach((contentSlider) => {
  let cardsWrapper = contentSlider.querySelector(".cards-wrapper");

  let pressed = false;
  let startX;
  let x;

  contentSlider.addEventListener("mousedown", () => {
    contentSlider.addEventListener("mousedown", (e) => {
      pressed = true;
      startX = e.offsetX - cardsWrapper.offsetLeft;
      contentSlider.style.cursor = "grabbing";
    });
  });

  contentSlider.addEventListener("mouseenter", () => {
    contentSlider.style.cursor = "grab";
  });

  contentSlider.addEventListener("mouseup", () => {
    contentSlider.style.cursor = "grab";
    pressed = false;
  });

  contentSlider.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    cardsWrapper.style.left = `${x - startX}px`;
    checkBoundary();
  });

  const checkBoundary = () => {
    let outer = contentSlider.getBoundingClientRect();
    let inner = cardsWrapper.getBoundingClientRect();

    if (parseInt(cardsWrapper.style.left) > 0) {
      cardsWrapper.style.left = "0px";
    }

    if (inner.right < outer.right) {
      cardsWrapper.style.left = `-${inner.width - outer.width}px`;
    }
  };
});
