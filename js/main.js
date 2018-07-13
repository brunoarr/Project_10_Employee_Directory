//capitalize first letter of each word
function ucFirstAllWords( str ){
    var pieces = str.split(" ");
    for ( var i = 0; i < pieces.length; i++ ){
      var j = pieces[i].charAt(0).toUpperCase();
      pieces[i] = j + pieces[i].substr(1);
    }
    return pieces.join(" ");
}

//AJAX
$.ajax({
  url: 'https://randomuser.me/api/?results=12&inc=name,picture,email,location,cell,dob',
  dataType: 'json',
  success: function(response) {
    var cardHTML = '';
    for ( var i = 0, l = 12; i < l; i++ ){
      let image = response.results[i].picture.large;
      let name = ucFirstAllWords(response.results[i].name.first);
      let surname = ucFirstAllWords(response.results[i].name.last);
      let email = response.results[i].email;
      let city = ucFirstAllWords(response.results[i].location.city);

      cardHTML += '<div class="employee" id="employee' + i + '">';
      cardHTML += '<div><img class="avatar" src="' + image + '"></div>'; //add image
      cardHTML += '<div><ul>';//open ul
      cardHTML += '<li class="name">' + name + ' ' + '<span>' + surname + '</span></li>'; //add name
      cardHTML += '<li class="other-info">' + email + '</li>'//add email
      cardHTML += '<li class="other-info">' + city + '</li>'//add city
      cardHTML += '</ul></div>';//close ul
      cardHTML += '</div>'; //close div
    }; //end loop
    $('#randomusers').html(cardHTML);

    //MODAL
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];
    //Open modal function
    $('.employee').on('click', openmodal);
    function openmodal(){
      //let currentIndex = $(this).attr('id').slice(-1);
      let currentIndex = $(this).index();
      let currentMember = response.results[currentIndex];
      let imageModal = response.results[currentIndex].picture.large;
      let nameModal = ucFirstAllWords(response.results[currentIndex].name.first);
      let surnameModal = ucFirstAllWords(response.results[currentIndex].name.last);
      let emailModal = response.results[currentIndex].email;
      let cityModal = ucFirstAllWords(response.results[currentIndex].location.city);
      let phone = response.results[currentIndex].cell;
      let street = ucFirstAllWords(response.results[currentIndex].location.street);
      let state = ucFirstAllWords(response.results[currentIndex].location.state);
      let age = response.results[currentIndex].dob.age;
      //HTML modal
      modal.style.display = "block";
      var modalHTML = '';
      modalHTML += '<span class="close">&times;</span>';
      modalHTML += '<div><img class="avatar-modal" src="' + imageModal + '"></div>';
      modalHTML += '<div><ul>';
      modalHTML += '<li class="name">' + nameModal + ' ' + '<span>' + surnameModal + '</span></li>';
      modalHTML += '<li class="other-info">' + emailModal + '</li>';
      modalHTML += '<li class="other-info">' + cityModal + '</li>';
      modalHTML += '<hr>';
      modalHTML += '<li class="other-info">' + phone + '</li>';
      modalHTML += '<li class="other-info">' + street + ', ' + state + '</li>';
      modalHTML += '<li class="other-info">' + "Age: " + age + '</li>';
      modalHTML += '</ul></div>';
      $('#modalhtml').html(modalHTML);
    }

    //When the user clicks (x), close the modal.
    modal.onclick = (e) => {
      if (e.target.className == 'close') {
        modal.style.display = "none";
      }
    }

    // When the user clicks outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
   }

  } //end function
}); //end Ajax
