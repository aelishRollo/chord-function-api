const chromaticScale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

const majorScaleIntervals = [2, 2, 1, 2, 2, 2, 1];
const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

function generateScale(key) {
  const startIdx = chromaticScale.indexOf(key);
  if (startIdx === -1) {
    throw new Error('Invalid key');
  }

  const scale = [key];
  let currentIdx = startIdx;
  for (let interval of majorScaleIntervals) {
    currentIdx = (currentIdx + interval) % chromaticScale.length;
    scale.push(chromaticScale[currentIdx]);
  }

  return scale;
}

function getChordFunctionFromName(chordName, key) {
  const qualityPattern = /^(.*?)(Maj|Maj7|7|6|7b5|Minor|Minor7|°|ø7|\(Augmented\))$/;
  const match = chordName.match(qualityPattern);
  if (!match) {
    throw new Error('Invalid chord name');
  }

  const rootNote = match[1];
  const quality = match[2];

  const scale = generateScale(key);
  const degree = scale.indexOf(rootNote);

  if (degree === -1) {
    throw new Error('Invalid chord root note for the key');
  }

  return `${romanNumerals[degree]}${quality}`;
}

module.exports = { getChordFunctionFromName };
