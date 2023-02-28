/* TODO:

1) Make it draw when on Hover

2) Chose Your Own Color

3) Random Color

4) Change amount of divs (slider)


*/



/* My Query Selectors (Grid Container (and Buttons?) */

const makeDivs = document.querySelector("#gridContainer")




const blackButton = document.querySelector(".blackButton");

const eraserButton = document.querySelector(".eraserButton");


/* Button is Yellow when in use */

blackButton.addEventListener(("click"),function(e){
    blackButton.classList.toggle("colorYellow")
});





function makeGrid(){

    /* Makes Divs */

    for (let i = 0; i < 256; i++){

            
        const newBox = document.createElement('div')
        newBox.classList.add("boxClass")

        makeDivs.appendChild(newBox);


        /* BlackButton Clicked and anyBox clicked, adds colorBlack  */

        blackButton.addEventListener("click", coloringBlack)

        function coloringBlack(e){

        newBox.addEventListener("click", ()=> {

            newBox.classList.add("colorBlack");
        
            });
    
        makeDivs.addEventListener("click",()=>{
    
            newBox.addEventListener("mousemove",mouseBlack)

            function mouseBlack(e){

                newBox.classList.add("colorBlack")
        
        };
    });




};


/* if Eraser Button is hit */

eraserButton.addEventListener("click", coloringWhite);

function coloringWhite(e){



    newBox.addEventListener("click", ()=> {

        newBox.classList.add("colorWhite");
    
        });

       newBox.addEventListener("mouseover",()=>{
        newBox.classList.add("colorWhite")
    
    });


};



    }



}

makeGrid();


























 

  








    




/* Gives each div a class of Black if blah balh */

