const difficulties = ["Easy", "Medium", "Hard"];

// [Easy Words, Medium Words, Hard Words]
const Word = {
  Easy: [
    "buzz",
    "fluffy",
    "puzzle",
    "lucky",
    "word",
    "dog",
    "cat",
    "cow",
    "pig",
    "fox",
    "rat",
    "hen",
    "duck",
    "bee",
    "bat",
    "apple",
    "pear",
    "banana",
    "grape",
    "kiwi",
    "peach",
    "plum",
    "orange",
    "mango",
    "melon",
    "tennis",
    "golf",
    "swim",
    "run",
    "hike",
    "bike",
    "yoga",
    "surf",
    "dance",
    "ski",
  ],
  Medium: [
    "rhythmic",
    "synthetic",
    "tiger",
    "elephant",
    "giraffe",
    "rhinoceros",
    "kangaroo",
    "hippopotamus",
    "penguin",
    "octopus",
    "zebra",
    "iguana",
    "pineapple",
    "raspberry",
    "watermelon",
    "grapefruit",
    "avocado",
    "pomegranate",
    "passionfruit",
    "guava",
    "coconut",
    "fig",
    "football",
    "basketball",
    "baseball",
    "volleyball",
    "boxing",
    "karate",
    "hockey",
    "soccer",
    "gymnastics",
    "wrestling",
  ],
  Hard: [
    "zwieback",
    "chutzpah",
    "orangutan",
    "hedgehog",
    "anteater",
    "platypus",
    "chimpanzee",
    "persimmon",
    "starfruit",
    "kiwano",
    "durian",
    "rambutan",
    "mangosteen",
    "jackfruit",
    "cherimoya",
    "custard apple",
    "soursop",
    "triathlon",
    "bobsledding",
    "figure skating",
    "snowboarding",
    "water polo",
    "rowing",
    "sailing",
    "fencing",
    "pole vaulting",
  ],
};

const randomWord = (currentDifficulty) => {
  console.log(currentDifficulty);
  console.log(Word.length);
  return Word[currentDifficulty][
    Math.floor(Math.random() * Word[currentDifficulty].length)
  ].toLowerCase();
};

export { randomWord, difficulties };