// generateRandomPassword.js

function generateRandomPassword(whichArray)
{
    // make an empty array named randomSymbolsArray
    let randomSymbolsArray = [];

    for (let i = 0; i < passwordLength; i++)
    {
        // for loop through whichArray
        for (let x = 0; x < whichArray.length; x++)
        {
            // add the random symbol to randomSymbolsArray
            randomSymbolsArray.push(whichArray[Math.floor(Math.random() * whichArray.length)]);
        }
    }

    // remove comma from randomSymbolsArray
    randomSymbolsArray = randomSymbolsArray.join("");

    // passwordLength is currently set to 12
    // below, we use the slice function to extract 12 items from randomSymbolsArray to create the random password
    // slice function has start and end parameters
    // we start the extraction at 0, and end the extraction up to, but not including the end: 12
    // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 means that we have extracted 12 items from randomSymbolsArray
    randomSymbolsArray = randomSymbolsArray.slice(0, passwordLength);

    // show the generated password randomSymbolsArray
    document.getElementById("passwordTextBox").innerHTML = randomSymbolsArray;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

