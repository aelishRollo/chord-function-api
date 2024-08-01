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
  try {
    if (!chordName || !key) {
      throw new Error('Chord name and key are required');
    }

    const qualityPattern = /^([A-G][b#]?)(Major|Minor|Augmented|Diminished|Major7|Minor7|Dominant7|HalfDiminished|Diminished7|Sus4|Sus2)$/;
    const match = chordName.match(qualityPattern);

    if (!match) {
      throw new Error('Invalid chord name format');
    }

    let rootNote = match[1];
    const quality = match[2];

    rootNote = convertSharpToFlat(rootNote);
    key = convertSharpToFlat(key);

    if (!chromaticScale.includes(rootNote) || !chromaticScale.includes(key)) {
      throw new Error('Invalid root note or key');
    }

    const rootIndex = chromaticScale.indexOf(rootNote);
    const keyIndex = chromaticScale.indexOf(key);

    const degree = (rootIndex - keyIndex + chromaticScale.length) % chromaticScale.length;

    return `${romanNumerals[degree]}${chordQualityMap[quality]}`;
  } catch (error) {
    console.error(`Error in getChordFunctionFromName: ${error.message}`);
    throw error;
  }
}

module.exports = { getChordFunctionFromName };
