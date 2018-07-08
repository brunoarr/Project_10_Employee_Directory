$.ajax({
  url: 'https://randomuser.me/api/?results=12',
  dataType: 'json',
  success: function(response) {
    var cardHTML = '';
    $.each(response, function(index, results){

      var image = response.results[index].picture.medium;
      var name = response.results[index].name.first;
      var surname = response.results[index].name.last;
      var email = response.results[index].email;
      var city = response.results[index].location.city;

      cardHTML += '<div class="employee">';
      cardHTML += '<div><img class="avatar" src="' + image +'"></div>'; //add image
      cardHTML += '<div><ul>';//open ul
      cardHTML += '<li class="name">' + name + ' ' + surname + '</li>'; //add name
      cardHTML += '<li class="other-info">' + email + '</li>'//add email
      cardHTML += '<li class="other-info">' + city + '</li>'//add city
      cardHTML += '</ul></div>';//close ul
      cardHTML += '</div>'; //close div
    }); //end loop
    $('#randomusers').html(cardHTML);
  } //end function
}); //end Ajax


/* Employee card HTML
<div class="employee">
  <div>
    <img class="avatar" src="images/user3.jpg">
  </div>
  <div>
    <ul>
      <li class="name">Juan</li>
      <li class="other-info">juan@test.com</li>
      <li class="other-info">Chicago</li>
    </ul>
  </div>
</div>
*/
