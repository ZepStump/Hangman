let Word = [
  "Word1",
  "Word2",
  "Word3",
  "Word4",
  "Word5",
  "Word6",
  "Word7",
  "Word8",
  "Word9",
  "Word0",
  "...",
];

function randomWord() {
  return Word[
    Math.floor(Math.random() * Word.length)
  ].toLowerCase();
}

export { randomWord };
