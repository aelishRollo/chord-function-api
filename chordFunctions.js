const chromaticScale = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const romanNumerals = ['I', 'bII', 'II', 'bIII', 'III', 'IV', 'bV', 'V', 'bVI', 'VI', 'bVII', 'VII'];

const sharpToFlatMap = {
  'C#': 'Db', 'c#': 'Db',
  'D#': 'Eb', 'd#': 'Eb',
  'F#': 'Gb', 'f#': 'Gb',
  'G#': 'Ab', 'g#': 'Ab',
  'A#': 'Bb', 'a#': 'Bb'
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
  return sharpToFlatMap[note] || note.toUpperCase();
}

function getChordFunctionFromName(key, chordRoot, chordQuality) {
  try {
    if (!key || !chordRoot || !chordQuality) {
      throw new Error('Key, chord root, and quality are required');
    }

    key = convertSharpToFlat(key);
    chordRoot = convertSharpToFlat(decodeURIComponent(chordRoot));
    chordQuality = chordQuality.charAt(0).toUpperCase() + chordQuality.slice(1).toLowerCase();

    const rootPattern = /^[A-G][b#]?$/i;
    if (!rootPattern.test(chordRoot)) {
      throw new Error('Invalid chord root');
    }

    if (!chromaticScale.includes(key)) {
      throw new Error('Invalid key');
    }
    if (!chromaticScale.includes(chordRoot)) {
      throw new Error('Invalid chord root note');
    }
    if (!Object.keys(chordQualityMap).includes(chordQuality)) {
      throw new Error('Invalid chord quality');
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
