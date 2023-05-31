const burgerIcon = document.querySelector(".burger-icon");
const closeIcon = document.querySelector(".close-icon");
const burgerBtn = document.querySelector(".burger-btn");
const primaryItems = document.querySelectorAll(".nav__primary-item");

const handleNav = () => {
	closeIcon.classList.toggle("active");
	burgerIcon.classList.toggle("active");
};

function toggleSubMenu(item) {
	const subMenu = item.nextElementSibling;

	primaryItems.forEach(primaryItem => {
		if (primaryItem !== item) {
			const otherSubMenu = primaryItem.nextElementSibling;
			otherSubMenu.classList.remove("active");

		}
	});
	subMenu.classList.toggle("active");
}

burgerBtn.addEventListener("click", handleNav);

primaryItems.forEach(item => {
	item.addEventListener("click", () => {
		toggleSubMenu(item);
	});
});
