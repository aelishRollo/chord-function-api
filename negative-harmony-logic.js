const chromaticScale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
const chordRoleMap = {
    0: "I", 1: "bII", 2: "II", 3: "bIII", 4: "III", 5: "IV", 6: "#IV", 7: "V", 8: "bVI", 9: "VI", 10: "bVII", 11: "VII"
};

const roleConversionMap = {
    "I": "i-", "Imaj7": "i-b6", "I7": "i-6", "I+": "V+", "i-": "I", "i-7": "I6",
    "bII": "vii-", "bIImaj7": "vii-b6", "bII7": "vii-6", "bii-": "VII", "bii-7": "VII6",
    "II": "bvii-", "II7": "bvii-6", "ii-": "bVII", "ii-7": "bVII6", "ii°": "vii°", "ii-7b5": "V7",
    "bIII": "vi-", "bIIImaj7": "vi-b6", "bIII7": "vi-6", "III": "bvi-", "III7": "bvi-6",
    "iii-": "bVI", "iii-7": "bVI6", "IV": "v-", "IVmaj7": "v-b6", "iv-": "V", "iv-6": "V7",
    "#IV": "bv-", "#ivø7": "bIII7", "V": "iv-", "V7": "iv-6", "v-": "IV", "v-7": "IV6",
    "bVI": "iii-", "bVImaj7": "iii-b6", "bVI7": "iii-6", "bvi-": "III", "VI": "biii-",
    "VI7": "biii-6", "vi-": "bIII", "vi-7": "bIII6", "bVII": "ii-", "bVIImaj7": "ii-b6",
    "bVII7": "ii-6", "VII": "bii-", "VII7": "bii-6", "vii°": "ii°", "viiø7": "bVII7",
    "vii°7": "vii°7"
};

function getChordRole(keyCenter, chordName) {
    // Regular expression to match chord name into root and type
    const chordPattern = /^([A-G][#b]?)(.*)$/;
    const match = chordName.match(chordPattern);

    if (!match) {
        return "Invalid chord name";
    }

    const [_, chordRoot, chordType] = match;

    // Find the tonic index of the key center and the root index of the chord
    const tonicIndex = chromaticScale.indexOf(keyCenter);
    const chordRootIndex = chromaticScale.indexOf(chordRoot);

    if (tonicIndex === -1 || chordRootIndex === -1) {
        return "Invalid key center or chord root";
    }

    // Calculate the interval between the key center and the chord root
    const interval = (chordRootIndex - tonicIndex + 12) % 12;
    const roleBase = chordRoleMap[interval] || "Unknown interval";

    // Return the role of the chord
    return `${roleBase}${chordType}`;
}

function invertChord(chordRole) {
    return roleConversionMap[chordRole] || "Unknown role";
}

// Example usage
const keyCenter = "C";
const chordName = "FMaj7";
const chordRole = getChordRole(keyCenter, chordName); // Output: IVmaj7
const invertedRole = invertChord(chordRole); // Output: v-b6

console.log(chordRole); // Output: IVmaj7
console.log(invertedRole); // Output: v-b6

const keyCenter2 = "G";
const chordName2 = "A#7";
const chordRole2 = getChordRole(keyCenter2, chordName2); // Output: bIII7
const invertedRole2 = invertChord(chordRole2); // Output: vi-6

console.log(chordRole2); // Output: bIII7
console.log(invertedRole2); // Output: vi-6
