// for (let i = 0; i < 1e2; i++) {}
// const imageContainer = document.getElementsByClassName("image-container");
// console.log(imageContainer);

const img = document.querySelector("img");
img.addEventListener("load", () => {
  console.log("loading");
  const c = img.parentElement;
  const ratio = img.naturalHeight / img.naturalWidth;
  c.style.height = c.clientWidth * ratio - 2000 + "px";
});
