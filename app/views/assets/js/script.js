import ajaxRequest from './modules/ajaxRequest.js';
import mkCard from './modules/makeCard.js';
$(() => {

  const dummyData = [{
      "id": 0,
      "linkedinName": "nachomerino",
      "userName": "Ignacio Merino Arnaiz",
      "position": "FE Developer"
    },
    {
      "id": 1,
      "linkedinName": "Licht-en-Stein",
      "userName": "Boris Lichtenstein",
      "position": "BE Developer"
    },
    {
      "id": 2,
      "linkedinName": "laithmassoud",
      "userName": "Laith Ma Soud",
      "position": "BE Developer"
    },
    {
      "id": 3,
      "linkedinName": "Flukal",
      "userName": "Fulvio Calderone",
      "position": "FE Developer"
    },
    {
      "id": 4,
      "linkedinName": "amerbdx",
      "userName": "Amer B D X",
      "position": "BE Developer"
    }
  ];


  async function getAPIData(url) {
    try {
      await $.ajax(url, {
          method: 'GET',
          contentType: 'application/json',
        })
        .done((data) => {
          const array = [];
          array.push(data);
          $('#picfolio').append(mkCard(array));
        })
    } catch (err) {
      console.log('error', err)
    }
  }
  let GHurl;
  for (let i = 0; i < dummyData.length; i += 1) {
    GHurl = `https://api.github.com/users/${dummyData[i].linkedinName}?client_id=a12b6d5ca6b666061f3a&client_secret=4d8bbe0423b48bf1394b5b4194138302ceadc6f1`;
    getAPIData(GHurl);
  }



});
