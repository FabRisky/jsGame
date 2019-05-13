const request = new XMLHttpRequest();
request.open('GET', 'https://neto-api.herokuapp.com/weather');
request.send();
request.addEventListener('load', getData);
function getData(event) {
  if (event.target.status === 200) {
    const response = JSON.parse(event.target.responseText);
    setData(response);
  }
}