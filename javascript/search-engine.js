let appearances = [];

fetch("/json/character-appearances.json")
  .then(response => response.json())
  .then(data => {
    appearances = data;
  })
  .catch(error => console.error("Error fetching character appearances:", error));

function createEntryCard(item) {
  return `
    <div class="item">
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
  const resultsContainer = document.getElementById("search-results");
  resultsContainer.innerHTML = "";

  if (!query) {
    resultsContainer.innerHTML = "<p>Please enter a character name to search.</p>";
    return;
  }

  const matches = appearances.filter(item => {
    const searchableText = [
      item.character,
      item.alias,
      item.title,
      item.caption,
      ...(item.keywords || [])
    ].join(" ").toLowerCase();

    return searchableText.includes(query);
  });
  
  if (matches.length === 0) {
    resultsContainer.innerHTML = "<p>No results found. Please try a different character name.</p>";
    return;
  }
  
  const movies = matches.filter(item => item.resultType === "movie");
  const series = matches.filter(item => item.resultType === "series");
  const specials = matches.filter(item => item.resultType === "specials");
  const shorts = matches.filter(item => item.resultType === "shorts");
  
  if (movies.length > 0) {
    html += '
      <section class = "results-section">
        <h2>Movies<h2>
        <div class = "results-grid">
          ${series.map(createEntryCard).join("")}
        </div>
      </section>
    ';
  }
  
  if (series.length > 0) {
    html += '
      <section class = "results-section">
        <h2>Series<h2>
        <div class = "results-grid">
          ${series.map(createEntryCard).join("")}
        </div>
      </section>
    ';
  }
  
  if (specials.length > 0) {
    html += '
      <section class = "results-section">
        <h2>Specials<h2>
        <div class = "results-grid">
          ${series.map(createEntryCard).join("")}
        </div>
      </section>
    ';
  }
  
  if (shorts.length > 0) {
    html += '
      <section class = "results-section">
        <h2>Shorts<h2>
        <div class = "results-grid">
          ${series.map(createEntryCard).join("")}
        </div>
      </section>
    ';
  }

  resultsContainer.innerHTML = matches.map(createEntryCard).join("");

}

document.getElementById("character-search").addEventListener("input", searchCharacter);
