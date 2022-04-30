const etchSketch = document.getElementById('etchSketch');
const cellsCreator = document.createDocumentFragment();

for( let i = 0; i < 16; i++ )
{
    for( let j = 0; j < 16; j++ )
    {
        cell = document.createElement('div');
        cell.setAttribute('id', i+"x"+j );
        cell.setAttribute('class', 'cell');
        cellsCreator.appendChild(cell);
    }
}

etchSketch.appendChild(cellsCreator);