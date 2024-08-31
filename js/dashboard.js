function toggle(){
	document.getElementById("sidebar").classList.toggle("show");
	document.getElementById("bar").style.display="none";
	document.getElementById("cross").style.display="block";
}
function toggleCross(){
	document.getElementById("sidebar").style.display="none";
	document.getElementById("cross").style.display="none";
	document.getElementById("bar").style.display="block";
}
function studentHover(){
	document.getElementById("student-hide").style.display="none";
	document.getElementById("student-giff").style.display="block";
}
function studentHoverFinish(){
	document.getElementById("student-giff").style.display="none";
	document.getElementById("student-hide").style.display="block";
}