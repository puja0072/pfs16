let car = {
    brand:"honda",
    model:"corolla",
    year:2018
};
console.log(car.brand);
console.log(car.model);
console.log(car.year);

let person = {};
    person.firstname="java";
    person.lastname="script";
    person.age=23;

delete person.age;

console.log(person);

let book ={
    title:"hill",
    author:"jackson"
};
function hasproperty (obj,key){
    return key in obj;
}
console.log(book.title);
console.log(book.author);

let student = {
    name: "John",
    age: 21,
    grade: "A"
  };
  
  for (let key in student) {
    console.log(`${key}: ${student[key]}`);
  }

  function countProperties(obj) {
    let count = 0;
    for (let key in obj) {
      count++;
    }
    return count;
  }
  
  let user = {
    name: "John",
    age: 30,
    isAdmin: true
  };
  
  console.log(countProperties(user));  

  



