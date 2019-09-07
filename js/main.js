const rootElement = document.querySelector("#root");
let background = null;
let backgroundList = null;

fetch("data.json")
  .then(Response => Response.json())
  .then(Data => spawnEnement(Data.gallery_data));

const spawnEnement = data => {
  data.forEach(background => {
    let element = document.createElement("div");
    element.classList.add("background");
    element.style.backgroundImage = `url('${background.img}')`;
    element.style.backgroundPosition = "center";
    element.style.backgroundSize = "cover";
    rootElement.appendChild(element);
  });
};

const rootLoad = () => {
  setTimeout(() => {
    background = document.querySelectorAll(".background");
    background.forEach(background => {
      background.addEventListener("mouseenter", () => {
        background.classList.add("background--active");
      });
    });

    background.forEach(background => {
      background.addEventListener("mouseout", () => {
        background.classList.remove("background--active");
      });
    });
  }, 1000);
};
