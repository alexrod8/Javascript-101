// create a function that takes 2 arguments, an array and an object.
//Array will contain 2 or more elements

function greetings(array, object) {
  console.log(
    "Hello " +
      array.join(" ") +
      "!" +
      " Nice to have a " +
      object.title +
      " " +
      object.occupation +
      " " +
      "Around!"
  );
}
greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" });

// logs Hello, John Q Doe! Nice to have a Master Plumber around.
