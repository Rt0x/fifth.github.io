const radios = document.querySelectorAll('input[type="radio"]');
const but = document.querySelector('button');

function calculateCost() {
  let size = 0;
  let crust = 0;
  let toppings = 0;

  // Get selected size
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      size = parseFloat(radios[i].value);
      break;
    }
  }

  // Get selected crust
  const crustSelect = document.getElementById('crust');
  crust = parseFloat(crustSelect.value);

  // Get selected toppings
  const toppingsSelect = document.getElementById('toppings');
  toppings = parseFloat(toppingsSelect.value);

  // Calculate total cost
  const totalCost = size + crust + toppings;

  // Display total cost
  const costDisplay = document.getElementById('cost');
  costDisplay.textContent = totalCost.toFixed(2);
}

function toggleFields() {
  const extraFields = document.getElementById('extra-fields');
  
  if (but.checked) {
    extraFields.style.display = 'block';
  } else {
    extraFields.style.display = 'none';
  }
}

// Add event listener to calculate button
but.addEventListener('click', calculateCost);

// Add event listener to toggle button
radios.forEach((radio) => {
  radio.addEventListener('change', toggleFields);
});
