
function count()
{

var nr1 = document.getElementById("num1").value;
var nr2 = document.getElementById("num2").value;


var f = document.getElementsByName("radio");
var v ;

for(var i = 0; i < 4; i++)
    {
    if(f[i].checked){
         v = i+1;
    }
    };
switch (v){
        case 1: 
            total = (nr1*1 + nr2*1);
            break;
        case 2:
            total = nr1 - nr2;
            break;
        case 3:
            total = nr1 * nr2;
            break;
        case 4:
            if (nr2==0) {
            total = "You can not divide by zero!"}
            else  { 
             total = nr1 / nr2;
            break;} 
        }
        


document.getElementById("result").innerHTML=(total);
}