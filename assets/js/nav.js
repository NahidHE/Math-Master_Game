const mobile_nav = document.querySelector(".mobile__nav");
const menu = document.querySelector(".hamburger");
const close = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const hamburger_visible = hamburger.getAttributeNode("visible");

menu.addEventListener("click", () => {
  const toggled = mobile_nav.getAttributeNode("toggled");
  toggled.value = "true";
  hamburger_visible.value = "false";
});

close.addEventListener("click", () => {
  const toggled = mobile_nav.getAttributeNode("toggled");
  toggled.value = "false";
  hamburger_visible.value = "true";
});
