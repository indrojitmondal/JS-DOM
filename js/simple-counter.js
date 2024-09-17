console.log('connected simple-counter.js');
// Read
const counter = document.getElementById('counter');
// console.log(counter);
let count=0;
let increase=0,decrease=0;
let id=document.getElementById('count');
let increaseButton= document.getElementsByClassName('increase-button')[0];
let decreaseButton= document.getElementsByClassName('decrease-button')[0];

// id.innerText=Number(id.innerText);
// console.log(id);
counter.addEventListener('click', function (event){

    let x= event.target;
    console.log(x);

    if(x.innerText.includes('Count: ')){
  
        console.log('yes');
        event.stopImmediatePropagation();
        document.getElementById('counter').style.backgroundColor='red';

        increaseButton.setAttribute('disabled',true);
        decreaseButton.setAttribute('disabled',true);

    

    }
    else if(x.innerText.includes('Increase')){
        count++;
        id.innerText=count;

    }
    else if(x.innerText.includes('Decrease')){
        count--;
        id.innerText=count;
    }
   
    
})

document.getElementById('reset').addEventListener('click', function(){
    count=0;
    increase=0;
    decrease=0;
    document.getElementById('counter').style.backgroundColor='';
    increaseButton.removeAttribute('disabled');
    decreaseButton.removeAttribute('disabled');
    id.innerText=count;

})