function CardsController() {
  var marvelService = new MarvelService()

  this.add = function add(id) {
    marvelService.addToMyCharacters(id)
    updateMarvel(marvelService.getMarvelCharacters())
    updateRoster()
  }
  marvelService.getCharacters(ready)

  function ready(data) {
    updateMarvel(data)
  }
  this.remove = function remove(id) {
    marvelService.removeMyCharacter(id)
    updateRoster(marvelService.getMyCharacters())
    updateMarvel(marvelService.getMarvelCharacters())
  }

  function updateMarvel(list) {
    var elem = document.getElementById('marvel-characters')
    elem.innerHTML = ''
    var marvelTemplate = ''
    for (var i in list) {
      var character = list[i];
      character.thumbnail.path = character.thumbnail.path.replace('http:', '')
      marvelTemplate += `
      <div class="col-md-3 card outline">
        <img src="${character.thumbnail.path}.${character.thumbnail.extension}" width="100">
        <h3>${character.name}</h3>
        
          <button class="btn-success" id="${character.id}" onclick="app.controllers.cardsController.add('${character.id}')">Add to Team</button>
        
      </div>
      `

      elem.innerHTML = marvelTemplate
    }
    // console.log(marvelService.marvelCharacters)
    // console.log(marvelService.myCharacters)
  }
  function updateRoster(id) {
    var myChars = marvelService.getMyCharacters()
    var myElem = document.getElementById('my-characters')
    myElem.innerHTML = ''
    var myTemplate = ''
    for (var i in myChars) {
      var myChar = myChars[i];
      myTemplate += `
      <div class="col-md-2 roster-card outline">
        <img src="${myChar.thumbnail.path}.${myChar.thumbnail.extension}" width="100">
        <h3>${myChar.name}</h3>
      
         <button class="btn-success" id="${myChar.id}" onclick="app.controllers.cardsController.remove('${myChar.id}')">Remove from Team</button>
      
    </div>
      `
    }
    myElem.innerHTML = myTemplate
  }
}

