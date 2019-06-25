console.log('javascript is working');

function start() {
  document.getElementById('accommodation').classList.add('moving');
  document.getElementById('banner').classList.add('upwards');
}

function banner() {
    document.getElementById('banner').classList.remove('upwards');
    document.getElementById('accommodation').classList.remove('moving');
}

function changeColour() {
  console.log('Button has changed colour');
  document.getElementsByClassName('hotel')[0].style.backgroundColor = 'black';
}
