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
	if (Rejected){
		return;
	}
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

var Rejected = false;

function notAccept(){
	Rejected = true;
	console.log('NOT ACCEPT');
};

function Accept(){
	popValue();
	console.log('ACCEPT');
}

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
	Rejected = false;
	var Input = $('#userInput').val();
	Input = Input.split('').reverse();
	var HalfPosition = Math.ceil(Input.length / 2);

	setTimeout(function(){
		pushValue('$')
		if (Input.length == 0){
			Accept();
		}
		setTimeout(function(){
			var nextChar = Input.pop();
			setTimeout(verifyPushValue,1000,nextChar);
			
			while(HalfPosition != Input.length && Input.length > 0){	
				var nextChar = Input.pop();
				setTimeout(verifyPushValue,1000,nextChar);
			}

			if (Input.length > 0){
				for(var i = 0;i<HalfPosition;i++){
					var nextChar = Input.pop();
					setTimeout(verifyPopValue,1000,nextChar);	
				}
			}
			setTimeout(function(){
				if (STACK[STACK.length -1] == '$'){
					Accept();
				}else{
					notAccept();
				}
			},3000);
		},1000);
	},1000);
};



