const products = [
	{
		id: 1,
		name: "Goddess Blessing",
        img: "./assets/img/painting/art-movements-timeline-hero.jpg",
        url: "./product_detail-01.html",
		country: "USA",
		price: 359,
	},
	{
		id: 2,
		name: "Goddess Blessing",
        img: "./assets/img/painting/art-movements-timeline-hero.jpg",
        url: "./product_detail-01.html",
		country: "USA",
		price: 359,
	},
	{
		id: 3,
		name: "Goddess Blessing",
        img: "./assets/img/painting/art-movements-timeline-hero.jpg",
        url: "./product_detail-01.html",
		country: "USA",
		price: 359,
	},
	{
		id: 4,
		name: "Goddess Blessing",
        img: "./assets/img/painting/art-movements-timeline-hero.jpg",
        url: "./product_detail-01.html",
		country: "USA",
		price: 359,
	},
	{
		id: 5,
		name: "Goddess Blessing",
        img: "./assets/img/painting/art-movements-timeline-hero.jpg",
        url: "./product_detail-01.html",
		country: "USA",
		price: 359,
	},
	{
		id: 6,
		name: "Goddess Blessing",
        img: "./assets/img/painting/art-movements-timeline-hero.jpg",
        url: "./product_detail-01.html",
		country: "USA",
		price: 359,
	},
	{
		id: 7,
		name: "Goddess Blessing",
        img: "./assets/img/painting/art-movements-timeline-hero.jpg",
        url: "./product_detail-01.html",
		country: "USA",
		price: 359,
	},
	{
		id: 8,
		name: "Goddess Blessing",
        img: "./assets/img/painting/art-movements-timeline-hero.jpg",
        url: "./product_detail-01.html",
		country: "USA",
		price: 359,
	},
	{
		id: 9,
		name: "Goddess Blessing",
        img: "./assets/img/painting/art-movements-timeline-hero.jpg",
        url: "./product_detail-01.html",
		country: "USA",
		price: 359,
	},
	{
		id: 10,
		name: "Goddess Blessing",
        img: "./assets/img/painting/art-movements-timeline-hero.jpg",
        url: "./product_detail-01.html",
		country: "USA",
		price: 359,
	},
];

function generateTable() {
    const tableBody = document.querySelector('.cart-table tbody');

    products.forEach(product => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = product.id;
        row.insertCell(1).textContent = product.name;
        
        const imgCell = row.insertCell(2);
        const img = document.createElement('img');
        img.src = product.img;
        img.alt = product.name;
        img.style.width = '100px'; // Adjust the image size as needed
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            window.location.href = product.url;
        });
        imgCell.appendChild(img);

        row.insertCell(3).textContent = `$${product.price.toFixed(2)}`;

                // Add input field for number (quantity)
                const numberCell = row.insertCell(4);
                const numberInput = document.createElement('input');
                numberInput.type = 'number';
                numberInput.value = 1;
                numberInput.min = 1;
                numberInput.addEventListener('input', updateTotal);
                numberCell.appendChild(numberInput);

                // Add total cell
                const totalCell = row.insertCell(5);
                totalCell.textContent = `$${product.price.toFixed(2)}`;

                function updateTotal() {
                    const quantity = parseFloat(numberInput.value);
                    const totalPrice = product.price * quantity;
                    totalCell.textContent = `$${totalPrice.toFixed(2)}`;
                }

    });
}

generateTable();