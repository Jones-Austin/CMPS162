function player(first_name,last_name,number,age,position,team,years_played,points,salery,photo) {
    this.first= first_name;
    this.last = last_name;
    this.number = number;
    this.age = age;
    this.position = position;
    this.team = team;
    this.years_played = years_played;
    this.points = points;
    this.salery = salery;
    this.photo = photo;
}
var crosbey = new player("Sidney","Crosby",87,28,"Center","Pittsburgh Penguins",12,1343,3000000,"/YourTopic/crosbey.jpg");
document.write("<br>");
document.write("<font size='10'>");
document.write("I picked "+crosbey.first + " " + crosbey.last + ".");
document.write("He is number " + crosbey.number + "."+ " He is " + crosbey.age + " years old.");
document.write("<br>");
document.write(" He is a " + crosbey.position + " for the " + crosbey.team + ".");
document.write("<br>");
document.write(" He has been playing for " + crosbey.years_played + " years.");
document.write(" He has scored " + crosbey.points + " points.");
document.write("<br>");
document.write(" He makes " + crosbey.salery + " dollars a year.");
document.write("<br>");
document.getElementById("player").src = crosbey.photo;