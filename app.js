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

setTimeout(function(){
	pushValue('1');
	setTimeout(function(){
		pushValue('0');
		setTimeout(function(){
			popValue();
			//console.log(STACK);
			//generateTree();
		},2000);
	},2000);
},2000);



