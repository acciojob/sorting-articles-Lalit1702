//your JS code here. If required.
// script.js

const bands = [
    'The Plot in You', 
    'The Devil Wears Prada', 
    'Pierce the Veil', 
    'Norma Jean', 
    'The Bled', 
    'Say Anything', 
    'The Midway State', 
    'We Came as Romans', 
    'Counterparts', 
    'Oh, Sleeper', 
    'A Skylit Drive', 
    'An Old Dog'
];

// Function to strip articles from the band name
function strip(bandName) {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

// Sort the bands array
const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

// Populate
