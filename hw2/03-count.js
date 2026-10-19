// Add your code here

const userInput = document.querySelector("#userInput");
const textToSearch = document.querySelector("#textToSearch");

// Save the original text so highlighting does not accumulate.
const originalText = textToSearch.textContent;

const handleInput = function handleInput() {
  const searchWord = userInput.value.trim();

  // Restore the original text before highlighting the new search.
  textToSearch.textContent = originalText;

  if (searchWord === "") {
    return;
  }

  // Escape special regular expression characters.
  const escapedWord = searchWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  // Match the whole word, ignoring uppercase and lowercase.
  const regex = new RegExp(`\\b${escapedWord}\\b`, "gi");
  const fragment = document.createDocumentFragment();
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(originalText)) !== null) {
    // Add the text before the match.
    fragment.append(
      document.createTextNode(originalText.slice(lastIndex, match.index)),
    );

    // Highlight the matching word.
    const mark = document.createElement("mark");
    mark.textContent = match[0];
    fragment.append(mark);

    lastIndex = regex.lastIndex;
  }

  // Add the remaining text after the last match.
  if (lastIndex === 0) {
    return;
  }

  fragment.append(document.createTextNode(originalText.slice(lastIndex)));

  textToSearch.replaceChildren(fragment);
};

userInput.addEventListener("input", handleInput);
