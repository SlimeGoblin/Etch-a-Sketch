/* TODO: 
1) Make it so click/click drag is what makes you color
*/
var color = ''
var userColor =''

//Get Slider Input

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = `${slider.value} x ${slider.value}`; // Display the default slider value

//Get Color Pick Input

var colorWheel = document.getElementById("colorPickerID")
var JavaShowColor = document.getElementById("showColor")

colorWheel.oninput = function (){
color = 'myColor'
}

function getColor(){
    return (colorWheel.value)
}


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

const pickButton = document.querySelector("#colorPickerID")


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



function colorToggleBlack (){
    color = 'black';
    blackButton.classList.add('colorYellow')
    rainbowButton.classList.remove('colorYellow')
    eraserButton.classList.remove('colorYellow')
    pickButton.classList.remove('colorYellow')

    pickColor();
}

function colorToggleRainbow(){
    //color = randomColor();
    color = 'rainbow';
    rainbowButton.classList.add('colorYellow')
    blackButton.classList.remove('colorYellow')
    eraserButton.classList.remove('colorYellow')
    pickButton.classList.remove('colorYellow')
    pickColor();
}

function colorToggleErase(){
    color ='erase';
    eraserButton.classList.add('colorYellow')
    blackButton.classList.remove('colorYellow')
    rainbowButton.classList.remove('colorYellow')
    pickButton.classList.remove('colorYellow')
    pickColor();
}

function colorTogglePick(){
    color = 'pick';
    eraserButton.classList.remove('colorYellow')
    blackButton.classList.remove('colorYellow')
    rainbowButton.classList.remove('colorYellow')
    pickButton.classList.add('colorYellow')
    clearButton.classList.remove('colorYellow')

    pickColor();

}

function pickColor(){



    const selectorBox = document.querySelectorAll(".boxClass")

    for(let i = 0; i < selectorBox.length; i++){

        selectorBox[i].addEventListener('mouseover', ()=>{

            if(color === 'black'){

        selectorBox[i].style.cssText = `background-color: ${color}`
        }

            if (color === 'rainbow'){

        selectorBox[i].style.cssText = `background-color: ${randomColor()}`
            }

            if(color ==='erase'){

        selectorBox[i].style.cssText = 'background-color: white'
            }

            if (color === `myColor`){

        selectorBox[i].style.cssText = `background-color: ${getColor()}`
            }
        });


}

}

function randomColor(){
    return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`      
}


function activateClear(){
    const selectorBox = document.querySelectorAll('.boxClass')

    eraserButton.classList.remove('colorYellow')
    blackButton.classList.remove('colorYellow')
    rainbowButton.classList.remove('colorYellow')
    pickButton.classList.remove('colorYellow')


    for (let i = 0; i < selectorBox.length; i++){
        selectorBox[i].style.cssText = `background-color: white`;

    }
}

/* Grid Toggle */

function toggleBorder(){

    const selectorBox = document.querySelectorAll(".boxClass")
    if (borderOn){
        borderOn = false
        console.log(borderOn)
        eraserButton.classList.remove('colorYellow')
        blackButton.classList.remove('colorYellow')
        borderButton.classList.add('colorYellow')
    for(let i = 0; i<selectorBox.length; i++){
        selectorBox[i].style.border = 'white'
        selectorBox[i].classList.add('borderWhite')

    }

}
    else if (!borderOn) {
        borderOn = true
        console.log(borderOn)
        borderButton.classList.remove('colorYellow')
        for(let i =0; i<selectorBox.length; i++){
            selectorBox[i].style.border = '2px solid black'
            selectorBox[i].classList.remove('borderWhite')
    
        }
    }
}

//Button Listeners

blackButton.addEventListener('click', colorToggleBlack)
eraserButton.addEventListener('click',colorToggleErase)
borderButton.addEventListener('click',toggleBorder)
clearButton.addEventListener('click', activateClear)
rainbowButton.addEventListener('click', colorToggleRainbow)
pickButton.addEventListener('click', colorTogglePick)