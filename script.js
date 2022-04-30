const etchSketch = document.getElementById('etchSketch');
const cellsCreator = document.createDocumentFragment();

for( let i = 0; i < 16; i++ )
{
    row = document.createElement('div');
    row.setAttribute('class', "row");

    for( let j = 0; j < 16; j++ )
    {
        cell = document.createElement('div');
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
        console.log(event);
    });
}