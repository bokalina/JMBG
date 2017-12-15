var jmbg = document.getElementById("jmbg");
var check = document.getElementById("check");
var text = document.getElementById("text");
var jmbgValue = jmbg.value;
var dan;
var mesec;
var godina;
var region;
var pol;
var kontrolniBroj;
 function checkValue(){
 	if(isNaN(jmbg)){
 		console.log("JMBG ne sme da sadrzi slova");
 	}
 }
 function checkLength(jmbg){
 	if(jmbgValue.length = 13){
 		console.log("ispravno unet jmbg")
 	}
 }
 function kontrolniBrojProvera(kontrolniBroj){
 	var k = 11 - (7 * (Number (jmbgValue[0]) + Number (jmbgValue[6])) +
 		6 * (Number (jmbgValue[1]) + Number (jmbgValue[7])) +
 		5 * (Number (jmbgValue[2]) + Number (jmbgValue[8])) +
 		4 * (Number (jmbgValue[3]) + Number (jmbgValue[9])) +
 		3 * (Number (jmbgValue[4]) + Number (jmbgValue[10])) +
 		2 * (Number (jmbgValue[5]) + Number (jmbgValue[11]))) % 11;
 	if (k >= 1 && k <= 9){
 		console.log("kontrolna cifra ostaje ista");
 	}else if (k > 9){
 		console.log("kontrolna cifra postaje 0");
 	}else{
 		console.log("neispravna kontrolna cifra");
 	}
 }
function splitjmbg() {
     var JMBG = jmbgValue.split("");
    
     console.log(dan);
    }
 

