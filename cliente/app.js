
const URL = "http://localhost:3000";

const TOTAL_COLUMNS = 3;

function getPhotos() {
  return fetch(`${URL}/photos`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((body) => {
      return body.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

let count = 0;

function createMatrix(photo, matrix) {
  if (!matrix[count]) {
    matrix[count] = [];
  }

  matrix[count].push(photo);

  count++;

  if (count > TOTAL_COLUMNS - 1) {
    count = 0;
  }
}

function insertColumn(columnPhotos, grid) {
  const column = document.createElement("div");

  column.setAttribute("class", "column");

  columnPhotos.forEach((photo) => {
    const wrapperImage = document.createElement("div");

    const image = document.createElement("img");

    wrapperImage.setAttribute("class", "item");

    image.setAttribute("src", photo.url);

    image.setAttribute("alt", photo.tags.join(", "));

    wrapperImage.appendChild(image);

    column.appendChild(wrapperImage);
  });

  grid.appendChild(column);
}

function renderPhotos() {
  getPhotos().then((photos) => {
    const grid = document.getElementById("grid");

    grid.style.gridTemplateColumns = `repeat(${TOTAL_COLUMNS}, 1fr)`;

    const matrix = [];

    photos.forEach((photo) => createMatrix(photo, matrix));

    matrix.forEach((column) => insertColumn(column, grid));
  });
}

window.onload = function () {
  renderPhotos();
};