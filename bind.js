// bind vs call

// call will directly call the function
// whereas bind will return the function

const radha = {
name: "radha", sayName: function () { console.log(this.name);
},
const aman = {
name: "Aman Bhoria", sayName: function () { console.log(this.name);
},

aman.SayName.call(radha); 
const newFun = aman.SayName.bind(radha);

// I can call newFun as many times I want 
