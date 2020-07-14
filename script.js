var i = 0;
setInterval(function() {
  var currentlyDate = new Date();
  var dd = currentlyDate.getDay();
  var day;
  var mm = currentlyDate.getMonth();
  var month;
  var date = currentlyDate.getDate();
  var year = currentlyDate.getFullYear();
  var hour = currentlyDate.getHours();
  var minute = currentlyDate.getMinutes();
  var second = currentlyDate.getSeconds();
  var hourArr = ['час', 'часа', 'часов'];
  var minArr = ['минута', 'минуты', 'минут'];
  var secArr = ['секунда', 'секунды', 'секунд'];

  if (dd == 0) {
    day = 'воскресенье';
  }
  else if (dd == 1) {
    day = 'понедельник';
  }
  else if (dd == 2) {
    day = 'вторник';
  }
  else if (dd == 3) {
    day = 'среда';
  }
  else if (dd == 4) {
    day = 'четверг';
  }
  else if (dd == 5) {
    day = 'пятница';
  }
  else {
    day = 'суббота';
  }

  if (mm == 0) {
    month = 'января';
  }
  else if (mm == 1) {
    month = 'февраля';
  }
  else if (mm == 2) {
    month = 'марта';
  }
  else if (mm == 3) {
    month = 'апреля';
  }
  else if (mm == 4) {
    month = 'мая';
  }
  else if (mm == 5) {
    month = 'июня';
  }
  else if (mm == 6) {
    month = 'июля';
  }
  else if (mm == 7) {
    month = 'августа';
  }
  else if (mm == 8) {
    month = 'сентября';
  }
  else if (mm == 9) {
    month = 'октября';
  }
  else if (mm == 10) {
    month = 'ноября';
  }
  else if (mm == 11) {
    month = 'декабря'
  }

  function checkArr(x,y) {
    z = x % 10;
    if (z == 1 && x != 11) return y[0];
    else if ( z > 1 && z < 5 && x != 11 && x != 12 && x != 13 && x != 14) return y[1];
    else return y[2];
  };
    
  i++
  console.log('Cегодня ' + date + ' ' + month + ' ' + year + ' года' + ' ' + day + ',' + ' ' + hour + ' ' + checkArr(hour,hourArr) + ' ' + minute + ' ' + checkArr(minute,minArr) + ' ' + second + ' ' + checkArr(second,secArr));
}, 1000);