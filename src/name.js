export class Wizzy {
  getWizName() { 
    fetch(`https://www.potterapi.com/v1/characters?key=${process.env.API_KEY}`)
    .then(function(response) {
      if (response.ok && response.status == 200) {
        return response.json();
      } else {
        return false;
      }
    })
    .catch(function(error) {
      return false;
    })
    .then(function(jsonifiedResponse) {
      getElements(jsonifiedResponse);
    });
  }  
  randomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}

// console.log('process.env.API_KEY: ', process.env.API_KEY);


