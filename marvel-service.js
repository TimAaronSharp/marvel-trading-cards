function MarvelService() {
  var key = '?apikey=51b95417c37ece75b754218134468561';
  var baseUrl = 'http://gateway.marvel.com/v1/public/'

  var marvelCharacters = [];
  var myCharacters = [];


  this.getMarvelCharacters = function (id) {
    //what should this function return
    return JSON.parse(JSON.stringify(marvelCharacters))
  }

  this.getMyCharacters = function getMyCharacters(id) {
    //what should this function return
    return JSON.parse(JSON.stringify(myCharacters))
           
  }

  this.addToMyCharacters = function addToMyCharacters(id) {
    //in order to add a character to your list you will first need to find 
    //the character by its id in the marvelCharacters array
    for (var i = 0; i < marvelCharacters.length; i++) {
      if (marvelCharacters[i].id == id) {
        myCharacters.push(marvelCharacters[i]) //ADDS CHAR TO MYCHARACTERS ARRAY
        marvelCharacters.splice(marvelCharacters[i], 1) //REMOVES CHAR FROM MARVELCHARACTERS ARRAY. MAKES IT SO THEY CAN'T ADD MORE THAN ONE OF THE SAME CHAR, BUT PROBABLY WON'T WORK FOR                                                      MUTLI-TEAM BONUS CHALLENGE. MIGHT NEED TO REVISIT.
      }
    }
    console.log(myCharacters)
    console.log(marvelCharacters)
    return JSON.parse(JSON.stringify(myCharacters))
  }

  this.removeMyCharacter = function removeMyCharacter(id) {
    //you need to find the character that you want to remove by its id
    //and remove it.
  }


  this.getCharacters = function (callWhenDone) {
    //Use &offset=Number to add pagination
    $.get(baseUrl + 'characters' + key, function (response) {
      marvelCharacters = response.data.results; //THIS IS THE OBJECT PATH IN THE API TO THE OBJECT THAT HOLDS ALL THE CHARACTER OBJECTS.
      callWhenDone(marvelCharacters)
      console.log(marvelCharacters)
    })
  }
}
