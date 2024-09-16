console.log('Hello from Js');

// const test= document.getElementById('test');
// // test.setAttribute('class','text-red');
// // test.innerHTML=
// // `
// //  <h1>New Content </h1>
// // `
// // test.innerText='Section -1';
// const child= test.childNodes;
// console.log(child.length);

const test= document.getElementById('test');
const h1= document.createElement('h1');
h1.innerText='New heading';
h1.style.color='green';
test.appendChild(h1);







