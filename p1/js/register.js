
var field = document.getElementById("membres");

       
field.onchange = function() {
    var value = field.value - 1;
    
    var container = document.getElementById("familyContainer");
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i=0;i<value;i++){
        container.innerHTML += '<br> \
              <div class="form-row">\
                <div class="col-md-6">\
                  <div class="form-label-group">\
                    <input type="text" id="firstName-'+i+'" name="firstName-'+i+'" class="form-control" placeholder="Prénom" required="required">\
                    <label for="firstName-'+i+'">Prénom</label>\
                  </div> \
                </div>\
                <div class="col-md-6">\
                  <div class="form-label-group">\
                    <input type="text" id="lastName-'+i+'" name="lastName-'+i+'" class="form-control" placeholder="Nom" required="required"> \
                    <label for="lastName-'+i+'">Nom</label> \
                  </div> \
                </div> \
              </div>';
    }
}
