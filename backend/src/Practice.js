// Testing
var customers = [
  {id : 1, name : "Arun" },
  {id : 2, name : "Kumar"}
]

module.exports = {
    get : function() {
        return JSON.stringify(customers);},
    
    post : function(data) {
        customers.push(data);
        return JSON.stringify(customers);
    }
    
}