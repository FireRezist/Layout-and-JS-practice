let mapLink = document.querySelector(".link-map");
let modalMap = document.querySelector(".modal-map");
let mapClose = document.querySelector(".modal-map__button-close");

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	console.log("Клик проходит")
	modalMap.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	modalMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	if (evt.key === "Escape") {
		if (modalMap.classList.contains("modal-show")) {
			evt.preventDefault();
			modalMap.classList.remove("modal-show");
		}
	}
});