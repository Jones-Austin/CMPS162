function validateCustomerForm(){
    var state = document.getElementById("state");
    var zip = document.getElementById("zip");
    var address1 = document.getElementById("address1");
    var address2 = document.getElementById("address2");
    var q1 = document.getElementById("q1");
    var q2 = document.getElementById("q2");
    var q3 = document.getElementById("q3");
    var city = document.getElementById("city");
    var firstName = document.getElementById("fname");
    var lastName = document.getElementById("lname");
    if (isNaN(state.value)){
        console.log("pass")
    }else{
        alert("Please enter a valid state");
    }
    if (isNaN(zip.value)){
        alert("Please enter a valid zip code");
    }else{
        console.log("pass")
    }
    if (address1.value == ""){
        alert("Please enter a valid address 1");
        document.getElementById("address1").style.backgroundColor = "pink";
    }
    if (address2.value == ""){
        alert("Please enter a valid address 2");
        document.getElementById("address2").style.backgroundColor = "pink";
    }
    if (q1.value == ""){
        alert("Please enter answer question 1");
        document.getElementById("q1").style.backgroundColor = "yellow";
    }
    if (q2.value == ""){
        alert("Please enter answer question 2");
        document.getElementById("q2").style.backgroundColor = "yellow";
    }
    if (q3.value == ""){
        alert("Please enter answer question 3");
        document.getElementById("q3").style.backgroundColor = "yellow";
    }
    if (isNaN(city.value)){
        console.log("pass")
    }else{
        alert("Please enter a valid city");
    }
    if (isNaN(firstName.value)){
        console.log("pass")
    }else{
        alert("Please enter a valid first name");
    }
    if (isNaN(lastName.value)){
        console.log("pass")
    }else{
        alert("Please enter a valid last name");
    }
}