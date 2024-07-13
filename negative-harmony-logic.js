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
    console.log(`getChordRole - keyCenter: ${keyCenter}, chordName: ${chordName}`);
    
    const chordPattern = /^([A-G][#b]?)(.*)$/;
    const match = chordName.match(chordPattern);

    if (!match) {
        console.log("Invalid chord name");
        return "Invalid chord name";
    }

    const [_, chordRoot, chordType] = match;
    console.log(`Chord root: ${chordRoot}, Chord type: ${chordType}`);

    const tonicIndex = chromaticScale.indexOf(keyCenter);
    const chordRootIndex = chromaticScale.indexOf(chordRoot);

    if (tonicIndex === -1 || chordRootIndex === -1) {
        console.log("Invalid key center or chord root");
        return "Invalid key center or chord root";
    }

    const interval = (chordRootIndex - tonicIndex + 12) % 12;
    const roleBase = chordRoleMap[interval] || "Unknown interval";

    const role = `${roleBase}${chordType.toLowerCase()}`;
    console.log(`Chord role: ${role}`);
    return role;
}

function invertChord(chordRole) {
    console.log(`invertChord - chordRole: ${chordRole}`);
    const invertedRole = roleConversionMap[chordRole] || "Unknown role";
    console.log(`Inverted role: ${invertedRole}`);
    return invertedRole;
}

function getChordLetter(keyCenter, chordRole) {
    console.log(`getChordLetter - keyCenter: ${keyCenter}, chordRole: ${chordRole}`);
    
    const majorScale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];

    function findKeyIndex(key) {
        return majorScale.indexOf(key);
    }

    function calculateInterval(startIndex, steps) {
        return (startIndex + steps) % majorScale.length;
    }

    const intervals = {
        'I': 0, 'bII': 1, 'II': 2, 'bIII': 3, 'III': 4, 'IV': 5, 'bV': 6,
        'V': 7, 'bVI': 8, 'VI': 9, 'bVII': 10, 'VII': 11,
        'i': 0, 'bii': 1, 'ii': 2, 'biii': 3, 'iii': 4, 'iv': 5, 'bv': 6,
        'v': 7, 'bvi': 8, 'vi': 9, 'bvii': 10, 'vii': 11
    };

    const roleMatch = chordRole.match(/[b#]?[IViv]+/);
    const role = roleMatch ? roleMatch[0] : '';
    const suffix = chordRole.slice(role.length);

    console.log(`Role: ${role}, Suffix: ${suffix}`);

    const keyIndex = findKeyIndex(keyCenter);
    if (keyIndex === -1) {
        console.log("Invalid key center");
        return "Invalid key center";
    }

    const newIndex = calculateInterval(keyIndex, intervals[role]);
    const chordLetter = majorScale[newIndex];

    const result = chordLetter + suffix;
    console.log(`Chord letter: ${result}`);
    return result;
}

function processChord(keyCenter, chordName) {
    console.log(`processChord - keyCenter: ${keyCenter}, chordName: ${chordName}`);
    const chordRole = getChordRole(keyCenter, chordName);
    const invertedRole = invertChord(chordRole);
    const chordLetter = getChordLetter(keyCenter, invertedRole);
    console.log(`Final result: ${chordLetter}`);
    return chordLetter;
}

// Example usage
const keyCenter = "C";
const chordName = "C";
const result = processChord(keyCenter, chordName);

console.log(result); // Expected Output: "C-b6"
