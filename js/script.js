function populateGrid(){
	var div = document.createElement("div");
	div.id = "content";
	document.body.appendChild(div);
	var gridSquares = 16;
	var numberOfSquares = gridSquares * gridSquares;
	$('#content').append('<table><tbody><tr>');
	for (var i = 1; i < numberOfSquares+1; i++) {
		$('#content').append('<td><div class="box"></div><td>');
		if(i>0 && i%gridSquares===0){
			$('#content').append('</tr><tr>');
		}
	};
	$('#content').append('</tr></tbody><table>')
}