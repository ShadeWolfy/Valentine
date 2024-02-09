var clicked = false

//hier moet de cookie checker komen of er geklikt is.
window.onload = function () {
    var cookies = document.cookie.split(';')
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim().split('=');
        if (cookie[0] === "clicked") {
            clicked = cookie[1] === "true";
        } else if (cookie[0] === "text") {
            textNumber = parseInt(cookie[1]);
        }
    }

    if (clicked) {
        showTextCookie(textNumber);
    }
}

function showTextCookie(number) {
    var textId = "text" + number;
    var textElement = document.getElementById(textId);
    var textContainer = document.getElementById("text-container");

    // Verberg eerst alle tekst-elementen
    hideAllText();

    if (textElement) {
        // Toon het geselecteerde tekst-element
        textElement.style.display = "block";
        textContainer.style.display = "block"; // Toon de tekst-container als er een tekst wordt weergegeven
    }
}

function showText(number) {
    if (!clicked) {
        var textId = "text" + number;
        var textElement = document.getElementById(textId);
        var textContainer = document.getElementById("text-container");

        // Verberg eerst alle tekst-elementen
        hideAllText();

        if (textElement) {
            // Toon het geselecteerde tekst-element
            textElement.style.display = "block";
            textContainer.style.display = "block"; // Toon de tekst-container als er een tekst wordt weergegeven
        }

        clicked = true;

        document.cookie = "clicked=true";
        document.cookie = "text=" + number;
    }
}

function hideAllText() {
    // Verberg alle tekst-elementen
    var textElements = document.getElementsByClassName("text");

    for (var i = 0; i < textElements.length; i++) {
        textElements[i].style.display = "none";
    }

    // Verberg de tekst-container
    document.getElementById("text-container").style.display = "none";
}

function showImage(elem) {
    document.getElementById("display-frame").src = elem.nextElementSibling.src;
    var button = document.getElementById("button5");
    button.remove();
}