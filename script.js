const overlays = document.querySelectorAll(".overlay");
const close = document.getElementById("close");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modal img");
const images = document.querySelectorAll(".card img");
let currentIndex = 0;
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

overlays.forEach((overlay, index) => {
  overlay.addEventListener("click", () => {
    console.log(index);
    currentIndex = index;
    modalImg.src = images[index].src;
    modal.style.display = "flex";
  });
});

next.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  modalImg.src = images[currentIndex].src;
  console.log("images", images.length);
  console.log("current", currentIndex);
});

prev.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  modalImg.src = images[currentIndex].src;
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

close.addEventListener("click", () => {
  modal.style.display = "none";
});

document.addEventListener("keydown", (e) => {
  if (e.key === "escape") {
    modal.classList.remove("show");
  }
  setTimeout(() => {
    modal.style.display = "none";
  }, 300);
});
