console.log("script setsize loaded")

function SetSize() {
    var selind = document.getElementById("size-selected").options.selectedIndex;
    var txt = document.getElementById("size-selected").options[selind].text;
    var val = document.getElementById("size-selected").options[selind].value;
    if (selind > 1) {
        console.log("Теxt= " + txt + " " + "Value= " + val);
        document.getElementById('textedit').style.fontSize = document.getElementById("size-selected").options[selind].value;
    }
}