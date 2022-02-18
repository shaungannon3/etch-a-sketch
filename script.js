let resetButton = document.querySelector("button");

resetButton.addEventListener("click", event => clearGrid(event));

function setUpGrid(numberOfRows = 16){
    let width = 100/numberOfRows;
    const container = document.querySelector(".container");

    console.log(numberOfRows);

    for (let i = 0; i < (numberOfRows*numberOfRows); i ++){
        const newDiv = document.createElement('div');
        const childDiv = document.createElement('div');
        newDiv.style.cssText = "float:left; width:" +  width + "%; background-color: #eee;";
        childDiv.style.cssText = "padding-bottom: 100%;";
        childDiv.setAttribute("class", "square");
        newDiv.appendChild(childDiv);
        container.appendChild(newDiv);
    }

    let squares = document.querySelectorAll(".square");

    squares.forEach(item => item.addEventListener("mouseenter", function(){
        this.style.backgroundColor = "red";
        console.log("Woohoo");
    }));
}

function promptUser(){

    let countRows = 16;

    while (true){

        countRows = prompt("Please enter desired number of rows for new grid");

        if (countRows > 0 && countRows <= 100) {
            break;
        }
    }
    console.log(countRows);

    return countRows;

}

function clearGrid(){

    let squares = document.querySelectorAll(".square");
    // clear background color of squares
    squares.forEach(item => item.remove());

    let countRows = promptUser();

    setUpGrid(countRows);
}

setUpGrid();