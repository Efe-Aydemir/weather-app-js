let country = document.querySelector('#country')
let city = document.querySelector('#city')
let button = document.querySelector('#submit')
let contdiv = document.querySelector('#countrydiv')
let citydiv = document.querySelector('#citydiv')
let weatherBody = document.querySelector('#weatherBody')
let result = document.querySelector('#result')


button.addEventListener('click', () => {
    let newCountry = country.value[0].toUpperCase()+country.value.slice(1)
    let newCity = city.value[0].toUpperCase()+city.value.slice(1)


    let api = `http://api.weatherapi.com/v1/current.json?key=00d93e8b17be43da9bc134752221203&q=${newCountry}/${newCity}&aqi=no`
fetch(api)
.then(response => {
    if (response.status === 200) {
        return response.json()
    } else {
        console.log('hata')
    }
})
.then(response => {
    let country = response.location.country
    let city = response.location.name
    let temp = response.current.temp_c
    contdiv.style.display = 'none'
    citydiv.style.display = 'none'
    button.style.display = 'none'
    result.innerHTML = `${response.current.temp_c} degree`
    result.style.display = 'inline'
    let newbtn = document.createElement('button')
    newbtn.classList = 'btn btn-warning rounded-pill  hvr-glow'
    newbtn.id = 'back'
    newbtn.innerHTML = 'Back to Page'
    weatherBody.prepend(newbtn)


    newbtn.addEventListener('click', () => {
        window.location = 'index.html'
    })
})
})