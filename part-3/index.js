// 1
var fav_movies = ["Memento", "Dark-Knight", "GodFather", "The-Departed", "Joker"];
console.log(fav_movies[1]);

// 2
var movies = new Array(5);
movies[0] = "Memento";
movies[1] = "Dark-Knight", "GodFather", "The-Departed", "Joker";
movies[2] = "GodFather";
movies[3] = "The-Departed";
movies[4] = "Joker";
console.log(movies[0]);

// 3
var movies_2 = new Array(5);
movies[0] = "Memento";
movies[1] = "Dark-Knight", "GodFather", "The-Departed", "Joker";
movies[2] = "GodFather";
movies[3] = "The-Departed";
movies[4] = "Joker";
movies_2.splice(2,0,"Shawshank-Redemption");
console.log(movies_2.length);

// 4
var movies_3 = [];
movies_3[0] = "Memento";
movies_3[1] = "Dark-Knight", "GodFather", "The-Departed", "Joker";
movies_3[2] = "GodFather";
movies_3[3] = "The-Departed";
movies_3[4] = "Joker";

delete movies_3[0];
console.log(movies_3);

// 5

var favMovies3 = [];
favMovies3[0] = "Memento";
favMovies3[1] = "Dark-Knight";
favMovies3[2] = "GodFather";
favMovies3[3] = "The-Departed";
favMovies3[4] = "Joker";
favMovies3[5] = "Shawshank-Redemption";
favMovies3[6] = "Thor: Ragnarok"

for (let index = 0; index < favMovies3.length; index++) {
    window.console.log(favMovies3[index]);
}

// 6
var favMovies4 = [];
favMovies4[0] = "Memento";
favMovies4[1] = "Dark-Knight";
favMovies4[2] = "GodFather";
favMovies4[3] = "The-Departed";
favMovies4[4] = "Joker";
favMovies4[5] = "Shawshank-Redemption";
favMovies4[6] = "Thor: Ragnarok"

for (index in favMovies4) {
    if (favMovies4.hasOwnProperty(index)) {
        window.console.log(favMovies4[index]);
    }
}

// 7
var favMovies5 = [];
favMovies5[0] = "Inception";
favMovies5[1] = "Joker";
favMovies5[2] = "Pokemon";
favMovies5[3] = "2012";
favMovies5[4] = "Armageddon";
favMovies5[5] = "Stuart Little";
favMovies5[6] = "Baby's Day Out";

favMovies5.sort();
for (index in favMovies5) {
    if (favMovies5.hasOwnProperty(index)) {
        window.console.log(favMovies5[index]);
    }
}

// 8
var favMovies6 = [];
favMovies6[0] = "Inception";
favMovies6[1] = "Joker";
favMovies6[2] = "Pokemon";
favMovies6[3] = "2012";
favMovies6[4] = "Armageddon";
favMovies6[5] = "Stuart Little";
favMovies6[6] = "Baby's Day Out";

var leastFavMovies = [];
leastFavMovies[0] = "Twenty One";
leastFavMovies[1] = "Life of Walter Mitty";
leastFavMovies[2] = "Curious Sam";

window.console.log("Movies I like:\n\n");
for (let index = 0; index < favMovies6.length; index++) {
    window.console.log(favMovies6[index]);
}
window.console.log("\n");

window.console.log("Movies I regret watching:\n\n");
for (let index = 0; index < leastFavMovies.length; index++) {
    window.console.log(leastFavMovies[index]);
}
window.console.log("\n");

// 9
var movies = favMovies6.concat(leastFavMovies);
movies.reverse();
for (let index = 0; index < movies.length; index++) {
    window.console.log(movies[index]);
}
window.console.log("\n");

// 10
var movies2 = favMovies6.concat(leastFavMovies);
window.console.log(movies.pop());