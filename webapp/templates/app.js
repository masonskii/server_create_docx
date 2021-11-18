var socket = new WebSocket("ws://127.0.0.1:5678/");
var btn = document.getElementsByClassName('btnLoaded');

const response = {
    text: 0,
    fontStyle: 0,
    fontSize: 0
}
socket.readyState = socket.OPEN

function btn_click() {
    var selindSize = document.getElementById("size-selected").options.selectedIndex;
    var selindFont = document.getElementById("font-selected").options.selectedIndex;
    if (selindSize === 0 || selindFont === 0) {
        alert('Выберите шрифт и размер шрифта')
    } else {
        //if (!isOpen(socket)) return;
        response.text = document.getElementById('textedit').value;
        response.fontStyle = document.getElementById("font-selected").options[selindFont].value;
        var x = document.getElementById("size-selected").options[selindSize].value.slice(0, -2);
        response.fontSize = x
        socket.send(JSON.stringify(response))
        document.getElementById('btnload').style.display = 'inline-block'
        cross_download("../document.docx", "document.docx");
    }
}


function cross_download(url, fileName) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);
    req.responseType = "blob";
    var __fileName = fileName;
    req.onload = function(event) {
        var blob = req.response;
        var link = document.createElement('a');
        document.body.appendChild(link);
        link.download = __fileName;
        link.href = window.URL.createObjectURL(blob);
        link.click();
        document.body.removeChild(link);

    };
    req.send();
}