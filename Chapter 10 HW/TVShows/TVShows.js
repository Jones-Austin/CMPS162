var TVShow = {
    name: "Impractical Jokers",
    genre: "Comedy",
    seasons: 10,
    episodes: 235,
    specials: 40,
    characters: ["Joe", "Murr", "Q", "Sal"],
    release: "December 15, 2011",
    network: "TruTV",
    rating: 8.6,
    runtime: "30 minutes",
    cover: "/TVShows/jokers.jpg"
}
document.write("<br>")
document.write("<font size='10'>")
document.write("I picked "+TVShow.name + ".");
document.write("<br>")
document.write(" It is a " + TVShow.genre + " show");
document.write("<br>")
document.write(" that has been on the air since " + TVShow.release + ".");
document.write(" It is currently on its " + TVShow.seasons + "th season and has aired " + TVShow.episodes + " episodes.");
document.write("<br>")
document.write(" It also has " + TVShow.specials + " specials.");
document.write(" The show is on the " + TVShow.network + " network.");
document.write("<br>")
document.write(" It has a rating of " + TVShow.rating + " out of 10.");
document.write("<br>")
document.getElementById("TVShow").src = TVShow.cover;
document.write(" The runtime of each episode is " + TVShow.runtime);
document.write("<br>")
document.write(" and main characters are " + TVShow.characters[0] + ", " + TVShow.characters[1] + ", " + TVShow.characters[2] + ", and " + TVShow.characters[3] + ".");
document.write("<br>")

