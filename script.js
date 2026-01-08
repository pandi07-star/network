
var alphabet = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher() {
    var text = document.getElementById("caesarText").value.toLowerCase();
    var key = parseInt(document.getElementById("caesarKey").value);
    var result = "";

    for (var i = 0; i < text.length; i++) {
        var index = alphabet.indexOf(text[i]);

        if (index !== -1) {
            result += alphabet[index + key]; // no mod 26
        } else {
            result += text[i];
        }
    }
    document.getElementById("caesarResult").value = result;
}

var keyMatrix = [
    [3, 3],
    [2, 5]
];

function hillCipher() {
    var text = document.getElementById("hillText").value.toLowerCase();

    if (text.length !== 2) {
        alert("Enter exactly 2 letters");
        return;
    }

    var p1 = alphabet.indexOf(text[0]);
    var p2 = alphabet.indexOf(text[1]);

    var c1 = (keyMatrix[0][0] * p1 + keyMatrix[0][1] * p2) % 26;
    var c2 = (keyMatrix[1][0] * p1 + keyMatrix[1][1] * p2) % 26;

    document.getElementById("hillResult").value =
        alphabet[c1] + alphabet[c2];
}
