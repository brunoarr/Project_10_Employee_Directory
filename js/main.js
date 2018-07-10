$.ajax({
  url: 'https://randomuser.me/api/?results=12&inc=name,picture,email,location,cell,dob',
  dataType: 'json',
  success: function(response) {
    var cardHTML = '';
    for ( var i = 0, l = 12; i < l; i++ ){
      let image = response.results[i].picture.large;
      let name = response.results[i].name.first;
      let surname = response.results[i].name.last;
      let email = response.results[i].email;
      let city = response.results[i].location.city;

      cardHTML += '<div class="employee" id="employee' + i + '">';
      cardHTML += '<div><img class="avatar" src="' + image + '"></div>'; //add image
      cardHTML += '<div><ul>';//open ul
      cardHTML += '<li class="name capitalize">' + name + ' ' + '<span class="capitalize">' + surname + '</span></li>'; //add name
      cardHTML += '<li class="other-info">' + email + '</li>'//add email
      cardHTML += '<li class="other-info capitalize">' + city + '</li>'//add city
      cardHTML += '</ul></div>';//close ul
      cardHTML += '</div>'; //close div
    }; //end loop
    $('#randomusers').html(cardHTML);
  } //end function
}); //end Ajax


//MODAL

$.ajax({
  url: 'https://randomuser.me/api/?results=12&inc=name,picture,email,location,cell,dob',
  dataType: 'json',
  success: function(response) {

    var modal = document.getElementById('myModal');
    var card = document.getElementById("employee0");
    var span = document.getElementsByClassName("close")[0];

    //Open modal function
    $('.employee').on('click', openmodal);
    function openmodal(){
      //content of the modal
      console.log(event.target.id);
      var id = (event.target.id);
      modal.style.display = "block";
    }

    // //Open modal function
    // $('.employee').addEventListener('click', openmodal);
    // function openmodal(){
    //   //content of the modal
    //   console.log(event.target.id);
    //   modal.style.display = "block";
    // }

    // When the user clicks (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    // When the user clicks outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
   }
 } //end success function
}); //end ajax
