let form = document.getElementById("movieID");
let input = document.getElementById("inputMovie");
let container = document.getElementById("container");

const apiUrl = "https://www.omdbapi.com/";
let apiKey = "f7fd3e4";

function createCardTagWithContent(
  tag,
  idTag,
  appendElement,
  imgTag,
  h2Tag,
  pTag,
  imgSrc,
  h2Context,
  pContext,
) {
  let div = document.createElement(tag);

  let img = document.createElement(imgTag);
  let h3 = document.createElement(h2Tag);
  let p = document.createElement(pTag);

  div.id = idTag;

  img.src = imgSrc;
  h3.innerHTML = h2Context;
  p.innerHTML = pContext;

  p.style.marginBottom = "150px";

  div.appendChild(img);
  div.appendChild(h3);
  div.appendChild(p);

  appendElement.appendChild(div);
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  let movie = input.value;

  let url = apiUrl + "?apikey=" + apiKey + "&s=" + movie;

  const response = await fetch(url);

  const result = await response.json();

  for (let movie of result.Search) {
    createCardTagWithContent(
      "div",
      "cardID",
      container,
      "img",
      "h3",
      "p",
      movie.Poster,
      movie.Title,
      movie.Year,
    );
  }
});
