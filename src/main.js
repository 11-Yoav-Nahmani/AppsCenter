const getData = () => {
    if (localStorage.getItem('applications') == null) {
        localStorage.setItem('applications', JSON.stringify(applications));
        localStorage.setItem('id', id);
    }

    return JSON.parse(localStorage.getItem('applications'));
}

document.addEventListener("DOMContentLoaded", () => {

});

function rePrint(){
    const link = document.getElementById('addApp');
    if(link && localStorage.length != 0){
      link.addEventListener('load', ()=>{
        addItemToTheList(localStorage);
  
    console.log("check");
    setTable(applications);
      })
    }
  }

function setTable(data) {
    let appList = document.getElementById('app-list');
    appList.textContent = '';
    data.forEach((dataRow) => {
        const company = document.createElement('div');
        company.classList.add('company')
        const icon = document.createElement('img');
        icon.setAttribute('src','./src/images/'+ dataRow.id + '/' + dataRow.imageUrl);
        icon.setAttribute('alt','./src/images/Help.png');
        icon.setAttribute('onerror','this.src="./src/images/Help.png"');
        icon.classList.add('icon');
        
        const appInfo = document.createElement('div');
        appInfo.classList.add('app-info');

        const appName = document.createElement('h3');
        appName.classList.add('move-info-left');
        appName.textContent = dataRow.name;

        const appDesc = document.createElement('h6');
        appDesc.classList.add('move-info-left');
        appDesc.textContent = dataRow.desc;

        const appPrice = document.createElement('p');
        appPrice.classList.add('move-info-left');
        appPrice.textContent = 'price: ' + dataRow.price + '$';

        const companyName = document.createElement('p');
        companyName.classList.add('move-info-left');
        companyName.textContent = 'company: ' +  dataRow.companyName;

        appList.appendChild(company)
        company.appendChild(icon);
        appInfo.appendChild(appName);
        appInfo.appendChild(appDesc);
        appInfo.appendChild(appPrice);
        appInfo.appendChild(companyName);
        company.appendChild(appInfo);
    });
}


function search(filter) {
    console.log(filter);
    const filteredData = applications.filter((row) => row.name.includes(filter.toLowerCase()) || row.name.includes(filter.toUpperCase()));
    setTable(filteredData);
}

window.onload = () => {
    setTable(applications);
    rePrint();
    document.getElementById('search').addEventListener('input', (event) => { search(event.target.value) });
};

const addApp = document.getElementById('addApp').addEventListener('click', ()=>{ window.location.replace('./addApplication.html')})
