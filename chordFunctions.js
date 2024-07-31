const chromaticScale = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const romanNumerals = ['I', 'bII', 'II', 'bIII', 'III', 'IV', 'bV', 'V', 'bVI', 'VI', 'bVII', 'VII'];

const sharpToFlatMap = {
  'C#': 'Db',
  'D#': 'Eb',
  'F#': 'Gb',
  'G#': 'Ab',
  'A#': 'Bb'
};

const chordQualityMap = {
  'Major': '',
  'Minor': 'm',
  'Augmented': '+',
  'Diminished': '°',
  'Major7': 'maj7',
  'Minor7': 'm7',
  'Dominant7': '7',
  'HalfDiminished': 'ø',
  'Diminished7': '°7',
  'Sus4': 'sus4',
  'Sus2': 'sus2'
};

function convertSharpToFlat(note) {
  return sharpToFlatMap[note] || note;
}

function getChordFunctionFromName(chordName, key) {
  const qualityPattern = /^(.*?)(Major|Minor|Augmented|Diminished|Major7|Minor7|Dominant7|HalfDiminished|Diminished7|Sus4|Sus2)$/;
  const match = chordName.match(qualityPattern);
  console.log(`getChordFunctionFromName - chordName: ${chordName}, key: ${key}`);
  console.log(`match: ${JSON.stringify(match)}`);

  let rootNote = match[1];
  const quality = match[2];

  rootNote = convertSharpToFlat(rootNote);
  key = convertSharpToFlat(key);

  const rootIndex = chromaticScale.indexOf(rootNote);
  const keyIndex = chromaticScale.indexOf(key);

  console.log(`rootNote: ${rootNote}, key: ${key}`);
  console.log(`rootIndex: ${rootIndex}, keyIndex: ${keyIndex}`);

  const degree = (rootIndex - keyIndex + chromaticScale.length) % chromaticScale.length;

  console.log(`degree: ${degree}, romanNumeral: ${romanNumerals[degree]}`);
  return `${romanNumerals[degree]}${chordQualityMap[quality]}`;
}

module.exports = { getChordFunctionFromName };
