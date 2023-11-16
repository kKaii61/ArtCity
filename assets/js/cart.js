const products = [
	{
		id: 1,
		name: "Goddess Blessing",
        img: "./assets/img/painting/art-movements-timeline-hero.jpg",
        url: "./product_detail-01.html",
		country: "USA",
		price: 54,
	},
	{
		id: 2,
		name: "Autumn Water Color",
        img: "./assets/img/painting/autumn-leaves-backdrop.png",
        url: "./product_detail-02.html",
		country: "USA",
		price: 359,
	},
	{
		id: 3,
		name: "The Bluehole Of Legend",
        img: "./assets/img/painting/Bluehole-Of-Star.png",
        url: "./product_detail-03.html",
		country: "USA",
		price: 700,
	},
	{
		id: 4,
		name: "Goddess Blessing",
        img: "./assets/img/painting/Blurred-Home.png",
        url: "./product_detail-04.html",
		country: "USA",
		price: 490,
	},
	{
		id: 5,
		name: "Goddess Blessing",
        img: "./assets/img/painting/Butterfly-Girl.png",
        url: "./product_detail-05.html",
		country: "USA",
		price: 299,
	},
	{
		id: 6,
		name: "Goddess Blessing",
        img: "./assets/img/painting/Exhibit-The-Shape-of-Dreams.jpg",
        url: "./product_detail-06.html",
		country: "USA",
		price: 1309,
	},
	{
		id: 7,
		name: "Goddess Blessing",
        img: "./assets/img/painting/Future-Would_Crazy.jpeg",
        url: "./product_detail-07.html",
		country: "USA",
		price: 355,
	},
	{
		id: 8,
		name: "Goddess Blessing",
        img: "./assets/img/painting/Idian-God.jpeg",
        url: "./product_detail-08.html",
		country: "USA",
		price: 656,
	},
	{
		id: 9,
		name: "Goddess Blessing",
        img: "./assets/img/painting/Rotten-Color.png",
        url: "./product_detail-09.html",
		country: "USA",
		price: 4000,
	},
	{
		id: 10,
		name: "Goddess Blessing",
        img: "./assets/img/painting/ShadeOfMan.png",
        url: "./product_detail-10.html",
		country: "USA",
		price: 2500,
	},
];

generateTable(products);

function handleChangeSelect(selectElement) {
    
	const selectedValue = selectElement.value;
    let newProducts = [];
	if (selectedValue === "0") {
		newProducts = products;
	} 
	if (selectedValue === "1") {
		newProducts = products.filter(
			(p) => p.price >= 0 && p.price <= 10
		);
	} else if (selectedValue === "2") {
		newProducts = products.filter(
			(p) => p.price >= 10 && p.price <= 100
		);
	} else if (selectedValue === "3") {
		newProducts = products.filter(
			(p) => p.price >= 100 && p.price <= 500
		);
        console.log(newProducts);
	} else if (selectedValue === "4") {
		newProducts = products.filter(
			(p) => p.price >= 500 && p.price <= 1000
		);
	} else if (selectedValue === "5") {
		newProducts = products.filter((p) => p.price > 1000);
	} else if (selectedValue === "6") {
		newProducts = products.sort((p1, p2) => p1.price - p2.price);
	} else if (selectedValue === "7") {
		newProducts = products.sort((p1, p2) => p2.price - p1.price);
	}

    // Remove existing rows from the table
    const tableBody = document.querySelector('.cart-table tbody');
    while (tableBody.firstChild) {
        tableBody.removeChild(tableBody.firstChild);
    }
    
generateTable(newProducts);

}



