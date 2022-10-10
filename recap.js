// var let const 
//  break up with var 
const numbers = [12, 546, 98];
let salary = 450;
salary = 455;


//  default parameters 
function calculatateSalary (salary, tax , bonus){
    const remaining = salary-salary*tax;
    const total = remaining + bonus;
    return total;
}


// template string 
const elementHTML = `
<div>
    <h1>hello world</h1>
    <h3>Name : </h3>
    <p> salary: ${calculatateSalary(10000, 0, 0)}</p>
    <p>others : ${numbers[2]}</p>
 </div>`


//  array function 
const doubleIt = x => x * 2;
const calculatateSalary = (salary, tax, bonus) => salary - salary * tax + bonus;

// spread
const ages = [11, 10, 16, 18, 19];
const newAges = [...ages, 50,30,20];

// destructuring
const {x, y, ...z}= {x: 45, y:12, z:33, name:'sakib ai ullah', salary:10000}
const [a, b, ...r] = [12, 45, 21, 65, 98]