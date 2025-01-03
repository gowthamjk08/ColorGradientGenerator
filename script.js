let body = document.getElementById('body');
let colorCountShow = document.getElementById('colorCount');
let colorCountContainer = document.getElementById('colorCountContainer');
let speedShowContainer = document.getElementById('speedShowContainer')


let count = document.getElementById('count');
let speed = document.getElementById('speed');
let countContainer = document.getElementById('countContainer');
let speedContainer = document.getElementById('speedContainer');
let btn = document.getElementById('btn');

let set;

colorCountContainer.style.display = "none";
speedShowContainer.style.display = "none";

function change(){

   if(count.value && speed){
    let colorCount = 1;
    colorCountContainer.style.display = "block";
    speedShowContainer.style.display = "block";
    countContainer.style.display = 'none';
    speedContainer.style.display='none';

    btn.disabled = true;
    let set = setInterval(()=>{
    let red = (Math.random()*255).toFixed();
    let green = (Math.random()*255).toFixed();
    let blue = (Math.random()*255).toFixed();

    let red2 = (Math.random()*255).toFixed();
    let green2 = (Math.random()*255).toFixed();
    let blue2 = (Math.random()*255).toFixed();

    let deg = (Math.random()*360).toFixed();

    body.style.cssText = `background: linear-gradient(${deg}deg, rgb(${red},${green},${blue}),rgb(${red2},${green2},${blue2}));`;

    colorCountShow.innerText = colorCount;
    speedShow.innerText = speed.value+"ms";
    
    if(colorCount == count.value*1+1){
        btn.disabled = false;
        count.value = "";
        speed.value = "";
        
        colorCountContainer.style.display = "none";
        speedShowContainer.style.display = "none";
        countContainer.style.display = 'block';
        speedContainer.style.display='block';

        clearInterval(set);
    }

    colorCount++;
   },speed.value);
   }
   else{
    alert("Both Fileds are Empty")
   }

}