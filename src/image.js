export class Foxy {
  async getFoxImage() {
   
    let jsonifiedResponse;
    try {
      let response = await fetch(`https://randomfox.ca/floof/`);
      // console.log('i am past the await');
      
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
          
      } else {
        jsonifiedResponse = false;
      }
    } catch (error) {
      // console.log('in the catch');
      return false;
    }  
    return jsonifiedResponse;  
  }

  
  
}
