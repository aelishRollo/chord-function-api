const { getChordFunctionFromName } = require('../chordFunctions');

describe('getChordFunctionFromName', () => {
  const romanNumerals = ['I', 'bII', 'II', 'bIII', 'III', 'IV', 'bV', 'V', 'bVI', 'VI', 'bVII', 'VII'];
  const chordQualities = ['Major', 'Minor', 'Augmented', 'Diminished', 'Major7', 'Minor7', 'Dominant7', 'HalfDiminished', 'Diminished7', 'Sus4', 'Sus2'];
  const keys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

  keys.forEach((key) => {
    const scale = chromaticScaleWithKey(key);

    scale.forEach((note, index) => {
      chordQualities.forEach((quality) => {
        const chordName = `${note}${quality}`;
        const expectedFunction = `${romanNumerals[index]}${getQualitySymbol(quality)}`;
        test(`Chord ${chordName} in key of ${key} should be ${expectedFunction}`, () => {
          expect(getChordFunctionFromName(chordName, key)).toBe(expectedFunction);
        });
      });
    });
  });

  test('Invalid chord name should throw an error', () => {
    expect(() => getChordFunctionFromName('H7', 'C')).toThrow('Invalid chord name format');
  });

  test('Invalid key should throw an error', () => {
    expect(() => getChordFunctionFromName('CMajor', 'H')).toThrow('Invalid root note or key');
  });

  test('Missing chord name should throw an error', () => {
    expect(() => getChordFunctionFromName(null, 'C')).toThrow('Chord name and key are required');
  });

  test('Missing key should throw an error', () => {
    expect(() => getChordFunctionFromName('CMajor', null)).toThrow('Chord name and key are required');
  });
});

function chromaticScaleWithKey(key) {
  const chromaticScale = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  const startIdx = chromaticScale.indexOf(key);
  return [...chromaticScale.slice(startIdx), ...chromaticScale.slice(0, startIdx)];
}

function getQualitySymbol(quality) {
  const qualityMap = {
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
  return qualityMap[quality] || '';
}
