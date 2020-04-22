export class Foxy {
  async getFoxImage() {
    console.log('process.env.API_KEY: ', process.env.API_KEY);
    try {
      // let response = await fetch(`https://randomfox.ca/floof/`);
      // https://www.potterapi.com/v1/characters?key=${process.env.API_KEY}
      let response = await fetch(`https://randomfox.ca/floof/`);
      console.log('i am past the await');
      
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();

      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch (error) {
      // console.log('in the catch');
      
      return false;
    }    
  }
  // randomNumber(array) {
  //   return Math.floor(Math.random()  * (array.length + 1));
  // }
}
