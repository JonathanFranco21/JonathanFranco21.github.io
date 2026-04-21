let appearances = [];

fetch("/json/character-appearances.json")
  .then(response => response.json())
  .then(data => {
    appearances = data;
  })
  .catch(error => console.error("Error fetching character appearances:", error));

function createEntryCard(item) {
  return `
    <div class="item>
      <a href="${item.href}">
        <img src="${item.image}" 
              alt="${item.alt}"
              title="${item.title}" />
      </a>
      <span class="caption">${item.caption}</span>
    </div>
  `;
}

document.getElementById("character-search").addEventListener("input", function () {
  const query = this.value.toLowerCase().trin();
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
      ...item(item.keywords || [])
    ].join(" ").toLowerCase();

    return searchableText.includes(query);
  });
  
  if (matches.length === 0) {
    resultsContainer.innerHTML = "<p>No results found. Please try a different character name.</p>";
    return;
  }

  resultsContainer.innerHTML = matches.map(createEntryCard).join("");

});
