// function print(){
//     console.log("Hello")
// }

// setTimeout(print,2000)

// setInterval(print,2000)

// let car = {
//    takesfuel:"yes"
    
//  };

//  let bmw = {

//      launch:"2024"
// };

//  bmw.__proto__ = car;
//  console.log(bmw.launch);
//  console.log(bmw.takesfuel);

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// let fastanimal = {
//     runs: "fast"
// }

// rabbit.__proto__ = animal;
// fastanimal.__proto__ = rabbit;

// console.log(rabbit.eats);
// console.log(rabbit.jumps);
// console.log(fastanimal.runs);


// let animal1 ={
//     walk(){
//         console.log("animal walk")
//     }
// };

// var employee1 = {firstName:"john",lastName:"rodson"};
// var employee2 = {firstName:"david",lastNmae:"smith"};

// function invite(greeting1,greeting2){
//     console.log(
//         greeting1+""+this,firstName+""+this.lastName+","+greeting2
//     );

// }
// invite.call(employee1,"hello","Hhow are you");
// invite.apply(employee2,["hello","Hhow are you"]);


// var employee1 = {firstName:"john",lastName:"rodson"};
// var employee2 = {firstName:"david",lastNmae:"smith"};

// function invite(greeting1,greeting2){
//     console.log(
//         greeting1+""+this.firstName+""+this.lastName+","+greeting2
//     );

// }
//  var inviteEmployee1 = invite.bind(employee1);
//  var inviteEmployee2 = invite.bind(employee2);
//  inviteEmployee1("hello","how are you");
//  inviteEmployee2("hello","how are you");

 
        let element = document.querySelectorAll(".welcome");
        element[1].style.backgroundColor = "red";
    
    




