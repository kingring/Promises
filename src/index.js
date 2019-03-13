import "./styles.css";

/*document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use Parcel to bundle this sandbox, you can find more info about Parcel
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;*/
const API = "https://starwars.egghead.training/";

const outputElement = document.querySelector("#output");

outputElement.innerText = "Loading...";

fetch(`${API}films`)
  .then(response => response.json())
  .then(films => {
    const filmTitles = getFilmTitles(films);
    outputElement.innerText = filmTitles;
  });

function getFilmTitles(films) {
  return films
    .sort((a, b) => a.episode_id - b.episode_id)
    .map(film => `${film.episode_id}. ${film.title}`)
    .join("\n");
}
