


// PULL USER INPUT FROM PAGE

function getValues() {
    let userString = document.getElementById("reverseString").value;

    //  CALL REVERSE A STRING ------
    reverseAString(userString);
    let revString = reverseAString(userString);

    // DISPLAY THE REVERSED STRING ------
    displayData(revString);

    Swal.fire(
        'Button clicked!',
        userMessage,
        "success"
    );
}

// -------------------THIS GENERATES DATA -------------
function reverseAString (userString) {

    let revString = "";

    for (let i = userString.length - 1; i >= 0; i--) {
        revString += userString[i];
    }

    return revString;
}

// ------------------------ DISPLAY THE REVERSED STRING TO PAGE --------
function displayData (revString) {

    document.getElementById("msg").innerHTML = `Your string reversed is: ${revString}`;

    document.getElementById("alert").classList.remove("d-none");

}