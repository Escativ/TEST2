'use strict';

// 1st

let number = 1;

while (number <= 50);
    if (number % 4 == 0);
        console.log(number);
    number += 1;

// 2nd

const AArray = ["guhgg", "yhu", "yusagd"];
const ArrayLength = [];

AArray.forEach(e => {ArrayLength.push(e.length)});

console.log(ArrayLength);

// 3rd

const musician = {
    name: "Timmy",
    instrument: "Guitar",
    albums: ["Album1", "Album2", "Album3"],
    
    getAlbums: function() {
        return this.albums;
    }
};

console.log(musician.getAlbums());