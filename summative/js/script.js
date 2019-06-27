console.log('javascript is working');

function start() {
  document.getElementById('accommodation').classList.add('moving');
  document.getElementById('banner').classList.add('upwards');
}

function banner() {
    document.getElementById('banner').classList.remove('upwards');
    document.getElementById('accommodation').classList.remove('moving');
}

function empty() {
  document.getElementById('accommodation').innerHTML = '';
}



var input = document.getElementById('location');
var options = {
  componentRestrictions: {country: 'nz'}
};
var autoComplete = new google.maps.places.Autocomplete(input, options);
autoComplete.addListener('place_changed', function(){
    console.log('the place has been changed');
    var place = autoComplete.getPlace();
    console.log(place);
    map.panTo(place.geometry.location);
    var placeInfo = document.getElementById('placeInfo');
    placeInfo.innerHTML = '<h2>Welcome to '+place.name+'</h2>';
    placeInfo.innerHTML += '<img src="'+place.photos[0].getUrl()+'">';
});









// function activatePlacesSearch() {
//   var input = document.getElementById('search_term');
//   var autoComplete = new google.maps.places.Autocomplete(input);
// }

// function changeColour() {
//
//   if (getElementById = 'hotel'){
//     document.getElementById('hotel').style.backgroundColor = 'green';
//   } else if ('motel'){
//     document.getElementById('motel').style.backgroundColor = 'grey';
//   } else if ('house'){
//     document.getElementById('house').style.backgroundColor = 'grey';
//   } else if ('hostel') {
//     document.getElementById('hostel').style.backgroundColor = 'grey';
//   }
// }

// $(document).ready(function(){
//     $('#accommodation').addClass('pink');
//
//     $('#accommodation').click(function(){
//         if($(this).hasClass('pink')){
//             $(this).removeClass('pink');
//             $(this).addClass('green');
//         } else {
//             $(this).removeClass('green');
//             $(this).addClass('pink');
//         }
//     });
//
// });
