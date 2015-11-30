var STACK = [];
function pushValue(value){
	STACK.push(value);
	var newElement = $('<div class="element"><span>'+value+'</span></div>');
	newElement.hide();
	$('.stack').prepend(newElement)
	newElement.show("slide",{direction:'left'},500);
};

function popValue(){
	//$('.element')[0]
	//$($('.element')[0]).hide("slide",{direction:'right'},100, function(){ $($('.element')[0]).remove();});
	$($('.element')[0]).remove();
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
	console.log(STACK);
	console.log('NOT ACCEPT');
};

function verifyPushValue(nextChar){
	if (nextChar == '1' || nextChar == '0'){
		pushValue(nextChar);
	}else{
		notAccept();
		return;
	}
};

function verifyPopValue(nextChar){
	if (STACK[STACK.length-1] == nextChar){
		popValue();
	}else{
		notAccept();
		return;
	}
};

function verifyString(){
	cleanStack();
	var Input = $('#userInput').val();
	Input = Input.split('').reverse();
	var HalfPosition = Math.ceil(Input.length / 2);

	setTimeout(function(){
		pushValue('$')
		setTimeout(function(){
			var nextChar = Input.pop();
			setTimeout(verifyPushValue,1000,nextChar);
			if (Input.length == 0){
				return;
			}
			while(HalfPosition != Input.length){	
				var nextChar = Input.pop();
				setTimeout(verifyPushValue,1000,nextChar);
			}

			for(var i = 0;i<HalfPosition;i++){
				var nextChar = Input.pop();
				setTimeout(verifyPopValue,2000,nextChar);	
			}
			
			setTimeout(function(){
				if (STACK[STACK.length -1] == '$'){
					popValue();
					console.log('ACCEPT');
					return;
				}else{
					alert('No accept');
					notAccept();
					return;
				}
			},3000);
		},1000);
	},1000);
};



