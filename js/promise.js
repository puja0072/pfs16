// function timeTask(){
//     let s = 0
//     for (let i=1; i <= 100000; i++){
//         s += 1
//     }
//     return s
// }

// let start = performance.now()
// let result = timeTask()
// let end = performance.now()


// console.log(end-start)

// function fetchUser(){
//     return new Promise((resolve,reject) => {
//        setTimeout(()=> resolve("data is recieved"),2000) 
//     });
// }
// function fetchPost(){
//     return new Promise((resolve,reject) => {
//        setTimeout(()=> resolve("post is recieved"),4000) 
//     });
// }

// fetchUser()
// .then((data)=>{
//     console.log(data)
//     return fetchPost();
// })
// .then((post)=>{
//     console.log(post)
// })
// .catch((error)=>{
//     console.log(error)
// })

// async function myAsync() {
//     try{
//         const data = await fetchUser()
//         console.log(data)
    
//         const post = await fetchPost()
//         console.log(post)
//     }catch(error){
//         console.log(error)
//     }
// }
// myAsync();

console.log(1 + "2" + "2");
console.log(1 + +"2" + "2");
console.log(1 + -"1" + "2");
console.log(+"1" + "1" + "2");
console.log("A" - "B" + "2");
console.log("A" - "B" + 2);