function generateTable(products) {
    const tableBody = document.querySelector('.cart-table tbody');
  
    products.forEach(product => {
        const row = tableBody.insertRow();
        const checkboxCell = row.insertCell(0);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.addEventListener('change', () => {
            updateNumberInput(checkbox, row);
        });
        checkboxCell.appendChild(checkbox);
    
        row.insertCell(1).textContent = product.name;

        const imgCell = row.insertCell(2);
        const img = document.createElement('img');
        img.src = product.img;
        img.alt = product.name;
        img.style.width = '100px';
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            window.location.href = product.url;
        });
        imgCell.appendChild(img);

        row.insertCell(3).textContent = `$${product.price.toFixed(2)}`;

        const numberCell = row.insertCell(4);
        const numberInput = document.createElement('input');
        numberInput.type = 'number';
        numberInput.value = 1;
        numberInput.min = 1;
        numberInput.disabled = true;
        numberInput.addEventListener('input', () => {
          updateTotal(row, product);
        });
        numberCell.appendChild(numberInput);
    
        const totalCell = row.insertCell(5);
        totalCell.textContent = ''; // Initialize with an empty string
    
        function updateTotal(row, product) {
          const numberInput = row.cells[4].querySelector('input');
          const totalCell = row.cells[5];
          const quantity = parseFloat(numberInput.value);
    
          if (quantity > 0) {
            const totalPrice = product.price * quantity;
            totalCell.textContent = `$${totalPrice.toFixed(2)}`;
          } else {
            totalCell.textContent = ''; // Set to empty if quantity is not positive
          }
    
          updateTotalPrice();
        }
    
        function updateNumberInput(checkbox, row) {
          const numberInput = row.cells[4].querySelector('input');
          const totalCell = row.cells[5];
    
          if (checkbox.checked) {
            numberInput.disabled = false;
            totalCell.style.visibility = 'visible';
            updateTotal(row, product); // Update total when checkbox is checked
          } else {
            numberInput.disabled = true;
            numberInput.value = 1;
            totalCell.style.visibility = 'hidden';
            totalCell.textContent = ''; // Set to empty when checkbox is not checked
            updateTotalPrice();
          }
        }
        
        // Select all checkbox functionality
        const selectAllCheckbox = document.getElementById('select-all');
        selectAllCheckbox.addEventListener('change', () => {
            const allCheckboxes = document.querySelectorAll('tbody input[type="checkbox"]');
            allCheckboxes.forEach(checkbox => {
            checkbox.checked = selectAllCheckbox.checked;
            const row = checkbox.closest('tr');
            updateNumberInput(checkbox, row, product);
            });
            updateTotalPrice();
        });


    });


    // Add a row for the total at the bottom of the table
    const totalRow = tableBody.insertRow();
totalRow.id = 'total-row';

// Column for the "Total" label spanning 5 columns
const totalLabelCell = totalRow.insertCell(0);
totalLabelCell.colSpan = 5;
totalLabelCell.textContent = 'Total:';
totalLabelCell.style.fontSize = '1.4rem';
totalLabelCell.style.fontWeight = '400';

// Column for the total value occupying the remaining column
const totalValueCell = totalRow.insertCell(1);
totalValueCell.id = 'total-value';
totalValueCell.colSpan = 1; // Set the appropriate number of columns

    // Initial update of the total price
    updateTotalPrice();

    
    // function updateTotalPrice() {
    //     let total = 0;
    //     const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]:checked');
    //     checkboxes.forEach(checkbox => {
    //       const row = checkbox.closest('tr');
    //       const totalCell = row.cells[5];
    //       total += parseFloat(totalCell.textContent.replace('$', '')) || 0;
    //     });
    //      // Ensure totalPriceSpan is initialized before accessing it
    //     if (!totalPriceSpan) {
    //         totalPriceSpan = document.querySelector('.total-price');
    //     }
    //     totalPriceSpan.textContent = `$${total.toFixed(2)}`;
    // }

    
    function updateTotalPrice() {
        let total = 0;
        const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]:checked');
        checkboxes.forEach(checkbox => {
            const row = checkbox.closest('tr');
            const totalCell = row.cells[5]; // Assuming this cell contains the total price
            const totalPriceText = totalCell.textContent.trim().replace('$', '');
            total += parseFloat(totalPriceText) || 0;
        });
    
        // Update the total value in the total row
        const totalValueCell = document.getElementById('total-value');
        if (totalValueCell) {
            totalValueCell.textContent = `$${total.toFixed(2)}`;
        }

         // Update the total price in the <dd> element
        const totalPriceDd = document.getElementById('total-price');
        if (totalPriceDd) {
            console.log(total);
            totalPriceDd.textContent = `$${total.toFixed(2)}`;
        }

        //Discount apply
        const applyCouponButton = document.querySelector('.btn-apply.coupon');
        if (applyCouponButton) {
            applyCouponButton.addEventListener('click', function(event) {
                // Ngăn chặn hành vi mặc định của nút (quay lại đầu trang)
                event.preventDefault();
                
                updateTotalPrice;
            });
        }


        // Check discountt
        const couponInput = document.querySelector('.coupon');
        const discountValueDd = document.getElementById('discount-value');

        if (couponInput.value === '123') {
            // Apply a fixed discount value, e.g., $10.00
            const discountAmount = 10.00;

            // Update the discount display
            discountValueDd.textContent = `- $${discountAmount.toFixed(2)}`;

            // Deduct the discount from the total
            total -= discountAmount;

            // Ensure the total doesn't go below zero
            total = Math.max(total, 0);
            // discountValueDd.textContent = '- $10.00';
        } else {
            // Reset the discount display
            discountValueDd.textContent = '- $0.00';
        }
    
        //Update the new total after discount
         // Update the total price in the <dd> element
        const newTotalDd = document.getElementById('new-total');
        if (newTotalDd) {
            newTotalDd.textContent = `$${total.toFixed(2)}`;
        }

        // Toggle visibility of the payment button
        const paymentButton = document.getElementById('payment-button');
        if (paymentButton) {
            if (total > 0 && checkboxes.length > 0) {
                paymentButton.style.display = 'block';
            } else {
                paymentButton.style.display = 'none';
            }
        }
    
      
    }

}



// Initial table generation
generateTable();

