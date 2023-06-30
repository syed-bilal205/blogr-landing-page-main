const hamburgerEl = document.querySelector(".hamburger-btn");
const navlist = document.querySelector(".navlist");

const options = [
  {
    parentSelector: ".product",
    optionSelector: ".product-option",
    rotateSelector: ".arrow1",
  },
  {
    parentSelector: ".company",
    optionSelector: ".company-option",
    rotateSelector: ".arrow2",
  },
  {
    parentSelector: ".connect",
    optionSelector: ".connect-option",
    rotateSelector: ".arrow3",
  },
];

function handleOptionClick(optionEl, rotateEl) {
  const isOpen = optionEl.classList.contains("visible");

  // Close other options
  options.forEach((option) => {
    const otherOptionEl = document.querySelector(option.optionSelector);
    const otherRotateEl = document.querySelector(option.rotateSelector);

    if (otherOptionEl !== optionEl) {
      otherOptionEl.classList.remove("visible");
      otherRotateEl.classList.remove("rotate");
    }
  });

  // Toggle the clicked option
  rotateEl.classList.toggle("rotate", !isOpen);
  optionEl.classList.toggle("visible", !isOpen);
}

options.forEach((option) => {
  const parentEl = document.querySelector(option.parentSelector);
  const optionEl = document.querySelector(option.optionSelector);
  const rotateEl = document.querySelector(option.rotateSelector);

  parentEl.addEventListener("click", () => {
    handleOptionClick(optionEl, rotateEl);
  });
});

hamburgerEl.addEventListener("click", () => {
  hamburgerEl.classList.toggle("active");
  navlist.classList.toggle("alive");
});

const navbarEl = document.querySelector("nav");
const bottomContainerEl = document.querySelector(".future-container");

window.addEventListener("scroll", () => {
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 260
  ) {
    navbarEl.classList.add("toggled");
  } else {
    navbarEl.classList.remove("toggled");
  }
});
