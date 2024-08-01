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

function getChordFunctionFromName(key, chordRoot, chordQuality) {
  try {
    if (!chordRoot || !chordQuality || !key) {
      throw new Error('Chord root, quality, and key are required');
    }

    const rootPattern = /^[A-G][b#]?$/;
    if (!rootPattern.test(chordRoot)) {
      throw new Error('Invalid chord root');
    }

    if (!Object.keys(chordQualityMap).includes(chordQuality)) {
      throw new Error('Invalid chord quality');
    }

    chordRoot = convertSharpToFlat(chordRoot);
    key = convertSharpToFlat(key);

    if (!chromaticScale.includes(chordRoot) || !chromaticScale.includes(key)) {
      throw new Error('Invalid root note or key');
    }

    const rootIndex = chromaticScale.indexOf(chordRoot);
    const keyIndex = chromaticScale.indexOf(key);

    const degree = (rootIndex - keyIndex + chromaticScale.length) % chromaticScale.length;

    return `${romanNumerals[degree]}${chordQualityMap[chordQuality]}`;
  } catch (error) {
    console.error(`Error in getChordFunctionFromName: ${error.message}`);
    throw error;
  }
}

module.exports = { getChordFunctionFromName };
