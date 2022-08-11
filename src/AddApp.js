const addItemToTheList = (data) => {
  
    localStorage.setItem('applications', JSON.stringify(JSON.parse(localStorage.getItem('applications')).concat(data)));
}

const getNextId = () => {
    let id = localStorage.getItem('id');
    localStorage.setItem('id', ++id);
    
    return id;
}

document.addEventListener("DOMContentLoaded", () => {
		
});

window.onload = () =>  { 
  validate()
  createOnConfirmClick()
}


function validate() {
    'use strict'
  
    var forms = document.querySelectorAll('.needs-validation')
  
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('input', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })

      Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('click', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  }

  function createOnConfirmClick() {
    const confirmEl = document.getElementById('confirm');

    if (confirmEl) {
        confirmEl.addEventListener('click', () => {
          
            let name = document.getElementById('appName').value;
            let price = document.getElementById('priceInput').value;
            let desc = document.getElementById('appDescription').value;
            let companyName = document.getElementById('companyName').value;
            let imageUrl = document.getElementById('imageUrl').value;
            
            getData();
            addItemToTheList(localStorage);
            getNextId();

            console.log(localStorage)

            }
        );}
}



