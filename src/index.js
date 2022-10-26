// task 1: Create your own JavaScript object representing your
//    favorite movie. Include at least 5 properties: movie title,
//    director, release year, actors (make this an array with at
//    least 3 elements), and length of movie in minutes.
//    Feel free to add more!
let favMovie = {
  movieTitle: "Scarface",
  movieDirector: "Brian de Palma",
  releaseYear: 1983,
  actors: ["Al Pacino", "Steven Bauer", "Mark Margolis"]
};

// task 2: After you have created your movie object, console log the
//    title of your movie using dot notation.
console.log(favMovie.movieTitle);
// task 3: Console log the director's name
console.log(favMovie.movieDirector);
// task 4: Console log the release year.
console.log(favMovie.releaseYear);
// task 5: Use bracket notation in combination with dot notation to
//    access one of the actors and console log their name.
console.log(favMovie.actors[0]);
// task 6: Add an actor to the arrays of actors. Console log the array
//    to check the actor was added.
let addOn = "Michelle Pfieirrer";
favMovie.actors.push(addOn);
console.log(favMovie.actors);

// task 7: Oh, no! One of the actors has been cancelled! Remove one
//    of the actors from the array. Console log the array to check
//    the actor was removed.
favMovie.actors.pop();
// task 8: An extended director's cut has been release for your movie!
//    Add 20 minutes to the duration. Console log duration.
