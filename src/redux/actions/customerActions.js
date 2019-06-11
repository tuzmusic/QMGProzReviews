export function searchCustomers({ text, customers, searchField }) {
  // debugger;
  return customers.filter(c => c[searchField] === text);
}
