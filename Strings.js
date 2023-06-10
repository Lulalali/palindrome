function calandrums() {

    var wrong = 0
    var rite = 0
    //while (status == true) {
        var strings = document.getElementById("string").value
       

    var splitString = strings.split("");


    var reverseArray = splitString.reverse("");
    

    var joinArray = reverseArray.join("");
   
   
    
   
    if (joinArray == strings) {
        alert("This is a palindrome. enter new word");
    rite+=1
    }
    else 
    { 
        alert("This is not palindrome");
       
        wrong+=1
    }
//}
document.getElementById("rite").innerHTML="number of palindriums"+rite
document.getElementById("wrong").innerHTML="number of other words"+wrong
}