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
}


function validate() {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    const check = Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }else{
            console.log(check);
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  }

  function appAdded(){
console.log(formValidation)
  }