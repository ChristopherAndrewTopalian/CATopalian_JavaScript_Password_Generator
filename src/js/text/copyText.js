// copyText.js

function copyText()
{
    let copyText = document.getElementById("passwordTextBox");

    copyText.select();

    copyText.setSelectionRange(0, 1000);

    document.execCommand("copy");

    console.log(document.getElementById("passwordTextBox").value);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

