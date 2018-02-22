import ajaxRequest from './modules/ajaxRequest.js';
import mkCard from './modules/makeCard.js';
$(() => {
  let dataBase = [];
  // load the info from database and github when ready
  async function getDataBaseData(url) {
    let ghUrl;
    try {
      await $.ajax(url, {
          method: 'GET',
          contentType: 'application/json',
        })
        .done((data) => {
          data.forEach((data) => {
            dataBase.push(data)
            ghUrl = `https://api.github.com/users/${data.githubname}?client_id=a12b6d5ca6b666061f3a&client_secret=4d8bbe0423b48bf1394b5b4194138302ceadc6f1`;
            getAPIData(ghUrl, data.username, data.position);

          })
        })
    } catch (err) {
      console.log('error', err)
    }
  }

  async function getAPIData(url, username, position) {
    await $.ajax(url, {
        method: 'GET',
        contentType: 'application/json',
      })
      .done((data) => {
        const array = [];
        array.push(data)
        $('#picfolio').append(mkCard(array, username, position));
      })
  }

  getDataBaseData('/portfolio');

    const user = $('#email').val('amerbdx@gmail.com');
    const password = $('#exampleInputPassword1').val('abc');

  $('#Login').on('submit', ((e) => {
    e.preventDefault();
    const user = $('#email1').val();
    const password = $('#exampleInputPassword1').val();
    const data = {
      email: user,
      password: password,
    }
      ajaxRequest('POST', '/login', data)
        .then(data => console.log(data.message))
        .then($('#myModal').modal('toggle'))
        .catch(error => console.log(error))
  }));




});
