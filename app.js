fetch("https://cors-anywhere.herokuapp.com/api.thesneakerdatabase.com") // see actual random user
.then((response) => response.json())
.then((JSONresponse) => console.log(JSONresponse))

//   .catch( (err) => displayError(err) );

