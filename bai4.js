let customers = [];

document.getElementById('add-customer-form').addEventListener('submit', (e) => {
  e.preventDefault();
  let customer = {
    customer_id: document.getElementById('customer-id').value,
    name: document.getElementById('name').value,
    phone_number: document.getElementById('phone-number').value,
    address: document.getElementById('address').value,
    email: document.getElementById('email').value
  };
  customers.push(customer);
  displayCustomers();
  document.getElementById('add-customer-form').reset();
});

function displayCustomers() {
  let customerListBody = document.getElementById('customer-list-body');
  customerListBody.innerHTML = '';
  customers.forEach((customer) => {
    let row = document.createElement('tr');
    row.innerHTML = `
      <td>${customer.customer_id}</td>
      <td>${customer.name}</td>
      <td>${customer.phone_number}</td>
      <td>${customer.address}</td>
      <td>${customer.email}</td>
    `;
    customerListBody.appendChild(row);
  });
}