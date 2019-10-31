import React, { useState, useEffect } from 'react';
import Weather from './Weather'

const Country = ({ countriesList, countryFilter, setFilterFn }) => {

    const showCountries = () => {

        if (countryFilter.length > 0) {
            const countriesToShow = countriesList.filter(country => country.name.includes(countryFilter))

            if (countriesToShow.length === 1) {
                return showCountryDetails(countriesToShow[0])
            }

            if (countriesToShow.length <= 10) {
                return countriesToShow.map(country =>
                    <div key={country.alpha2Code}>{country.name}
                        <button onClick={() => setFilterFn(country.name)}>show</button>
                    </div>)
            } else {
                return <div>Too many matches, specify another filter</div>
            }
        }
    }

    const showLanguages = (countrylanguages) => {
        return (
            <ul>
                {countrylanguages.map(language => <li>{language.name}</li>)}
            </ul>
        )
    }

    const showCountryDetails = (countryToShow) => {
        return (
            <div>
                <h1>{countryToShow.name}</h1>
                <div>Capital: {countryToShow.capital}</div>
                <div>Population: {countryToShow.population}</div>
                <h1>languages</h1>
                {showLanguages(countryToShow.languages)}
                <img src={countryToShow.flag} width="200" height="200"></img>
                <Weather capital={countryToShow.capital} />
            </div>
        )
    }



    return (<div>{showCountries()}</div>);

}
export default Country;