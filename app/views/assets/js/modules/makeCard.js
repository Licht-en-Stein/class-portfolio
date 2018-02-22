const mkCardBody = ` <div class="col-12 col-md-4">
                        <div class="card">
                        </div>
                      `;

function mkInnerBody(data) {
  return $(`<img class="card-img-top" src="${data.avatar_url}" alt="${data.name}GitHub Picture">
              <div class="card-body">
                <h5 class="card-title">${data.login}</h5>
                <p class="card-text">${data.bio}</p>
              </div>`);
}

export default function mkCard(data) {
  
  const $el = $(mkCardBody);
  const $cardBodyInsert = $el.find('.card');
  console.log(data);
  data.forEach((worker) => {
    const $innerCard = mkInnerBody(worker);
    $cardBodyInsert.append($innerCard);
  });
  return $el;
}