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
        $('#foxImage').html(`<img src=${imageLink} width=60vw height=60vh>`);
      } else {
        $('#foxImage').text(
          'Uh oh, something went wrong. Please refresh and try again.'
        );
      }
    }
    $('#results').fadeIn(1700);
    $('#foxButton').hide();
    $('#wizButton').fadeIn(1700);
  });
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
        $('#showName').text(nameLink);
      }
    });
    $('#wizButton').hide();
    $('#resetButton').fadeIn(1700);
  });
  // $('#resetButton').click(function () {
  //   $('#results').hide();
  //   $('#foxButton').show();
  //   $('#resetButton').hide();
  //   $('#showName').text("");
  // });
});