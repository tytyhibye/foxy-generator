import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Foxy} from './image.js';
import {Wizzy} from './name.js';

$(document).ready(function () {
  $('#foxButton').click(function () {
    (async () => {
      let foxy = new Foxy();
      const response = await foxy.getFoxImage();
      console.log('response: ', response);
      getElements(response);
    })();
    function getElements(response) {
      if (response) {
        let imageLink = response.image;
        // let name = response[1].name;
        // $().html(`<img src=${imageLink} />`)
        $('.foxImage').html(`<img src=${imageLink}></img>`);
      } else {
        $('.foxImage').text(
          'Uh oh, something went wrong. Please refresh and try again.'
        );
      }
    }
  });
  // $('#foxButton').fadeOut(300);
  // $('#wizButton').fadeIn(1500);
  $('#wizButton').click(function () {
    let wizzy = new Wizzy();
    const response = wizzy.getWizName();
    // console.log('response: ', response);
    // getElements(response);
    response.then(function getElements(response) {
      if (response) {
        let index = wizzy.randomNumber(parseInt(response.length));
        let nameLink = response[index].name; 
        console.log(index);
        console.log(nameLink);
        $('.showName').text(nameLink);
      }
    })
  });
});

// $2a$10$BU9J1FskYFj9Tr2aWZ5Rw.3oU/34XYSJhNMGNUBF01RL7u2VTXWVa
// https://www.potterapi.com/?key=2a$10$BU9J1FskYFj9Tr2aWZ5Rw.3oU/34XYSJhNMGNUBF01RL7u2VTXWVa#character-routes
// {"image":"http:\/\/randomfox.ca\/images\/121.jpg","link":"http:\/\/randomfox.ca\/?i=121"}
