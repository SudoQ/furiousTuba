function and(x,y){
	return x & y;
}
function or(x,y){
	return x | y;
}
function xor(x,y){
	return x ^ y;
}
function blend(hex1, hex2, op){
	var i1 = hexStrToInt(hex1);
	var i2 = hexStrToInt(hex2);
	var result = op(i1,i2);
	return intToHexStr(result);
}

String.prototype.repeat = function( num )
{
	return new Array( num + 1 ).join( this );
}
function hexStrToInt(hexStr){
	var i = 1;
	if(hexStr.indexOf("#") == -1){
		i = 0;
	}
	return parseInt(hexStr.substring(i),16);
}

function intToHexStr(i){
	var s = i.toString(16);
	return "#"+"0".repeat(6-s.length)+s;
}

$(function(){
	var blendFunc = function(){
		var c1 = $(".color1").colorpicker("getValue", "#000000");
		var c2 = $(".color2").colorpicker("getValue", "#000000");
		var andResult = blend(c1, c2, and);
		var orResult = blend(c1, c2, or);
		var xorResult = blend(c1, c2, xor);
		$("#andBox").css("background", andResult);
		$("#andResult").text( "AND: " + andResult);
		$("#orBox").css("background",  orResult);
		$("#orResult").text( "OR: " + orResult);
		$("#xorBox").css("background", xorResult);
		$("#xorResult").text("XOR: " + xorResult);
	};
	$(".color1").colorpicker().on('changeColor.colorpicker', blendFunc);
	$(".color2").colorpicker().on('changeColor.colorpicker', blendFunc);
	blendFunc()
});
