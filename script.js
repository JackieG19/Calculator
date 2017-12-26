/* global $ */ /* global number */ /* global operator */ /* global newNumber */

$(document).ready(function(){
	var testNumLength = function(number) {
        if (number.length > 9) {
            totalDiv.text(number.substr(number.length-9,9));
            if (number.length > 15) {
                number = "";
                totalDiv.text("Err");
            }//if
        }//if 
    };//var
   
var Num = "number";
var newNum = "newNumber";
var op = "operator";
//var totalDiv = $("#total").text();
var totalDiv = $("#total");
    totalDiv.text("0");

$("#numbers > a").not("#clear,#clearall").click(function(){
		number += $(this).text();
		totalDiv.text(number);
		testNumLength(number); 
    });
    
//$("#numbers a").not("#clear,#clearAll").click(function(){number.append(this.html());
   // testNumLength(number); 
    
    
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
    });//equal
});//document