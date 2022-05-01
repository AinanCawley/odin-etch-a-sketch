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
    let userRows = null;
    let userColumns = null;

    while( true )
    {
        userRows = 1 * window.prompt('Number of rows? (must be a natural number less than 100)');

        if( (typeof userRows === 'number') && (isNaN(userRows) == false) )
        {
            if( userRows == Math.round(userRows) )
            {
                if( userRows > 0 )
                {
                    if( userRows < 100 )
                    {
                        break;
                    }
                    else
                    {
                        window.alert("That's too large! Stick to less than a hundred, please");
                    }
                }
                else
                {
                    window.alert("That's not a positive number!")
                }
            }
            else
            {
                window.alert("That's not an integer!")
            }
        }
        else
        {
            window.alert("That's not a number!");
        }
    }

    while( true )
    {
        userColumns = 1 * window.prompt('Number of columns? (must be a natural number less than 100)');

        if( (typeof userColumns === 'number') && (isNaN(userColumns) == false) )
        {
            if( userColumns == Math.round(userColumns) )
            {
                if( userColumns > 0 )
                {
                    if( userColumns < 100 )
                    {
                        break;
                    }
                    else
                    {
                        window.alert("That's too large! Stick to less than a hundred, please");
                    }
                }
                else
                {
                    window.alert("That's not a positive number!")
                }
            }
            else
            {
                window.alert("That's not an integer!")
            }
        }
        else
        {
            window.alert("That's not a number!");
        }
    }

    numberOfRows = userRows;
    numberOfColumns = userColumns;

    sizeInfo.innerText = numberOfRows + " rows by " + numberOfColumns + " columns"; //updating the grid size info

    cellsCreator.replaceChildren(); //replacing the grid with a new one using the user inputted dimensions
    etchSketch.replaceChildren();

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

    cells = document.getElementsByClassName('cell'); //adding eventListeners to the new cells in the new grid
    numberOfCells = cells.length;

    for( let i = 0; i < numberOfCells; i++ )
    {
        cells[i].addEventListener('mouseover', function(event)
        {
            event.target.style.backgroundColor = "hsl( " + Math.floor(Math.random() * 360) + ", 100%, 50%)";
        });
    }
});
interactive.appendChild(sizeButton);


for( let i = 0; i < numberOfRows; i++ ) //initial grid creation using the default values (16 by 16)
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

let cells = document.getElementsByClassName('cell'); //adding eventListeners to the initalised cells
let numberOfCells = cells.length;

for( let i = 0; i < numberOfCells; i++ )
{
    cells[i].addEventListener('mouseover', function(event)
    {
        event.target.style.backgroundColor = "hsl( " + Math.floor(Math.random() * 360) + ", 100%, 50%)";
    });
}