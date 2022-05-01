const etchSketch = document.getElementById('etchSketch');
const cellsCreator = document.createDocumentFragment();

let numberOfRows = 16;
let numberOfColumns = 16;

const sizeInfo = document.createElement('p');
sizeInfo.innerText = numberOfRows + " rows by " + numberOfColumns + " columns";
const interactive = document.getElementById('interactive');
interactive.appendChild(sizeInfo);

const sizeButton = document.createElement('button');
sizeButton.innerText = "change grid dimensions";
sizeButton.addEventListener('click', function(event)
{
    console.log(event);
});
interactive.appendChild(sizeButton);


for( let i = 0; i < numberOfRows; i++ )
{
    row = document.createElement('div');
    row.setAttribute('class', "row");

    for( let j = 0; j < numberOfColumns; j++ )
    {
        const cell = document.createElement('div');
        cell.setAttribute('id', i+"x"+j);
        cell.setAttribute('class', 'cell');
        row.appendChild(cell);
    }

    cellsCreator.appendChild(row);
}

etchSketch.appendChild(cellsCreator);

const cells = document.getElementsByClassName('cell');
const numberOfCells = cells.length;

for( let i = 0; i < numberOfCells; i++ )
{
    cells[i].addEventListener('mouseover', function(event)
    {
        event.target.style.backgroundColor = "hsl( " + Math.floor(Math.random() * 360) + ", 100%, 50%)";
    });
}