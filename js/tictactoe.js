//Click Handlers
$( document ).ready(function() 
{
    $(".cell").click(function(event) 
    {
    	claimCell(event.currentTarget.id)
    	$(this).html(activePlayer);

    	victoryCheck();
    	turnToggle();
	});
//Reset Button
    $("#reset").click(function() 
    {
    	$(".cell").empty();
    	xCells=[];
    	oCells=[];
    	activePlayer = 'X';
	});
});

var activePlayer = 'X';
//Switch players
var turnToggle = function()
{
	if(activePlayer === 'X')
	{
		activePlayer = 'O';
	} else if(activePlayer === 'O')
	{
		activePlayer = 'X';
	}
}
//Game Registry
//array to hold cells that players have claimed
var xCells = [];
var oCells = [];

//function to register the cells that are claimed
var claimCell = function (id) 
{
	if(activePlayer === "X")
	{
		xCells.push(id);
	} else if(activePlayer ==="O")
	{
		oCells.push(id)
	}
}



//Victory Check
var victoryCheck = function()
{
	if(activePlayer === "X")
	{
		if($.inArray("1", xCells) != -1 && $.inArray("2", xCells) != -1 && $.inArray("3", xCells) != -1)
		{
			alert('X Player Wins!!!');
		}
		if($.inArray("4", xCells) != -1 && $.inArray("5", xCells) != -1 && $.inArray("6", xCells) != -1)
		{
			alert('X Player Wins!!!');
		}
		if($.inArray("7", xCells) != -1 && $.inArray("8", xCells) != -1 && $.inArray("9", xCells) != -1)
		{
			alert('X Player Wins!!!');
		}
		if($.inArray("1", xCells) != -1 && $.inArray("4", xCells) != -1 && $.inArray("7", xCells) != -1)
		{
			alert('X Player Wins!!!');
		}
		if($.inArray("2", xCells) != -1 && $.inArray("5", xCells) != -1 && $.inArray("8", xCells) != -1)
		{
			alert('X Player Wins!!!');
		}
		if($.inArray("3", xCells) != -1 && $.inArray("6", xCells) != -1 && $.inArray("9", xCells) != -1)
		{
			alert('X Player Wins!!!');
		}
		if($.inArray("1", xCells) != -1 && $.inArray("5", xCells) != -1 && $.inArray("9", xCells) != -1)
		{
			alert('X Player Wins!!!');
		}
		if($.inArray("3", xCells) != -1 && $.inArray("5", xCells) != -1 && $.inArray("7", xCells) != -1)
		{
			alert('X Player Wins!!!');
		}
		//does xCells have a victory condition
	}else if(activePlayer === "O"){
		//does oCells have a victory condition
		if($.inArray("1", oCells) != -1 && $.inArray("2", oCells) != -1 && $.inArray("3", oCells) != -1)
		{
			alert('O Player Wins!!!');
		}
		if($.inArray("4", oCells) != -1 && $.inArray("5", oCells) != -1 && $.inArray("6", oCells) != -1)
		{
			alert('O Player Wins!!!');
		}
		if($.inArray("7", oCells) != -1 && $.inArray("8", oCells) != -1 && $.inArray("9", oCells) != -1)
		{
			alert('O Player Wins!!!');
		}
		if($.inArray("1", oCells) != -1 && $.inArray("4", oCells) != -1 && $.inArray("7", oCells) != -1)
		{
			alert('O Player Wins!!!');
		}
		if($.inArray("2", oCells) != -1 && $.inArray("5", oCells) != -1 && $.inArray("8", oCells) != -1)
		{
			alert('O Player Wins!!!');
		}
		if($.inArray("3", oCells) != -1 && $.inArray("6", oCells) != -1 && $.inArray("9", oCells) != -1)
		{
			alert('O Player Wins!!!');
		}
		if($.inArray("1", oCells) != -1 && $.inArray("5", oCells) != -1 && $.inArray("9", oCells) != -1)
		{
			alert('O Player Wins!!!');
		}
		if($.inArray("3", oCells) != -1 && $.inArray("5", oCells) != -1 && $.inArray("7", oCells) != -1)
		{
			alert('O Player Wins!!!');
		}
		
	}
}






//Reset
