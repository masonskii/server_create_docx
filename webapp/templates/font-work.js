console.log("script setfont loaded")

function SetFont() {
    // получаем индекс выбранного элемента

    var selind = document.getElementById("font-selected").options.selectedIndex;
    var txt = document.getElementById("font-selected").options[selind].text;
    var val = document.getElementById("font-selected").options[selind].value;
    if (selind > 1) {
        console.log("Теxt= " + txt + " " + "Value= " + val);
        document.getElementById('textedit').style.fontFamily = document.getElementById("font-selected").options[selind].value;
    }
}