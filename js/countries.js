const loadCounries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => {
        displaydata(data);
    })
}

loadCounries();

const displaydata = (countries) =>{
    // for(const country of countries){
    //     console.log(country);
    // }
    const countryDiv = document.getElementById('countries');
    countries.forEach(country =>{
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `
            <div><img src="${country.flags.png}" style="width:100%"/></div>
            <h3>${country.name.common}</h3>
            <p>${country.capital}</p>
            <button onClick="loadCountryByName('${country.name.common}')">Detail</button>
        `;
        // const h3 = document.createElement('h3');
        // const p = document.createElement('p');
        // h3.innerText = country.name.common;
        // p.innerText = country.capital;
        // div.appendChild(h3);
        // div.appendChild(p);
        countryDiv.appendChild(div);
    })
}



const loadCountryByName = name =>{
    const url = `https://restcountries.com/v3.1/name/${name}`;
    fetch(url).then(res =>res.json()).then(data => displayCountryDetails(data[0]));
}

const displayCountryDetails = country =>{
    const countryDetailDiv = document.getElementById('country-detail');
    // const detailSec = document.getElementById('detail');
    countryDetailDiv.innerHTML = `
        <h4>${country.name.common}</h4> 
        <p>Population: ${country.population}</p>
        <img src="${country.flags.png}" /> 
    `;
    console.log(country);
}