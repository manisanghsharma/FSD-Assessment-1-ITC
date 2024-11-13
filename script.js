const total = document.getElementById('total')
const quantity = document.getElementById('quantity')
const btn = document.querySelector('.btn')

function updateTotal() {
    total.innerHTML = `Total Price: Rs: ${quantity.value * 100}`
}

quantity.addEventListener('input', updateTotal)

updateTotal()

btn.addEventListener("click", () => {
    alert(
			`You added ${quantity.value} items to your cart for Rs.${
				quantity.value * 100
			}`
		);
})