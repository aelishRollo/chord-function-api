const chromaticScale = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
const romanNumerals = ['I', 'bII', 'II', 'bIII', 'III', 'IV', 'bV', 'V', 'bVI', 'VI', 'bVII', 'VII'];

const sharpToFlatMap = {
  'C#': 'Db',
  'D#': 'Eb',
  'F#': 'Gb',
  'G#': 'Ab',
  'A#': 'Bb'
};

const chordInversionMap = {
  'IMajor': 'IMinor',
  'IMajor7': 'IMinorb6',
  'I7': 'IMinor6',
  'I(Augmented)': 'V(Augmented)',
  'IMinor': 'IMajor',
  'IMinor7': 'IMajor6',
  'bIIMajor': 'VIIMinor',
  'bIIMajor7': 'VIIMinorb6',
  'bII7': 'VIIMinor6',
  'bIIMinor': 'VIIMajor',
  'bIIMinor7': 'VIIMajor6',
  'IIMajor': 'bVIIMinor',
  'II7': 'bVIIMinor6',
  'IIMinor': 'bVIIMajor',
  'IIMinor7': 'bVII6',
  'II°': 'VII°',
  'IIMinor7b5': 'V7',
  'bIIIMajor': 'VIMinor',
  'bIIIMajor7': 'VIMinorb6',
  'bIII7': 'VIMinor6',
  'IIIMajor': 'bVIMinor',
  'III7': 'bVIMinor6',
  'IIIMinor': 'bVIMajor',
  'IIIMinor7': 'bVI6',
  'IVMajor': 'VMinor',
  'IVMajor7': 'VMinorb6',
  'IVMinor': 'VMajor',
  'IVMinor6': 'V7',
  '#IVMajor': 'bVMinor',
  '#IVø7': 'bIII7',
  'VMajor': 'IVMinor',
  'V7': 'IVMinor6',
  'VMinor': 'IVMajor',
  'VMinor7': 'IV6',
  'bVIMajor': 'IIIMinor',
  'bVIMajor7': 'IIIMinorb6',
  'bVI7': 'IIIMinor6',
  'bVIMinor': 'IIIMajor',
  'VIMajor': 'bIIIMinor',
  'VI7': 'bIIIMinor6',
  'VIMinor': 'bIIIMajor',
  'VIMinor7': 'bIII6',
  'bVIIMajor': 'IIMinor',
  'bVIIMajor7': 'IIMinorb6',
  'bVII7': 'IIMinor6',
  'VIIMajor': 'bIIMinor',
  'VII7': 'bIIMinor6',
  'VII°': 'II°',
  'VIIø7': 'bVII7',
  'VII°7': 'VII°7'
};

function convertSharpToFlat(note) {
  return sharpToFlatMap[note] || note;
}

function getChordFunctionFromName(chordName, key) {
  const qualityPattern = /^(.*?)(Major|Major7|7|6|7b5|Minor|Minor7|°|ø7|\(Augmented\))$/;
  const match = chordName.match(qualityPattern);
  console.log(`getChordFunctionFromName - chordName: ${chordName}, key: ${key}`);
  console.log(`match: ${JSON.stringify(match)}`);
  if (!match) {
    throw new Error('Invalid chord name');
  }

  let rootNote = match[1];
  const quality = match[2];

  rootNote = convertSharpToFlat(rootNote);
  key = convertSharpToFlat(key);

  const rootIndex = chromaticScale.indexOf(rootNote);
  const keyIndex = chromaticScale.indexOf(key);

  console.log(`rootNote: ${rootNote}, key: ${key}`);
  console.log(`rootIndex: ${rootIndex}, keyIndex: ${keyIndex}`);

  if (rootIndex === -1 || keyIndex === -1) {
    throw new Error('Invalid key or chord root note');
  }

  const degree = (rootIndex - keyIndex + chromaticScale.length) % chromaticScale.length;

  console.log(`degree: ${degree}, romanNumeral: ${romanNumerals[degree]}`);
  return `${romanNumerals[degree]}${quality}`;
}

function invertChordQuality(inputChord) {
  console.log(`invertChordQuality - inputChord: ${inputChord}`);
  const chordPattern = /^(C|Db|D|Eb|E|F|Gb|G|Ab|A|Bb|B)(Major|Major7|7|6|7b5|Minor|Minor7|°|ø7|\(Augmented\))$/;
  const match = inputChord.match(chordPattern);
  console.log(`match: ${JSON.stringify(match)}`);
  if (!match) {
    throw new Error('Invalid chord format');
  }

  const note = match[1];
  const quality = match[2];

  const keyIndex = chromaticScale.indexOf('C'); // Assume the key of C for simplicity
  const noteIndex = chromaticScale.indexOf(note);
  const degree = (noteIndex - keyIndex + chromaticScale.length) % chromaticScale.length;
  const romanRoot = romanNumerals[degree];

  console.log(`note: ${note}, quality: ${quality}, degree: ${degree}, romanRoot: ${romanRoot}`);
  const invertedChord = chordInversionMap[`${romanRoot}${quality}`];
  console.log(`invertedChord: ${invertedChord}`);
  if (!invertedChord) {
    throw new Error('Chord inversion not found in map');
  }

  return invertedChord;
}

module.exports = { getChordFunctionFromName, invertChordQuality };
