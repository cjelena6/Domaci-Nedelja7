import {Countries, Countries2} from "./components/Countries";
import { getAllCountries } from "./service";
import { divSelect, divMain, inputSearch} from "./constants"
import Select from "./components/Select";




const generateSelect = (arr) => {
    let options = new Set(arr.map(country => country.region))
    divSelect.innerHTML = ``
let select = Select(options)


select.addEventListener("change", () => {
    let tmp = arr.filter(country => country.region.startsWith(select.value))

    divMain.innerHTML = ''

    divMain.append(...Countries(tmp))
})
divSelect.append(select)
}


getAllCountries().then(res => {
    let countries = res.data
    console.log(countries[0]);
    document.querySelector('main').append(...(Countries(countries).slice(1,15)))

    generateSelect(countries)


    inputSearch.addEventListener('input', () => {
        divMain.innerHTML = ''
        let filter = countries.filter(country => country.name.toLowerCase().includes(inputSearch.value.toLowerCase()));
        divMain.append(...Countries(filter))
        generateSelect(filter)
    })

})

// console.log(divMain.children.length);


