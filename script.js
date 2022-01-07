var coverHeaderMenu = document.getElementById("coverHeaderMenu");
var hamburgerButton = document.getElementById("hamburgerButton");

function openCloseMenu() {
	if(coverHeaderMenu.style.display === "flex"){
		coverHeaderMenu.style.display = "";
	}
	else {
		coverHeaderMenu.style.display = "flex";
	}
}


hamburgerButton.addEventListener('click', openCloseMenu);