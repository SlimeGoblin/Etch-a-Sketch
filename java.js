//GIANT FUNCTION


//Get Slider Input

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = `${slider.value} x ${slider.value}`; // Display the default slider value


//Grid Properties to CSS Grid and Border Toggle Variable 

var borderOn = true
var gridSize = 16
let root = document.documentElement
root.style.setProperty('--size', gridSize)

// Slider into Grid Property to make new Grid Sizes
slider.oninput = function() {

  output.innerHTML = `${this.value} x ${this.value}`;
  gridSize = this.value
  let root = document.documentElement
  root.style.setProperty('--size', gridSize)
  blackButton.classList.remove('colorYellow')
  eraserButton.classList.remove('colorYellow')
  borderButton.classList.remove('colorYellow')
  borderOn = false
  makeGrid(gridSize);
}


// Query Selectors (HTML --> JAVASCRIPT)

const grid = document.querySelector("#gridContainer")

const blackButton = document.querySelector(".blackButton");

const eraserButton = document.querySelector(".eraserButton");

const borderButton = document.querySelector(".borderButton")

const clearButton = document.querySelector(".clearButton")

const rainbowButton= document.querySelector(".rainbowButton")


// I have no idea why I made this
/*

function maketheboxes(){
    const selectorBox = document.querySelectorAll(".boxClass")
    for(let i = 0; i < selectorBox.length; i++){
        return selectorBox[i]

    }
}

maketheboxes();
*/


//Makes the Grid Boxes based on the Grid Size Input from Slider (Default 16)
//grid.innerHTML = '' because otherwise it will keep growing instead of starting again

function makeGrid(n){


    grid.innerHTML = ''

    for (let i = 0; i < (n*n); i++){

            
        const newBox = document.createElement('div')
        newBox.classList.add("boxClass")

        grid.appendChild(newBox);

    }
}

makeGrid(gridSize)



//Color Toggles so that colorPicker knows what to chose

var color = ''

function colorToggleBlack (){
    color = 'black';
    pickColor();
}

function colorToggleRainbow(){
    color = 'rainbow'
    pickColor();
}



function pickColor(){



    const selectorBox = document.querySelectorAll(".boxClass")

    for(let i = 0; i < selectorBox.length; i++){

        function addBlack (){
            selectorBox[i].classList.add('colorBlack')
        }

        function addRainbow(){
            selectorBox[i].style.cssText = `background-color: ${randomColor()}`
        }

    if (color === 'black'){
        console.log('is black')

        blackButton.classList.add('colorYellow');

            selectorBox[i].addEventListener('mousemove', addBlack)
               
    }

    if (color != 'black'){
        console.log('is not black')

        blackButton.classList.remove('colorYellow');

            selectorBox[i].removeEventListener('mousemove', addBlack)
            
    }

    if (color === 'rainbow'){
        console.log('is rainbow')

        rainbowButton.classList.add('colorYellow')

        selectorBox[i].addEventListener('mouseover', addRainbow)
    }

    if (color != 'rainbow'){
        console.log('is not rainbow')

        rainbowButton.classList.remove('colorYellow');

        selectorBox[i].removeEventListener('mouseover', addRainbow)
    }
}
}


              


function randomColor(){
    return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`      
    //let toot = document.documentElement
    //toot.style.setProperty('--rainbow', randomColor())  
}






function modeErase(){
        eraserButton.classList.add('colorYellow')
        blackButton.classList.remove('colorYellow')
        rainbowButton.classList.remove('colorYellow')

        colorToggle();

        const selectorBox = document.querySelectorAll(".boxClass")

        if (color === 'erase'){

            for(let i =0 ; i< selectorBox.length; i++){
            selectorBox[i].addEventListener('mousemove',  ()=>{
                selectorBox[i].classList.remove('colorBlack')
                
            });
        }

    }
}
 
//This only removes black. not rainbow.

function activateClear(){
    const selectorBox = document.querySelectorAll('.boxClass')

    for (let i = 0; i < selectorBox.length; i++){
        selectorBox[i].classList.remove('colorBlack')

    }

}


//This works fine. leave it be.

function toggleBorder(){

    const selectorBox = document.querySelectorAll(".boxClass")
    if (borderOn){
        borderOn = false
        console.log(borderOn)
        eraserButton.classList.remove('colorYellow')
        blackButton.classList.remove('colorYellow')
        borderButton.classList.add('colorYellow')
    for(let i = 0; i<selectorBox.length; i++){
        selectorBox[i].style.cssText = 'border: white'
    }

}
    else if (!borderOn) {
        borderOn = true
        console.log(borderOn)
        borderButton.classList.remove('colorYellow')
        for(let i =0; i<selectorBox.length; i++){
            selectorBox[i].style.cssText ='border: 2px solid black'
    
        }
    }
}




blackButton.addEventListener('click', colorToggleBlack)
eraserButton.addEventListener('click',modeErase)
borderButton.addEventListener('click',toggleBorder)
clearButton.addEventListener('click', activateClear)
rainbowButton.addEventListener('click', colorToggleRainbow)

