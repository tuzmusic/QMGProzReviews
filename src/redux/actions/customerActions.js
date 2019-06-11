export function searchCustomers({ text, customers, searchField }) {
  return customers.filter(c => c[searchField] === text);
}
