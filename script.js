
var alp = "abcdefghijklmnopqrstuvwxyz";

function caesarCipher() {
    var text = document.getElementById("caesarText").value.toLowerCase();
    var key = parseInt(document.getElementById("caesarKey").value);
    var result = "";

    for (var i = 0; i < text.length; i++) {
        var index = alp.indexOf(text[i]);

        if (index !== -1) {
            result += alp[index + key]; 
        } else {
            result += text[i];
        }
    }
    document.getElementById("caesarResult").value = result;
}

var keym= [
    [3, 3],
    [2, 5]
];

function hill() {
    var text = document.getElementById("hillText").value.toLowerCase();

    if (text.length !== 2) {
        alert("Enter letter");
        return;
    }

    var p1 = alp.indexOf(text[0]);
    var p2 = alp.indexOf(text[1]);

    var c1 = (keym[0][0] * p1 + keym[0][1] * p2) % 26;
    var c2 = (keym[1][0] * p1 + keym[1][1] * p2) % 26;

    document.getElementById("hillResult").value =
        alp[c1] + alp[c2];
}
