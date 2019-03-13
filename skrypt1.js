
function licz()
{

var liczba1 = document.getElementById("liczba1").value;
var liczba2 = document.getElementById("liczba2").value;


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
            wynik = (liczba1*1 + liczba2*1);
            break;
        case 2:
            wynik = liczba1 - liczba2;
            break;
        case 3:
            wynik = liczba1 * liczba2;
            break;
        case 4:
            if (liczba2==0) {
            wynik = "Nie dziel selero przez zero :)"}
            else  { 
             wynik = liczba1 / liczba2;
            break;} 
        }
        


document.getElementById("wynik2").innerHTML=(wynik);
}