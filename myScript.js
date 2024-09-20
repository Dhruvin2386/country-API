async function getCountryData() {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const data = await response.json();
    console.log(data);

    data.forEach((country) => {
        var show = document.getElementById("show");
        show.innerHTML += `
        <tr>
            <td>${country.name.common}</td>
            <td>${country.capital ? country.capital[0] : 'N/A'}</td>
            <td>${country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</td>
            <td>${country.flag}</td>
        </tr>`
    })
}
getCountryData();