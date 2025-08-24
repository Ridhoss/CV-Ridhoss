import { animate, inView } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm"

// sidebar action
const sidebar = document.getElementById('sidebar');
const btnOpen = document.getElementById('btn-open-sidebar');
const btnClose = document.getElementById('btn-close-sidebar');

sidebar.style.transform = "translateX(100%)"
sidebar.style.opacity = 0

btnOpen.addEventListener("click", () => {
  animate(btnOpen, { rotate: 360 })
  animate(btnClose, { rotate: 360 })
  animate(sidebar, { x: ["100%", 0], opacity: [0, 1] }, { duration: 0.5 });
})

btnClose.addEventListener("click", () => {
  animate(btnOpen, { rotate: -360 })
  animate(btnClose, { rotate: -360 })
  animate(sidebar, { x: [0, "100%"], opacity: [1, 0] }, { duration: 0.5 });
})
// sidebar action end

// dark mode
const btnLight = document.getElementById("btn-light");
const btnDark = document.getElementById("btn-dark");
const html = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  btnDark.style.display = "none";
  btnLight.style.display = "inline-block";
} else {
  btnLight.style.display = "none";
  btnDark.style.display = "inline-block";
}

btnDark.addEventListener("click", () => {
  animate(btnDark, { rotate: 360 })
  animate(btnLight, { rotate: 360 })
  html.classList.add("dark");
  localStorage.setItem("theme", "dark");
  btnDark.style.display = "none";
  btnLight.style.display = "inline-block";
});

btnLight.addEventListener("click", () => {
  animate(btnDark, { rotate: -360 })
  animate(btnLight, { rotate: -360 })
  html.classList.remove("dark");
  localStorage.setItem("theme", "light");
  btnLight.style.display = "none";
  btnDark.style.display = "inline-block";
});
// dark mode end



// home
inView(".home-text", (element) => {
  animate(element, { opacity: 1, y: [-10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, y: -10 })
})
// home end

// about
inView(".about-text-1", (element) => {
  animate(element, { opacity: 1, y: [-10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, y: -10 })
})

inView(".about-text-2", (element) => {
  animate(element, { opacity: 1, x: [-10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, x: -10 })
})

inView(".about-social-media", (element) => {
  animate(element, { opacity: 1, x: [-10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, x: -10 })
})

inView(".about-image", (element) => {
  animate(element, { opacity: 1, x: [10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, x: 10 })
})
// about end

// education
inView(".title-education", (element) => {
  animate(element, { opacity: 1, y: [-10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, y: -10 })
})
inView(".card-education-1", (element) => {
  animate(element, { opacity: 1, x: [-10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, x: -10 })
})
inView(".card-education-2", (element) => {
  animate(element, { opacity: 1, x: [10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, x: 10 })
})
// education end

// education
inView(".title-experience", (element) => {
  animate(element, { opacity: 1, x: [10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, x: 10 })
})
inView(".card-experience", (element) => {
  animate(element, { opacity: 1, x: [-10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, x: -10 })
})
inView(".card-experience-1", (element) => {
  animate(element, { opacity: 1, y: [10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, y: 10 })
})
inView(".card-experience-2", (element) => {
  animate(element, { opacity: 1, y: [10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, y: 10 })
})
// education end


// skilss
inView(".skills-title", (element) => {
  animate(element, { opacity: 1, y: [-10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, y: -10 })
})
inView(".skills-card-language", (element) => {
  animate(element, { opacity: 1, y: [10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, y: 10 })
})
inView(".skills-card", (element) => {
  animate(element, { opacity: 1, x: [10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, x: 10 })
})

inView(".skills-1", (element) => {
  element.style.width = "0%"
  animate(element, 
      { width: ["0%", "60%"] }, 
      { duration: 1.5, easing: "ease-out" }
  )

  return () => animate(element, { width: ["0%", "60%"] })
})
inView(".skills-2", (element) => {
  element.style.width = "0%"
  animate(element, 
      { width: ["0%", "80%"] }, 
      { duration: 1.5, easing: "ease-out" }
  )

  return () => animate(element, { width: ["0%", "80%"] })
})
inView(".skills-3", (element) => {
  element.style.width = "0%"
  animate(element, 
      { width: ["0%", "80%"] }, 
      { duration: 1.5, easing: "ease-out" }
  )

  return () => animate(element, { width: ["0%", "80%"] })
})
inView(".skills-4", (element) => {
  element.style.width = "0%"
  animate(element, 
      { width: ["0%", "70%"] }, 
      { duration: 1.5, easing: "ease-out" }
  )

  return () => animate(element, { width: ["0%", "70%"] })
})
inView(".skills-5", (element) => {
  element.style.width = "0%"
  animate(element, 
      { width: ["0%", "90%"] }, 
      { duration: 1.5, easing: "ease-out" }
  )

  return () => animate(element, { width: ["0%", "90%"] })
})
inView(".skills-6", (element) => {
  element.style.width = "0%"
  animate(element, 
      { width: ["0%", "75%"] }, 
      { duration: 1.5, easing: "ease-out" }
  )

  return () => animate(element, { width: ["0%", "75%"] })
})
// slills end

// portfolio
inView(".portfolio-title", (element) => {
  animate(element, { opacity: 1, x: [-10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, x: -10 })
})
inView(".portfolio-slider", (element) => {
  animate(element, { opacity: 1, y: [10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, y: 10 })
})
// portfolio end

// gallery
inView(".gallery-title", (element) => {
  animate(element, { opacity: 1, y: [-10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, y: -10 })
})
inView(".gallery-photo", (element) => {
  animate(element, { opacity: 1, y: [-10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, y: -10 })
})
// gallery end

inView(".footer", (element) => {
  animate(element, { opacity: 1, y: [10, 0] },{ duration: 1})

  return () => animate(element, { opacity: 0, y: 10 })
})