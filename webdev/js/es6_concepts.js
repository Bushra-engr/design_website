// let and const
//block scoped both but const is fixed nd need initiliazed at the time of declaration
let a =20;
const b = 40; 

// arrow functions
var func = ()=>{
console.log("hii");

}

var fnc2 =(n)=>{
    console.log("user typed:",a);
    
}

var g = ()=>"hello"; // implicit return
// console.log(g());

// template literals

console.log(`${2} + ${2} = ${2+2}`);

// default parameters

function abc(prm=5) {
    console.log(prm);
    
}
abc(12)
abc(); // this will cause undefined if there's no default param

// rest and spread
let arr  = [1,2,3,4,5,6];
let brr  = [...arr] // spread a into b (Copy)
console.log(brr[3]);

function res(a,b,c,...d){
    console.log(a,b,c,d);
    
}// rest . 1,2,3 will go into a , b and c . rest values will be assign to d in the form of array
res(1,2,3,4,5,6)

var a2 = [1,2,3,5,6,6]
var [b2,c2,...d2] = a2;
console.log(a2);
console.log(b2);
console.log(d2);

// destructuring

var obj = {
    name:"bush",
    age :20
}
console.log(obj);
var {age} = obj; // takes value out from obj , arr etc . 
console.log(age);

var a3 = [2,3,5]
var [d,,f] = a3
console.log(d);
console.log(f);


// classes


// modules


// promises
// it has 3 states = pending->fulfilled (resolve()) or rejected (reject())

const promise = new Promise((resolve,reject)=>{

const success = 0;
if(success){
    resolve("Task completed!!")
}
else{
    reject("Task failed!")
}
})

promise
.then((result)=>{ // used to handle resolve state
    console.log(result);    
})
.catch((error)=>{ // used to handle reject state
    console.log(error);
    
})
.finally(()=>{
console.log("Task finished!");


})
const mypromise = new Promise((res,rej)=>{

    setTimeout(()=>{
        res("DATA LOADED!")
    },2000)

})

mypromise.then((res)=>{
    console.log(res);
    
})

// direct resolve/reject promise

const prom1 = Promise.resolve("directly resolved!")

const prom2= Promise.reject("Directly rejected!")

prom1.then((resolve)=>{
    console.log(resolve);
    
})
prom2.catch((reject)=>{
    console.log(reject);
    
})

// promise chain 

const prom3 = Promise.resolve(2)

prom3
.then((num)=>{  
    return num+10
})
.then((num)=>{
   return  num*2
})
.then((result)=>{
    console.log(result);
    
})

//promise all

Promise.all([prom1,prom2,prom3])
.then((results)=>{
    console.log(results);
    
})
.catch((res)=>{
    console.log(res);
    
}) // one rejected promises will run catch not then.
// then runs only when all promises are resolved nd return an array


// promise.race


const p3 = new Promise((resolve) => {
  setTimeout(() => resolve("First"), 1000);
});
  
const p4 = new Promise((resolve) => {
  setTimeout(() => resolve("Second"), 2000);
});

Promise.race([p3, p4])
  .then((result) => {
    console.log(result);
  });


// async await

const getdata = new Promise((resolve)=>{
    setTimeout(()=>{
        resolve("Data loaded!")
    },2000);
});

async function GetData() {
    console.log("waiting...");
    let data = await getdata;
    console.log(data);
    
}

GetData()

console.log("Other code is running");


// *try catch
try {
    console.log(x); // x is not defined
} catch (err) {
    console.log(err);
}