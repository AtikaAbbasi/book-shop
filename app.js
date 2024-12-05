var btn = document.getElementById("abc")

var count = document.getElementById("count")
var con = document.getElementById("count")



var increament = 0

function button(button){
    increament++

    var count = document.getElementById("count").innerHTML = increament
con.style.background = "black"
con.style.color = "white"


}



var sub  = document.getElementById("sub")
var num = document.getElementById("in")
var num2 = document.getElementById("inpt")
var pvalue = document.getElementById("pvalue")
var pvalue2 = document.getElementById("pvalue2")
var inpt = document.getElementById("inbox")



function meet(){
num.style.display = "none"
num2.style.display = "none"
sub.style.display = "none"
pvalue.innerHTML = num.value
pvalue2.innerHTML = num2.value
inpt.style.background = "white"







}

// function meet(){
//     num2.style.display = "none"
//     }