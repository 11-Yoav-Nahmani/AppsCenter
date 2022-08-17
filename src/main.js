const getData = () => {
    if (localStorage.getItem('applications') == null) {
        localStorage.setItem('applications', JSON.stringify(applications));
        localStorage.setItem('id', id);
    }

    return JSON.parse(localStorage.getItem('applications'));
}

document.addEventListener("DOMContentLoaded", () => {
    setTable(getData());
    document.getElementById('search').addEventListener('input', (event) => { search(event.target.value) });
});

function setTable(data) {
    let appList = '';

    data.forEach((row) => {
        appList +=  `<div class="company">`
        appList +=   `<img src="./src/images/${row.imageUrl? row.imageUrl: 'help.png'}" class="icon">`
        appList +=   `<div class="app-info">`
        appList +=    `<h3 class="move-info-left">${row.name}</h3>`
        appList +=    `<h6 class="move-info-left">${row.desc}</h6>`
        appList +=    `<p class="move-info-left">price: ${row.price}$</p>`
        appList += `<p class="move-info-left">company: ${row.companyName}</p>`
        appList +=  `</div></div>`
         
      });
      document.getElementById('app-list').innerHTML = appList
  }
  
    



function search(filter) {
    const filteredData = applications.filter((row) => row.name.toLowerCase().includes(filter.toLowerCase()));
    setTable(filteredData);
}

