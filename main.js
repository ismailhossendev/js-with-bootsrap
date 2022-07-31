document.getElementById("subBtn").onclick = function (){
    var fName = document.getElementById("fname").value;
    var lName = document.getElementById("lname").value;
    var pNumber = document.getElementById("pnumber").value;

    document.getElementById("fNameResult").innerHTML = fName + " " + lName;
    document.getElementById("pNumberResult").innerHTML = pNumber;
    
}