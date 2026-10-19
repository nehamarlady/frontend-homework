
const userInput = document.querySelector('#userInput');
const searchButton = document.querySelector('#searchButton');
const results = document.querySelector('#results');

const handleClick = function handleClick() {
  const searchText = userInput.value.trim();

  // Clear the previous search results.
  results.innerHTML = '';

  if (searchText === '') {
    results.textContent = 'Please enter a character name.';
    return;
  }

  // Find every character whose name contains the search text.
  const matchingCharacters = characters.filter(function filterCharacter(character) {
    return character.name.toLowerCase().includes(searchText.toLowerCase());
  });

  // Display a message if there are no matches.
  if (matchingCharacters.length === 0) {
    results.textContent = 'No characters found.';
    return;
  }

  // Create a Bootstrap card for every matching character.
  matchingCharacters.forEach(function displayCharacter(character) {
    const card = document.createElement('div');
    card.className = 'card p-3';
    card.style.width = '220px';

    const name = document.createElement('h4');
    name.className = 'card-title';

    // Highlight the matching text.
    const lowerName = character.name.toLowerCase();
    const lowerSearchText = searchText.toLowerCase();
    const matchIndex = lowerName.indexOf(lowerSearchText);

    name.append(document.createTextNode(character.name.slice(0, matchIndex)));

    const highlightedText = document.createElement('mark');
    highlightedText.textContent = character.name.slice(
      matchIndex,
      matchIndex + searchText.length
    );

    name.append(highlightedText);
    name.append(
      document.createTextNode(
        character.name.slice(matchIndex + searchText.length)
      )
    );

    const birthYear = document.createElement('p');
    birthYear.className = 'card-text mb-0';
    birthYear.textContent = `Birth year: ${character.birth_year}`;

    card.append(name);
    card.append(birthYear);
    results.append(card);
  });
};

userInput.addEventListener('input', handleClick);
