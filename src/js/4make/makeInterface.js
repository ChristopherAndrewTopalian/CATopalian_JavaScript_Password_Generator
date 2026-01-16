// makeInterface.js

function makeInterface()
{
    let mainDiv = ce("div");
    mainDiv.className = "mainDiv";
    ba(mainDiv);

    //-//

    mainDiv.append(makeTitleOfApp());

    //-//

    let passwordTextBox = ce("textarea");
    passwordTextBox.className = "passwordTextBox";
    passwordTextBox.id = "passwordTextBox";
    mainDiv.append(passwordTextBox);

    //-//

    let lineBelowPasswordTextBox = ce("hr");
    mainDiv.append(lineBelowPasswordTextBox);

    //-//

    let buttonSection = ce('div');
    mainDiv.append(buttonSection);

    //-//

    let generateButton = ce("button");
    generateButton.className = "button001";
    generateButton.innerHTML = "Generate";
    generateButton.onclick = function()
    {
        clickSound();
        generateRandomPassword(symbolsArray);
    };
    buttonSection.append(generateButton);

    //-//

    let copyButton = ce("button");
    copyButton.className = "button002";
    copyButton.innerHTML = "Copy";
    copyButton.onclick = function()
    {
        clickSound();
        copyText();
    };
    buttonSection.append(copyButton);

    //-//

    let lineBelowCopyButton = ce("hr");
    mainDiv.append(lineBelowCopyButton);

    //-//

    let passwordLengthTitle = ce("div");
    passwordLengthTitle.className = "passwordLengthTitle";
    passwordLengthTitle.innerHTML = "Password Length";
    mainDiv.append(passwordLengthTitle);

    //-//

    let passwordLengthTextBox = ce("input");
    passwordLengthTextBox.className = "passwordLengthTextBox";
    passwordLengthTextBox.id = "passwordLengthTextBox";
    passwordLengthTextBox.value = passwordLength;
    passwordLengthTextBox.onkeyup = function()
    {
        passwordLength = passwordLengthTextBox.value;

        ge("passwordLengthSlider").value = passwordLength;
    };
    mainDiv.append(passwordLengthTextBox);

    //-//

    let passwordLengthSlider = ce("input");
    passwordLengthSlider.className = "passwordLengthSlider";
    passwordLengthSlider.id = "passwordLengthSlider";
    passwordLengthSlider.type = "range";
    passwordLengthSlider.min = 1;
    passwordLengthSlider.max = 200;
    passwordLengthSlider.value = passwordLength;
    passwordLengthSlider.oninput = function()
    {
        sliderSound();
        ge("passwordLengthTextBox").value = passwordLengthSlider.value;

        passwordLength = ge("passwordLengthTextBox").value = passwordLengthSlider.value;
    };
    mainDiv.append(passwordLengthSlider);
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

