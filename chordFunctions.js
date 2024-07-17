const chromaticScale = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const romanNumerals = ['I', 'bII', 'II', 'bIII', 'III', 'IV', 'bV', 'V', 'bVI', 'VI', 'bVII', 'VII'];

const sharpToFlatMap = {
  'C#': 'Db',
  'D#': 'Eb',
  'F#': 'Gb',
  'G#': 'Ab',
  'A#': 'Bb'
};

function convertSharpToFlat(note) {
  return sharpToFlatMap[note] || note;
}

function getChordFunctionFromName(chordName, key) {
  const qualityPattern = /^(.*?)(Maj|Maj7|7|6|7b5|Minor|Minor7|°|ø7|\(Augmented\))$/;
  const match = chordName.match(qualityPattern);
  if (!match) {
    throw new Error('Invalid chord name');
  }

  let rootNote = match[1];
  const quality = match[2];

  rootNote = convertSharpToFlat(rootNote);
  key = convertSharpToFlat(key);

  const rootIndex = chromaticScale.indexOf(rootNote);
  const keyIndex = chromaticScale.indexOf(key);

  if (rootIndex === -1 || keyIndex === -1) {
    throw new Error('Invalid key or chord root note');
  }

  const degree = (rootIndex - keyIndex + chromaticScale.length) % chromaticScale.length;

  return `${romanNumerals[degree]}${quality}`;
}

module.exports = { getChordFunctionFromName };
