let input = document.getElementById('inputBox');
let result = document.getElementById('resultBox');
let primary = document.getElementsByClassName('primaryfunctions');
let buttons = document.querySelectorAll('#scientific button');
let mySound = new Audio('pop.mp3');
let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            mySound.play();
            string = eval(string);
            result.value = string;
        }

        else if(e.target.innerHTML == 'C'){
            mySound.play();
            string = "";
            input.value = string;
            result.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            mySound.play();
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        
        else if(e.target.value == 'pi'){
            mySound.play();
            input.value = string + e.target.innerHTML;
            string += Math.PI;
        }

        else if(e.target.value == 'e'){
            mySound.play();
            input.value = string + e.target.innerHTML;
            string = Math.exp(string);
        }

        else if(e.target.value == 'percent'){
            mySound.play();
            input.value = string + e.target.innerHTML;
			string = eval(string);
			string *= 100;
            result.value = string;
        }

        else if(e.target.value == 'pow'){
            mySound.play();
			string  += "**";
            input.value = string;
        }

        else if(e.target.value == '1/x'){
            mySound.play();
            input.value = "1/" + string;
			string = 1/string;
        }

        else if(e.target.value == 'sin'){
            mySound.play();
            input.value = string + e.target.innerHTML;
            string = Math.sin(string);
        }

        else if(e.target.value == 'cos'){
            mySound.play();
            input.value = string + e.target.innerHTML;
            string = Math.cos(string);
        }

        else if(e.target.value == 'tan'){
            mySound.play();
            input.value = string + e.target.innerHTML;
            string = Math.tan(string);
        }

        else if(e.target.value == 'log'){
            mySound.play();
            input.value = string + e.target.innerHTML;
            string = Math.log(string);
        }

        else if(e.target.value == 'sqrt'){
            mySound.play();
            input.value = string + e.target.innerHTML;
            string = Math.sqrt(string);
        }

        else if(e.target.value == 'fact'){
            mySound.play();
            input.value = string + e.target.innerHTML;
            string = fact(string);
            result.value = string;
        }

        else if(e.target.value == 'cbrt'){
            mySound.play();
            input.value = string + e.target.innerHTML;
            string = Math.cbrt(string);
        }

        else if(e.target.value == 'square'){
            mySound.play();
            input.value = string + e.target.innerHTML;
            string = square();
        }

        else{
            mySound.play();
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
const square =()=> {
	return eval(string*string);
}
const fact =()=>{
	let fac = 1;
    for (let i = 1; i <= string; i++) {
        fac *= i;
    }
	return fac;
}

// SCIENTIFIC
let input1 = document.getElementById('inputBox1');
let result1 = document.getElementById('resultBox1');
let buttons1 = document.querySelectorAll('#classic button');

let string1 = "";

let arr1 = Array.from(buttons1);
arr1.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            mySound.play();
            string1 = eval(string1);
            result1.value = string1;
        }

        else if(e.target.innerHTML == 'C'){
            mySound.play();
            string1 = "";
            input1.value = string1;
            result1.value = string1;
        }
        else if(e.target.innerHTML == 'DEL'){
            mySound.play();
            string1 = string1.substring(0, string1.length-1);
            input1.value = string1;
        }
        
        else{
            mySound.play();
            string1 += e.target.innerHTML;
            input1.value = string1;
        }
        
    })
})

function myFunction(){
    document.getElementById('scientific').style.display = 'none';
    document.getElementById('classic').style.display = 'block';
}
function myFunction2(){
    document.getElementById('classic').style.display = "none";
    document.getElementById('scientific').style.display = "block";
}
