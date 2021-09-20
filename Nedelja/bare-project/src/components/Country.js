import { divMain } from "../constants"


export const Country = (country)=>{
    const divCountry = document.createElement('div')

    const p = document.createElement('p')
    p.textContent = country.name

    const img = document.createElement('img')
    img.src = country.flag
    img.alt = `Flag of ${country.name}`

    const capital = document.createElement("p")
    capital.textContent = country.capital

    img.addEventListener("click", () => {
        divMain.textContent = ``
        const divCountry = document.createElement('div')

        const btnNext = document.createElement("button")
        btnNext.textContent = `Next`

        const btnBack = document.createElement("button")
        btnBack.textContent = `Back`

        btnBack.addEventListener("click", () => {
            divMain.textContent = ``

            const divCountry = document.createElement('div')

            const p = document.createElement('p')
            p.textContent = country.name

            const img = document.createElement('img')
            img.src = country.flag
            img.alt = `Flag of ${country.name}`

            const capital = document.createElement("p")
            capital.textContent = country.capital


            divCountry.append(p, img, capital, document.createElement('hr'))
            divMain.append(divCountry)
        })

        const btnPreview = document.createElement("button")
        btnPreview.textContent = `Preview` 


        const p = document.createElement('p')
        p.textContent = country.name

        const img = document.createElement('img')
        img.src = country.flag
        img.alt = `Flag of ${country.name}`

        const capital = document.createElement("p")
        capital.textContent = country.capital


        const population = document.createElement("p")
        population.textContent = `Population: ` + country.population

        const timezone = document.createElement("p")
        timezone.textContent = `Timezone: ` + country.timezones

        const languages = document.createElement("p")
        languages.textContent = `Languages: ` + country.languages


        divCountry.append(p, img, capital, population, timezone, languages, btnNext, btnPreview, btnBack, document.createElement('hr'))
        divMain.append(divCountry)

    })

    divCountry.append(p,img,capital,document.createElement('hr'))

    return divCountry

    
}


export const justOneCountry = (country) => {
    const divCountry = document.createElement('div')

    const p = document.createElement('p')
    p.textContent = country.name

    const img = document.createElement('img')
    img.src = country.flag
    img.alt = `Flag of ${country.name}`

    const nativeName = document.createElement("p")
    nativeName.textContent = country.nativeName

    const population = document.createElement("p")
    population.textContent =country.population

    const capital = document.createElement("p")
    capital.textContent = country.capital

    // const domen = document.createElement("p")
    // domen.textContent = country.topLevelDomain

    divCountry.append(p, img, nativeName, population, document.createElement('hr'))

    return divCountry


}
