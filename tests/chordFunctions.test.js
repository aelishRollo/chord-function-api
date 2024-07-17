const { getChordFunctionFromName, invertChordQuality } = require('../chordFunctions');

describe('getChordFunctionFromName', () => {
  const romanNumerals = ['I', 'bII', 'II', 'bIII', 'III', 'IV', 'bV', 'V', 'bVI', 'VI', 'bVII', 'VII'];
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

describe('invertChordQuality', () => {
  const testCases = [
    ['IMajor', 'IMinor'],
    ['IMaj7', 'IMinorb6'],
    ['I7', 'IMinor6'],
    ['I(Augmented)', 'V(Augmented)'],
    ['IMinor', 'IMajor'],
    ['IMinor7', 'IMajor6'],
    ['bIIMajor', 'VIIMinor'],
    ['bIIMaj7', 'VIIMinorb6'],
    ['bII7', 'VIIMinor6'],
    ['bIIMinor', 'VIIMajor'],
    ['bIIMinor7', 'VIIMajor6'],
    ['IIMajor', 'bVIIMinor'],
    ['II7', 'bVIIMinor6'],
    ['IIMinor', 'bVIIMajor'],
    ['IIMinor7', 'bVII6'],
    ['II°', 'VII°'],
    ['IIMinor7b5', 'V7'],
    ['bIIIMajor', 'VIMinor'],
    ['bIIIMajor7', 'VIMinorb6'],
    ['bIII7', 'VIMinor6'],
    ['IIIMajor', 'bVIMinor'],
    ['III7', 'bVIMinor6'],
    ['IIIMinor', 'bVIMajor'],
    ['IIIMinor7', 'bVI6'],
    ['IVMajor', 'VMinor'],
    ['IVMaj7', 'VMinorb6'],
    ['IVMinor', 'VMajor'],
    ['IVMinor6', 'V7'],
    ['#IVMajor', 'bVMinor'],
    ['#IVø7', 'bIII7'],
    ['VMajor', 'IVMinor'],
    ['V7', 'IVMinor6'],
    ['VMinor', 'IVMajor'],
    ['VMinor7', 'IV6'],
    ['bVIMajor', 'IIIMinor'],
    ['bVIMaj7', 'IIIMinorb6'],
    ['bVI7', 'IIIMinor6'],
    ['bVIMinor', 'IIIMajor'],
    ['VIMajor', 'bIIIMinor'],
    ['VI7', 'bIIIMinor6'],
    ['VIMinor', 'bIIIMajor'],
    ['VIMinor7', 'bIII6'],
    ['bVIIMajor', 'IIMinor'],
    ['bVIIMaj7', 'IIMinorb6'],
    ['bVII7', 'IIMinor6'],
    ['VIIMajor', 'bIIMinor'],
    ['VII7', 'bIIMinor6'],
    ['VII°', 'II°'],
    ['VIIø7', 'bVII7'],
    ['VII°7', 'VII°7']
  ];

  testCases.forEach(([input, expected]) => {
    test(`invertChordQuality(${input}) should return ${expected}`, () => {
      expect(invertChordQuality(input)).toBe(expected);
    });
  });
});
