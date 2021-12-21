 
 const sayHi = ((name) => {
     console.log('Hello there '+name);
 });

 const sayGood = ((name) => {
     console.log('Good morning '+name);
 });


 module.exports.sayHi = sayHi;
 module.exports.sayGood = sayGood;