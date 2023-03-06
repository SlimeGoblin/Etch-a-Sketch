


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = `${slider.value} x ${slider.value}`; // Display the default slider value


var borderOn = true
var gridSize = 16
let root = document.documentElement
root.style.setProperty('--size', gridSize)

// Update the current slider value (each time you drag the slider handle) and update grid
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





var colorToggle = ''

const grid = document.querySelector("#gridContainer")

const blackButton = document.querySelector(".blackButton");

const eraserButton = document.querySelector(".eraserButton");

const borderButton = document.querySelector(".borderButton")

const clearButton = document.querySelector(".clearButton")

const rainbowButton= document.querySelector(".rainbowButton")



function makeGrid(n){


    grid.innerHTML = ''

    for (let i = 0; i < (n*n); i++){

            
        const newBox = document.createElement('div')
        newBox.classList.add("boxClass")

        grid.appendChild(newBox);

    }
}

makeGrid(gridSize)




function modeBlack(){
        colorToggle = 'black'
        blackButton.classList.add('colorYellow');
        eraserButton.classList.remove('colorYellow');


        const selectorBox = document.querySelectorAll(".boxClass")



            for(let i = 0; i < selectorBox.length; i++){
                selectorBox[i].addEventListener('mousemove', () =>{
                        selectorBox[i].classList.add('colorBlack')
                });
            } 
        }    


function randomColor(){
    return `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)})`
   // let root = document.documentElement
   // root.style.setProperty('--rainbow', randomColor)
}


function modeRainbow(){
        eraserButton.classList.remove('colorYellow')
        blackButton.classList.remove('colorYellow')
        rainbowButton.classList.add('colorYellow')

        colorToggle = 'rainbow'

        const selectorBox = document.querySelectorAll(".boxClass")
        for(let i = 0; i < selectorBox.length; i++){
//create random RGB value to plug into the cssText then push to CSS and make it a class
            
            selectorBox[i].addEventListener('mouseover', () =>{
                selectorBox[i].style.cssText = `background-color: ${randomColor()}`
            });
        } 
    

}






function modeErase(){

        colorToggle = 'erase'
        eraserButton.classList.add('colorYellow')
        blackButton.classList.remove('colorYellow')
        rainbowButton.classList.remove('colorYellow')

        const selectorBox = document.querySelectorAll(".boxClass")

            for(let i =0 ; i< selectorBox.length; i++){
            selectorBox[i].addEventListener('mousemove',  ()=>{
                selectorBox[i].classList.remove('colorBlack')
                selectorBox[i].classList.remove('colorRandom')
            })
                
            }
        }
        

function activateClear(){
    const selectorBox = document.querySelectorAll('.boxClass')

    for (let i = 0; i < selectorBox.length; i++){
        selectorBox[i].classList.remove('colorBlack')
        selectorBox[i].classList.remove('colorRandom')
    }

}

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

blackButton.addEventListener('click', modeBlack)
eraserButton.addEventListener('click',modeErase)
borderButton.addEventListener('click',toggleBorder)
clearButton.addEventListener('click', activateClear)
rainbowButton.addEventListener('click', modeRainbow)

