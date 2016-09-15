export let arr = [];
(function loadData () {
  let xhr = new XMLHttpRequest();
  const string = 'http://localhost:1337/bank.gov.ua/NBUStatService/v1/statdirectory/exchange?';
  const dates = Math.floor((new Date() - new Date(2010, 0, 1)) / 1000 / 3600 / 24);
  for (let i = 1; i <= dates; i++) {
    let dateStart = new Date(2010, 0, 1);
    let month;
    let day;
    let getMonth; 
    dateStart = new Date(dateStart.setDate(i));
    let year = dateStart.getFullYear();
    getMonth = dateStart.getMonth() + 1;
      if (getMonth < 10 && getMonth > 0) {
        month = '0' + getMonth;
      } else {
        month = getMonth;
      }  
      if (dateStart.getDate() < 10 && dateStart.getDate() > 0) {
        day = '0' + dateStart.getDate();
      } else {
        day = dateStart.getDate();
      } 
      let params = 'valcode=CHF&date=' + year + month + day + '&json';
      let url = string + params;
      xhr.open('GET', url , false);
      xhr.send();
      if (xhr.status != 200) {
        alert('Ошибка ' + xhr.status + ': ' + xhr.statusText);
      } else {
      //console.log(xhr.responseText);
      let obj = JSON.parse(xhr.responseText);
      arr.push(obj[0] ? {date: obj[0].exchangedate, rate: obj[0].rate} : 0);
    }
  }
})();