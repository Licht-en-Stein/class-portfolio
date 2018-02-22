export default function crudAPI(method, url, data) {
  return fetch(url, {
      body: JSON.stringify(data),
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'user-agent': 'NachoMerino',
        'content-type': 'application/json'
      },
      method: method,
      mode: 'cors',
      redirect: 'follow',
      referrer: 'no-referrer',
    })
    .then(response => response.json())
}
