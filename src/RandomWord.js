const difficulties = ["Easy", "Medium", "Hard", "Quotes"];

// [Easy Words, Medium Words, Hard Words, Quotes]
let Word = [[
  "buzz",
  "fluffy",
  "puzzle",
  "lucky",
  "word",
],
[
  "rhythmic",
  "synthetic",
  "blue in the face",
  "my Achilles heel",
  "hold your horses",
],
[
  "burning the midnight oil",
  "zwieback",
  "chutzpah",
  "batten down the hatches",
  "upset the apple cart",
],
[
  "A room without books is like a body without a soul",
  "You only live once but if you do it right once is enough",
  "Be the change that you wish to see in the world",
  "Live for something rather than die for nothing",
  "If you tell the truth you don't have to remember anything",
]
];

const randomWord = (currentDifficulty) => {
  console.log(currentDifficulty);
  return Word[difficulties.indexOf(currentDifficulty)][
    Math.floor(Math.random() * Word.length)
  ].toLowerCase();
}

export { randomWord, difficulties };
