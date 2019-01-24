/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = [
    "Moon Unit Pt. 2",
    "Living for the Future (FBD Project Remix)",
    "She Knows",
    "Relax Yourself"
];

var artists = [
    "Mogg & Naudascher",
    "Omni Trio",
    "Chief Rugged",
    "Chief Rugged"
];

var images = [
    "https://i.scdn.co/image/796ff92d6ecf351727f7097229a418a4a050eb9f",
    "https://images-na.ssl-images-amazon.com/images/I/41UHUUfVb4L.jpg",
    "https://f4.bcbits.com/img/a1460074306_10.jpg",
    "https://f4.bcbits.com/img/a1460074306_10.jpg"
];

var links = [
    "https://www.youtube.com/watch?v=Ig7ppIX6N3g",
    "https://www.youtube.com/watch?v=QJAIwP9i4Ss",
    "https://www.youtube.com/watch?v=v_qPwAappFc",
    "https://www.youtube.com/watch?v=axjls2Suv1g"
];

var lengths = [
    "10:39",
    "6:20",
    "3:46",
    "2:33"
];

function displaySongInfo(){
    images.forEach(function(image) {
        $("#images").append("<img src='" + image + "'>");   
    });

    songs.forEach(function(song) {
        $("#songs").append("<p>" + song + "</p>"); 
    });

    artists.forEach(function(artist) {
        $("#artists").append("<p> By: " + artist + "</p>");   
    });

    lengths.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>"); 
    });

    links.forEach(function(link) {
        $("#links").append("<a href='" + link + "'> Listen </a>"); 
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
