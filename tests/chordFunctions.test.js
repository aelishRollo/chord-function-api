const { getChordFunctionFromName } = require('../chordFunctions');

const romanNumerals = ['I', 'bII', 'II', 'bIII', 'III', 'IV', 'bV', 'V', 'bVI', 'VI', 'bVII', 'VII'];

describe('getChordFunctionFromName', () => {
  const chordQualities = ['Maj', 'Maj7', '7', '(Augmented)', '6', '7b5', 'Minor', 'Minor7', '°', 'ø7'];
  const keys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

  keys.forEach((key) => {
    const scale = chromaticScaleWithKey(key);

    scale.forEach((note, index) => {
      chordQualities.forEach((quality) => {
        const chordName = `${note}${quality}`;
        const expectedFunction = `${romanNumerals[index]}${quality}`;
        test(`Chord ${chordName} in key of ${key} should be ${expectedFunction}`, () => {
          expect(getChordFunctionFromName(chordName, key)).toBe(expectedFunction);
        });
      });
    });
  });
});

function chromaticScaleWithKey(key) {
  const chromaticScale = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];
  const startIdx = chromaticScale.indexOf(key);
  const scale = [];
  for (let i = 0; i < chromaticScale.length; i++) {
    scale.push(chromaticScale[(startIdx + i) % chromaticScale.length]);
  }
  return scale;
}
