const bars = document.querySelector(".bars");
const menus = document.querySelector(".menu");
bars.addEventListener("click", function (e) {
	e.preventDefault();
	menus.classList.toggle("show");
});
const menu = [
	{
		id: 1,
		title: "Lorem Ipsum",
		category: "school",
		price: 25,
		img: "image/schoolbag1.jpg",
		desc: "Lorem ipsum dolor",
	},
	{
		id: 2,
		title: "Lorem Ipsum",
		category: "school",
		price: 30,
		img: "image/schoolbag3.jpg",
		desc: "Lorem ipsum dolor",
	},
	{
		id: 3,
		title: "Lorem Ipsum",
		category: "school",
		price: 35,
		img: "image/schoolbag2.jpg",
		desc: "Lorem ipsum dolor",
	},
	{
		id: 4,
		title: "Lorem Ipsum",
		category: "school",
		price: 15,
		img: "image/schoolbag4.jpg",
		desc: "Lorem ipsum dolor",
	},
	{
		id: 5,
		title: "Lorem Ipsum",
		category: "luxury",
		price: 25,
		img: "image/item1.jpg",
		desc: "Lorem ipsum dolor",
	},
	{
		id: 6,
		title: "Lorem Ipsum",
		category: "luxury",
		price: 25,
		img: "image/item2.jpg",
		desc: "Lorem ipsum dolor",
	},
	{
		id: 7,
		title: "Lorem Ipsum",
		category: "luxury",
		price: 25,
		img: "image/item3.jpg",
		desc: "Lorem ipsum dolor",
	},
	{
		id: 8,
		title: "Lorem Ipsum",
		category: "luxury",
		price: 25,
		img: "image/item4.jpg",
		desc: "Lorem ipsum dolor",
	},
	{
		id: 9,
		title: "Lorem Ipsum",
		category: "dinner",
		price: 25,
		img: "image/luxury1.jpg",
		desc: "Lorem ipsum dolor",
	},
	{
		id: 10,
		title: "Lorem Ipsum",
		category: "dinner",
		price: 25,
		img: "image/luxury2.jpg",
		desc: "Lorem ipsum dolor",
	},
	{
		id: 11,
		title: "Lorem Ipsum",
		category: "dinner",
		price: 25,
		img: "image/luxury3.jpg",
		desc: "Lorem ipsum dolor",
	},
	{
		id: 12,
		title: "Lorem Ipsum",
		category: "dinner",
		price: 25,
		img: "image/luxury4.jpg",
		desc: "Lorem ipsum dolor",
	},
	{
		id: 13,
		title: "Lorem Ipsum",
		category: "designer",
		price: 25,
		img: "image/item5.jpg",
		desc: "Lorem ipsum dolor",
	},
	{
		id: 14,
		title: "Lorem Ipsum",
		category: "designer",
		price: 25,
		img: "image/item6.jpg",
		desc: "Lorem ipsum dolor",
	},
	{
		id: 15,
		title: "Lorem Ipsum",
		category: "designer",
		price: 25,
		img: "image/item7.jpg",
		desc: "Lorem ipsum dolor",
	},
	{
		id: 16,
		title: "Lorem Ipsum",
		category: "designer",
		price: 25,
		img: "image/item8.jpg",
		desc: "Lorem ipsum dolor",
	},
];

const items = document.querySelector(".item-container");
const container = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function (e) {
	displayItems(menu);
    e.preventDefault();
    displayButton();
});
function displayItems(menuItems) {
	let displayMenu = menuItems.map(function (item) {
		return `<a href="">
						<div class="item">
							<img src=${item.img} alt=${item.title} />
							<div class="item-con">
								<p><strong>${item.title}</strong></p>
								<div class="d-flex justify-content-between">
									<p>${item.category}</p>
									<p><strong>$ ${item.price}</strong></p>
								</div>
							</div>
						</div>
					</a>`;
	});
	displayMenu = displayMenu.join("");
	items.innerHTML = displayMenu;
}

// display buttons

function displayButton() {
	const categories = menu.reduce(
		function (values, items) {
			if (!values.includes(items.category)) {
				values.push(items.category);
			}
			return values;
		},
		["all"]
	);
	const categoryBtns = categories
		.map(function (category) {
			return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`;
		})
		.join("");
	container.innerHTML = categoryBtns;
	//filter items

	const filterBtns = document.querySelectorAll(".filter-btn");

	filterBtns.forEach(function (btn) {
		btn.addEventListener("click", function (e) {
			const category = e.currentTarget.dataset.id;
			const menuCategory = menu.filter(function (menuItem) {
				if (menuItem.category === category) {
					return menuItem;
				}
			});
			if (category === "all") {
				displayItems(menu);
			} else {
				displayItems(menuCategory);
			}
		});
	});
}
