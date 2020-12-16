//1
function swap() {
    var tmp = document.getElementById('top-text-right').innerHTML;
    document.getElementById('top-text-right').innerHTML = document.getElementById('bottom-text-right').innerHTML;
    document.getElementById('bottom-text-right').innerHTML = tmp;
}

//5
var counter = 0;
function onMouseOverSwaper() {
    swap();
}
//4
function checkItalic() {
    if (document.getElementById('menu').style.fontStyle == "italic")
        localStorage.setItem('italic', '0');
    else
        localStorage.setItem('italic', '1');
}

function setItalic() {
    checkItalic();
    if (localStorage.getItem('italic') == '1')
        document.getElementById('menu').style.fontStyle = "italic";
    else
        document.getElementById('menu').style.fontStyle = "Normal";
}
if (localStorage.getItem('italic') == '1')
    document.getElementById('menu').style.fontStyle = "italic";

//3
function triangleExistence() {
    let a = Number(document.getElementById('a').value);
    let b = Number(document.getElementById('b').value);
    let c = Number(document.getElementById('c').value);
    if ((a + b > c) && (a + c > b) && (b + c > a)) {
        alert("Triangle exist");
        document.cookie = "Exist=1";
    }
    else {
        alert("Triangle doesn't exist");
        document.cookie = "notExist=0";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    reloadPage();
});


function reloadPage() {
    let someCoockie = document.cookie;
    if (someCoockie !== "") {
        var cookies = document.cookie.split(";");
        if (confirm("Do you want to delete cookies: " + cookies + "?")) {
            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i];
                var eqPos = cookie.indexOf("=");
                var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }
            location.reload();
        }
        else {
            alert("There are some cookies: " + cookies + "\nRELOAD PAGE");
        }
    }
}

function checkHandler() {
    triangleExistence();
}
//6
const arr = ['header', 'menu', 'cars', 'charachteristics', 'content-bottom', 'footer', 'hidden-block'];
function getIndex() {
    let index = document.getElementById('blocks').value;
    return index;
}
getIndex();

if (!sessionStorage.getItem("load")) {
    console.log("Start page");
    sessionStorage.setItem("load", true);
    document.getElementById("changer").value = document.getElementById(arr[getIndex() - 1]).innerHTML;
    ChangeAll();
}
else {
    document.getElementById(arr[getIndex() - 1]).innerHTML = localStorage.getItem("changer");
    document.getElementById("changer").value = document.getElementById(arr[getIndex() - 1]).innerHTML;
    ChangeAll();
}

function ChangeAll() {
    let button_change_header = document.getElementById("changerButton");
    button_change_header.addEventListener("click", ChangeText);
}


function ChangeText() {

    document.getElementById(arr[getIndex() - 1]).innerHTML = document.getElementById("changer").value;
    document.getElementById("changer").value = document.getElementById(arr[getIndex() - 1]).innerHTML;
    localStorage.setItem("changer", document.getElementById(arr[getIndex() - 1]).innerHTML);
}

for(let i = 1; i < 8; i++)
{
    localStorage.setItem(i.toString(), document.getElementById(arr[i - 1]).innerHTML);
}

function addToArea() {
    let index = document.getElementById('blocks').value;
    return document.getElementById("changer").value = document.getElementById(arr[getIndex() - 1]).innerHTML;
}

function restoreArea(){
    let index = document.getElementById('blocks').value;
    document.getElementById("changer").value = localStorage.getItem(index.toString());
    ChangeText();
}