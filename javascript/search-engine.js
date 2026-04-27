let appearances = [];

fetch("/json/character-appearances.json")
  .then(response => response.json())
  .then(data => {
    appearances = data;
  })
  .catch(error => console.error("Error fetching character appearances:", error));

function createEntryCard(item) {
  const spoilerClass = item.spoiler ? " spoiler-item" : "";
  const spoilerBadge = item.spoiler ? `<div class="spoiler-badge">Spoiler</div>` : "";

  return `
    <div class="item${spoilerClass}">
      ${spoilerBadge}
      <a href="${item.href}">
        <img src="${item.image}" 
             alt="${item.alt}"
             title="${item.title}" />
      </a>
      <span class="caption">${item.caption}</span>
    </div>
  `;
}

function searchCharacter() {
  const query = document.getElementById("character-search").value.toLowerCase().trim();
  const resultsContainer = document.getElementById("results");
  const spoilerToggle = document.getElementById("spoiler-toggle");
  const showSpoilers = spoilerToggle.checked;

  console.log("TOGGLE STATE:", showSpoilers);

  resultsContainer.innerHTML = "";

  if (!query) {
    resultsContainer.innerHTML = "<p>Please enter a character name to search.</p>";
    return;
  }

  let matches = appearances.filter(item => {
    const searchableText = [
      item.character || "",
      item.alias || "",
      item.title || "",
      item.caption || "",
      ...(item.keywords || [])
    ].join(" ").toLowerCase();

    return searchableText.includes(query);
  });

  console.log("Before spoiler filter:", matches.length);

  if (showSpoilers === false) {
    matches = matches.filter(item => item.spoiler !== true);
  }

  console.log("After spoiler filter:", matches.length);
  console.log("Matching entries:", matches);

  if (matches.length === 0) {
    resultsContainer.innerHTML = "<p>No results found. Please try a different character name.</p>";
    return;
  }

  const movies = matches.filter(item => item.resultType === "movie");
  const series = matches.filter(item => item.resultType === "series");
  const episodes = matches.filter(item => item.resultType === "episode");
  const specials = matches.filter(item => item.resultType === "special");
  const shorts = matches.filter(item => item.resultType === "short");

  let html = "";

  if (movies.length > 0) {
    html += `
      <section class="results-section">
        <h2>Movies</h2>
        <div class="results-grid">
          ${movies.map(createEntryCard).join("")}
        </div>
      </section>
    `;
  }

  if (series.length > 0) {
    html += `
      <section class="results-section">
        <h2>Series</h2>
        <div class="results-grid">
          ${series.map(createEntryCard).join("")}
        </div>
      </section>
    `;
  }

  if (episodes.length > 0) {
    html += `
      <section class="results-section">
        <h2>Episodes</h2>
        <div class="results-grid">
          ${episodes.map(createEntryCard).join("")}
        </div>
      </section>
    `;
  }

  if (specials.length > 0) {
    html += `
      <section class="results-section">
        <h2>Specials</h2>
        <div class="results-grid">
          ${specials.map(createEntryCard).join("")}
        </div>
      </section>
    `;
  }

  if (shorts.length > 0) {
    html += `
      <section class="results-section">
        <h2>Shorts</h2>
        <div class="results-grid">
          ${shorts.map(createEntryCard).join("")}
        </div>
      </section>
    `;
  }

  resultsContainer.innerHTML = html;
  console.log("Movies:", movies.length, "Series:", series.length, "Shorts:", shorts.length);
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("character-search");
  const spoilerToggle = document.getElementById("spoiler-toggle");

  searchInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      searchCharacter();
    }
  });

  spoilerToggle.addEventListener("change", function () {
    if (document.getElementById("results").innerHTML.trim() !== "") {
      searchCharacter();
    }
  });
});