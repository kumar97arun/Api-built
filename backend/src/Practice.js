// Testing
var customers = [
  {id : 1, name : "Arun" },
  {id : 2, name : "Kumar"}
]

module.exports = function(getCustomers) {
  return JSON.stringify(customers);
}