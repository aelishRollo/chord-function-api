const { getChordFunctionFromName } = require('../chordFunctions');

const romanNumerals = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII'];

describe('getChordFunctionFromName', () => {
  const chordQualities = ['Maj', 'Maj7', '7', '(Augmented)', '6', '7b5', 'Minor', 'Minor7', '°', 'ø7'];
  const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

  keys.forEach((key) => {
    const scale = generateScale(key);

    scale.forEach((note, index) => {
      chordQualities.forEach((quality) => {
        const chordName = `${note}${quality}`;
        const expectedFunction = `${romanNumerals[index % 7]}${quality}`;
        test(`Chord ${chordName} in key of ${key} should be ${expectedFunction}`, () => {
          expect(getChordFunctionFromName(chordName, key)).toBe(expectedFunction);
        });
      });
    });
  });
});

function generateScale(key) {
  const chromaticScale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
  const majorScaleIntervals = [2, 2, 1, 2, 2, 2, 1];
  const startIdx = chromaticScale.indexOf(key);
  const scale = [key];
  let currentIdx = startIdx;
  for (let interval of majorScaleIntervals) {
    currentIdx = (currentIdx + interval) % chromaticScale.length;
    scale.push(chromaticScale[currentIdx]);
  }
  return scale;
}
