const addItemToTheList = (data) => {
  localStorage.setItem('applications', JSON.stringify(JSON.parse(localStorage.getItem('applications')).concat(data)));
}

const getNextId = () => {
  let id = localStorage.getItem('id');
  localStorage.setItem('id', ++id);

  return id;
}

document.addEventListener("DOMContentLoaded", () => {
  createOnConfirmClick()
  validate()
});


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
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
}

function createOnConfirmClick() {
  document.getElementById('appForm').addEventListener('submit', (event) => {
    event.preventDefault()
    let checkValidity = true

    let name = document.getElementById('appName').value;
    let price = document.getElementById('priceInput').value;

    let namePattarn = /[A-Za-z0-9]{4,30}$/
    let pricePattarn = /^[0-9]*\.?[0-9]*$/

    if (!namePattarn.test(name) || !pricePattarn.test(price)) {
      checkValidity = false;
    }
    let desc = document.getElementById('appDescription').value;
    if (desc == '') {
      desc = 'this app does not have a description'
    }
    let companyName = document.getElementById('companyName').value;
    if (companyName == '') {
      companyName = 'this app does not have a company'
    }
    let imageUrl = document.getElementById('imageUrl').value;

    let id = new String(getNextId());

    let newApp = {
      id: id,
      imageUrl: imageUrl,
      name: name,
      price: price,
      desc: desc,
      companyName: companyName
    };
    if (checkValidity) {
      addItemToTheList(newApp)
      redirect()
    }
  }
  );
}
function redirect() {
  window.location.href = "./mainPage.html";
  return false;
}




