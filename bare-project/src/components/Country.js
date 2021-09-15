
export const Country = (country)=>{
    const divCountry = document.createElement('div')

    const p = document.createElement('p')
    p.textContent = country.name

    const img = document.createElement('img')
    img.src = country.flag
    img.alt = `Flag of ${country.name}`

    divCountry.append(p,img,document.createElement('hr'))

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
