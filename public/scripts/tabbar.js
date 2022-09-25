var write = document.getElementById("Write")
var read = document.getElementById("Read")
var clear = document.getElementById("Clear")

function opentab(e ,o) {
    if (o === "Write") {
        write.style.display = "block";
        read.style.display = "none";
        clear.style.display = "none";
    }
    if (o === "Read") {
        read.style.display = "block";
        write.style.display = "none";
        clear.style.display = "none";
    }
    if (o === "Clear") {
        clear.style.display = "block";
        read.style.display = "none";    
        write.style.display = "none";
    }
}

window.onload = function() {
    write.style.display = "block";
    read.style.display = "none";
    clear.style.display = "none";
}

var cont = document.getElementsById("load-cont")

window.onloadstart = function() {
    cont.style.display = "flex";
}


window.onloadend = function() {
    cont.style.display = "none";
}