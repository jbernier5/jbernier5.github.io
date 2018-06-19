function myFunction() {
    var element = document.getElementById("lines")
    element.style.color = "red";
    element.style.fontFamily = "Arvo", Helvetica, sans-serif;
}

function myFunction2() {
    var element = document.getElementById("lines")
    element.style.color = "black";
    element.style.fontFamily = "Times New Roman";
}

function myFunction3() {
    var phrasearray = ["a genius!", "really, really, really, ridiculously good-looking.", "not a doctor!", "a pet psychiatrist.", "a professional killer.", "a part of the Illuminati", "a good boy", "not the father!", "not your father Luke", "a wizard?"];
    var rand = phrasearray[Math.floor(Math.random() * phrasearray.length)];
    didi = String("Hi I am " + rand)
    document.getElementById("lines").innerHTML = didi;
}