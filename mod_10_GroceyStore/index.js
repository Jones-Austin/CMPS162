
function create_user(fname,lname,address1,address2,city,state,zip,Uname,Pword){
    this.fname = fname;
    this.lname = lname;
    this.address1 = address1;
    this.address2 = address2;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.Uname = Uname;
    this.Pword = Pword;
}

function sign_in(){
    var enteredUname = prompt("Please enter your username");
    var enteredPword = prompt("Please enter your password");
    if(enteredUname == Uname && enteredPword == Pword){
        alert("Welcome "+fname);
    }else{
        sign_in();
    }
}
function delivery() {
    var items = [
        { name: "Apple", price: 0.5 },
        { name: "Banana", price: 0.75 },
        { name: "Orange", price: 1 },
        { name: "Grapes", price: 2 },
        { name: "Watermelon", price: 5 },
        { name: "Peach", price: 1 },
        { name: "Pear", price: 0.5 },
        { name: "Kiwi", price: 0.25 },
        { name: "Strawberry", price: 5 },
        { name: "Blueberry", price: 2 },
        { name: "Lemon", price: 1 },
        { name: "Lime", price: 1 }
      ];
      
      console.log("Available items:");
      for (var i = 0; i < items.length; i++) {
        console.log(items[i].name + " - $" + items[i].price);
      }
    var cart = [];
    for (var i = 0; i < items.length; i++) {
    var itemName = items[i].name;
    var itemPrice = items[i].price;
    var selection = prompt("Do you want to add " + itemName + " to your cart? (y/n)");
    
    if (selection === "y") {
        var itemQuantity = parseInt(prompt("How many " + itemName + " do you want to add to your cart?"));
        var itemTotal = (itemPrice * itemQuantity);
        cart.push({ name: itemName, quantity: itemQuantity, price: itemPrice, total: itemTotal });
    }
    }

    var subtotal = 0;
    for (var i = 0; i < cart.length; i++) {
      subtotal += parseFloat(cart[i].total);
    }
    var tax = (subtotal * 0.07).toFixed(2);
    var deliveryFee = 9.99.toFixed(2);
    var totalPrice = (parseFloat(subtotal) + parseFloat(tax) + parseFloat(deliveryFee)).toFixed(2);
    
    console.log("Your cart:");
    for (var i = 0; i < cart.length; i++) {
        var itemName = cart[i].name;
        var itemQuantity = cart[i].quantity;
        var itemPrice = cart[i].price;
        var itemTotal = cart[i].total;
        console.log(itemName + " - " + itemQuantity + " x $" + itemPrice + " = $" + itemTotal);
    }
    console.log("Your total price is $" + totalPrice);
    console.log("Your delivery will arrive in 2 hours at " + address1 + " " + address2 + " " + city + " " + state + " " + zip + ".");
}
  
function pickUp(){
    var items = [
        { name: "Apple", price: 0.5 },
        { name: "Banana", price: 0.75 },
        { name: "Orange", price: 1 },
        { name: "Grapes", price: 2 },
        { name: "Watermelon", price: 5 },
        { name: "Peach", price: 1 },
        { name: "Pear", price: 0.5 },
        { name: "Kiwi", price: 0.25 },
        { name: "Strawberry", price: 5 },
        { name: "Blueberry", price: 2 },
        { name: "Lemon", price: 1 },
        { name: "Lime", price: 1 },
        { name: "sushi", price: 10},
        { name: "pizza", price: 15},
        { name: "burger", price: 5},
        { name: "fries", price: 3}

        ];
        
        console.log("Available items:");
        for (var i = 0; i < items.length; i++) {
        console.log(items[i].name + " - $" + items[i].price);
        }
    var cart = [];
    for (var i = 0; i < items.length; i++) {
    var itemName = items[i].name;
    var itemPrice = items[i].price;
    var selection = prompt("Do you want to add " + itemName + " to your cart? (y/n)");
    
    if (selection === "y") {
        var itemQuantity = parseInt(prompt("How many " + itemName + " do you want to add to your cart?"));
        var itemTotal = (itemPrice * itemQuantity);
        cart.push({ name: itemName, quantity: itemQuantity, price: itemPrice, total: itemTotal });
    }
    }
    console.log("Your cart:");
    for (var i = 0; i < cart.length; i++) {
        var itemName = cart[i].name;
        var itemQuantity = cart[i].quantity;
        var itemPrice = cart[i].price;
        var itemTotal = cart[i].total;
        console.log(itemName + " - " + itemQuantity + " x $" + itemPrice + " = $" + itemTotal);
    }
    var subtotal = 0;
    for (var i = 0; i < cart.length; i++) {
      subtotal += parseFloat(cart[i].total);
    }
    var tax = (subtotal * 0.07).toFixed(2);
    var totalPrice = (parseFloat(subtotal) + parseFloat(tax));
    console.log("Your total price is $" + totalPrice);
}





var fname = prompt("Please enter your first name");
var lname = prompt("Please enter your last name");
var address1 = prompt("Please enter your address");
var address2 = prompt("Please enter your address2");
var city = prompt("Please enter your city");
var state = prompt("Please enter your state");
var zip = prompt("Please enter your zip");
var Uname = prompt("Please enter your username");
var Pword = prompt("Please enter your password");
create_user(fname,lname,address1,address2,city,state,zip,Uname,Pword);
sign_in();
DeliveryMethod = prompt("Please enter your delivery method (pickUp or delivery)");
if(DeliveryMethod == "delivery"){
    delivery();
}
if (DeliveryMethod == "pickUp"){
    pickUp();
}