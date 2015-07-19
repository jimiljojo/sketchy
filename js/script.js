function populateGrid(x){
	var div = document.createElement("div");
	div.id = "content";
	document.body.appendChild(div);

	var gridSquares = (x>0)?x:16;
	var boxWidth = 500;
	var sqcolor = "blue";
	var numberOfSquares = gridSquares * gridSquares;
	var squaresize = 20;

	$('#content').append('<table><tbody><tr>');
	for (var i = 1; i < numberOfSquares+1; i++) {
		$('#content').append('<td><div class="box"></div><td>');
		if(i>0 && i%gridSquares===0){
			$('#content').append('</tr><tr>');
		}
	};
	$('#content').append('</tr></tbody><table>');

	$('.box').height(squaresize);
    $('.box').width(squaresize);
    $('.box').on("mouseenter",function(){
    	$(this).css('background-color', '#'+(Math.random()*0xFFFFFF<<0).toString(16));
    })
}

function clearBox(){
	$('div').css('background-color', 'white');
}

function newBox(){
	destroyGrid();
	populateGrid(prompt("Enter number of pixels : ","16"));
}

function destroyGrid(){
	$('div').remove();
}