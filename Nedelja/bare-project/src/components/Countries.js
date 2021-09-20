import {Country, justOneCountry} from "./Country.js"

export const Countries = (countries)=> countries.map(country => Country(country) )

export  const Countries2 = (countries) => countries.map(country => justOneCountry(country))

