/* global $ */ /* global number */ /* global operator */ /* global newNumber */

$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totalDiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totalDiv.text("Err");
            }
        } 
    };
   
var Num = "number";
var newNum = "newNumber";
var op = "operator";
//var totalDiv = $("#total").text();
var totalDiv = $("#total");
    totalDiv.text("0");

/*$("#numbers > a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totalDiv.text(number);
		testNumLength(number);  */    
    
$("#numbers a").not("#clear,#clearAll").click(function(){number.append(this.html());
    testNumLength(number);
    }); 
    
    $("#operators a").not("#equals").click(function(){
       operator = $(this).text();
        newNumber = number;
        number = "";
        totalDiv.text("0");
    });
    
     $("#clear, #clearAll").click(function(){
        //number="";
        //newNumber="";
        //totalDiv.text("0");
        number = "";
		totalDiv.text("0");
		if ($(this).attr("id") === "clearall") {
			newNumber = "";
		}
    });
    
    $("#equals").click(function(){
		if (operator === "+"){
			number = (parseInt(number, 10) + parseInt(newNumber,10)).toString(10);
		} else if (operator === "-"){
			number = (parseInt(newNumber, 10) - parseInt(number,10)).toString(10);
		} else if (operator === "/"){
			number = (parseInt(newNumber, 10) / parseInt(number,10)).toString(10);
		} else if (operator === "*"){
			number = (parseInt(newNumber, 10) * parseInt(number,10)).toString(10);
		}
		totalDiv.text(number);
		testNumLength(number);
		number = "";
		newNumber = "";
    });
    
    $(document).keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode === 49) {
            $("#one").click();
       } else if (keycode === 50) {
            $("#two").click();
        } else if (keycode === 51) {
            $("#three").click();
        } else if (keycode === 52) {
            $("#four").click();
        } else if (keycode === 53) {
            $("#five").click();
        } else if (keycode === 54) {
            $("#six").click();
        } else if (keycode === 55) {
            $("#seven").click();
        } else if (keycode === 56) {
            $("#eight").click();
        } else if (keycode === 57) {
            $("#nine").click();
        } else if (keycode === 48) {
            $("#zero").click();
        } else if (keycode === 97) {
            $("#clearall").click();
        } else if (keycode === 99) {
            $("#clear").click();
        } else if (keycode === 61) {
            $("#equals").click();
        } else if (keycode === 43) {
            $("#plus").click();
        } else if (keycode === 45) {
            $("#minus").click();
        } else if (keycode === 42 || keycode === 120) {
            $("#multiply").click();
        } else if (keycode === 47) {
            $("#divide").click();
        } 
    });
});