const mkCardBody = ` <div class="col-12 col-md-4">
                        <div class="card">
                        </div>
                      `;

function mkInnerBody(data, username, pos) {
  return $(`<img class="card-img-top" src="${data.avatar_url}" alt="${data.name}GitHub Picture">
              <div class="card-body">
                <h5 class="card-title">${username}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${pos}</h6>
                <p class="card-text">${data.bio}</p>
              </div>`);
}

export default function mkCard(data, username, pos) {
  
  const $el = $(mkCardBody);
  const $cardBodyInsert = $el.find('.card');
  console.log(data);
  data.forEach((data) => {
    const $innerCard = mkInnerBody(data, username, pos);
    $cardBodyInsert.append($innerCard);
  });
  return $el;
}