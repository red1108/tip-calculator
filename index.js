function calculate(){
    var bill = document.getElementById("bill").value;
    var answer = bill
    answer  = answer*document.getElementById("service").value
    answer = answer/document.getElementById("people").value
    document.getElementById("answer").innerHTML = "Your Tip is : "+answer+"$";
}
