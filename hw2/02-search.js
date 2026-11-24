const userInput = document.querySelector('#userInput');
const results = document.querySelector('#results');

const handleSearch = () => {
  const searchText = userInput.value.trim().toLowerCase();

  // Clear the previous search results.
  results.textContent = '';

  // Handle empty search input.
  if (searchText === '') {
    results.textContent = 'Please enter a character name.';
    return;
  }

  // Find all characters that match the search text.
  const matchingCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(searchText),
  );

  // Handle cases where no characters are found.
  if (matchingCharacters.length === 0) {
    results.textContent = 'No characters found.';
    return;
  }

  // Create a Bootstrap card for each matching character.
  matchingCharacters.forEach((character) => {
    const card = document.createElement('div');
    card.className = 'card p-3';
    card.style.minWidth = '220px';

    const name = document.createElement('h4');
    name.className = 'card-title';
    name.textContent = character.name;

    const birthYear = document.createElement('p');
    birthYear.className = 'card-text mb-0';
    birthYear.textContent = `Birth year: ${character.birth_year}`;

    card.append(name, birthYear);
    results.append(card);
  });
};

// Perform the search whenever the user enters text.
userInput.addEventListener('input', handleSearch);
