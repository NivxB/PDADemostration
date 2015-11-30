var STACK = [];
function pushValue(value){
	STACK.push(value);
	var newElement = $('<div class="element"><span>'+value+'</span></div>');
	newElement.hide();
	$('.stack').prepend(newElement)
	newElement.show("slide",{direction:'left'},1000);
};

function popValue(){
	//$('.element')[0]
	$($('.element')[0]).hide("slide",{direction:'right'},1000, function(){ $($('.element')[0]).remove(); });
	return STACK.pop();
};

function cleanStack(){
	$('.element').remove();
	STACK = [];
}


var treeData = [{
	"name":"Root",
	"parent":"null",
	"children":[
		{
			"name":"Child",
			"parent":"Root"
		}
	]
}];
function notAccept(){
	console.log('NOT ACCEPT');
};


function verifyString(){
	cleanStack();
	var Input = $('#userInput').val();
	Input = Input.split('').reverse();
	var HalfPosition = Math.ceil(Input.length / 2);

	pushValue('$');
	var nextChar = Input.pop();
	if (nextChar == '1' || nextChar == '0'){
		pushValue(nextChar);
	}else{
		notAccept();
		return;
	}

	while(HalfPosition != Input.length){
		var nextChar = Input.pop();
		if (nextChar == '1' || nextChar == '0'){
			pushValue(nextChar);
		}else{
			notAccept();
			return;
		}
	}

	for(var i = 0;i<HalfPosition;i++){
		var nextChar = Input.pop();
		if (STACK[STACK.length-1] == nextChar){
			popValue();
		}else{
			notAccept();
			return;
		}
	}

	if (STACK[STACK.length -1] == '$'){
		console.log('ACCEPT');
		return;
	}else{
		notAccept();
		return;
	}

};



