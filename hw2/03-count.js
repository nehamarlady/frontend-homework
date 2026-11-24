const userInput = document.querySelector('#userInput');
const textToSearch = document.querySelector('#textToSearch');

// Save the original text.
const originalText = textToSearch.textContent;

const handleInput = () => {
  const searchWord = userInput.value.trim();

  // Restore the original text before highlighting.
  textToSearch.textContent = originalText;

  if (searchWord === '') {
    return;
  }

  // Escape special regular expression characters.
  const escapedWord = searchWord.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Match whole words, ignoring uppercase and lowercase.
  const regex = new RegExp(`\\b${escapedWord}\\b`, 'gi');
  const fragment = document.createDocumentFragment();

  let lastIndex = 0;

  // Find and highlight all matching words.
  originalText.matchAll(regex).forEach((match) => {
    // Add the text before the match.
    fragment.append(
      document.createTextNode(originalText.slice(lastIndex, match.index)),
    );

    // Highlight the matching word without extra padding.
    const mark = document.createElement('mark');
    mark.className = 'p-0';
    mark.textContent = match[0];

    fragment.append(mark);

    lastIndex = match.index + match[0].length;
  });

  // Add the remaining text.
  fragment.append(
    document.createTextNode(originalText.slice(lastIndex)),
  );

  textToSearch.replaceChildren(fragment);
};

userInput.addEventListener('input', handleInput);