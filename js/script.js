function openside(){
    document.getElementById("sidebar").style.left = "0px";
    document.getElementById("openbar").style.visibility = "hidden";
    document.getElementById("closebar").style.visibility = "visible";
    document.getElementById("background").style.left = "260px";
    document.getElementById("background").style.width = "calc(100% - 260px)";
    document.getElementById("buttonbar").style.display = "none";
    document.getElementById("background").style.transitionDuration = "1s";
}

function closeside(){
    document.getElementById("sidebar").style.left = "-260px";
    document.getElementById("openbar").style.visibility = "visible";
    document.getElementById("closebar").style.visibility = "hidden";
    document.getElementById("openbar").style.left = "5px";
    document.getElementById("background").style.left = "0px";
    document.getElementById("background").style.width = "100%";
    document.getElementById("background").style.transitionDuration = "1s";
    document.getElementById("buttonbar").style.display = "block";
}

function side1(){
	document.getElementById("hide").style.transform = "translate(-260px)";
	document.getElementById("hardpoints").style.visibility = "visible";
	document.getElementById("hardpoints").style.transform = "translate(-260px)";
}

function side2(){
	document.getElementById("hide").style.transform = "translate(-260px)";
	document.getElementById("analysis").style.visibility = "visible";
	document.getElementById("analysis").style.transform = "translate(-260px)";
}

function back(){
	document.getElementById("hide").style.transform = "translate(0px)";
	document.getElementById("analysis").style.visibility="hidden";
	document.getElementById("hardpoints").style.visibility="hidden";
	document.getElementById("analysis").style.transform = "translate(0px)";
	document.getElementById("hardpoints").style.transform = "translate(0px)";
}
