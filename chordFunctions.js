const chromaticScale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
const romanNumerals = ['I', '#I', 'II', '#II', 'III', 'IV', '#IV', 'V', '#V', 'VI', '#VI', 'VII'];

function getChordFunctionFromName(chordName, key) {
  const qualityPattern = /^(.*?)(Maj|Maj7|7|6|7b5|Minor|Minor7|°|ø7|\(Augmented\))$/;
  const match = chordName.match(qualityPattern);
  if (!match) {
    throw new Error('Invalid chord name');
  }

  const rootNote = match[1];
  const quality = match[2];

  const rootIndex = chromaticScale.indexOf(rootNote);
  const keyIndex = chromaticScale.indexOf(key);

  if (rootIndex === -1 || keyIndex === -1) {
    throw new Error('Invalid key or chord root note');
  }

  const degree = (rootIndex - keyIndex + chromaticScale.length) % chromaticScale.length;

  return `${romanNumerals[degree]}${quality}`;
}

module.exports = { getChordFunctionFromName };
