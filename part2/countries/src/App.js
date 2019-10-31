import React, { useState, useEffect } from 'react';
import axios from 'axios'


const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data);
      })
  }, [])

  const showLanguages = (countrylanguages) => {
    return (
      <ul>
        {countrylanguages.map(language => <li>{language.name}</li>)}
      </ul>
    )
  }


  const showCountryDetails = (countryToShow) => {
    console.log(countryToShow)
    return (<div>
      <h1>{countryToShow.name}</h1>
      <div>Capital: {countryToShow.capital}</div>
      <div>Population: {countryToShow.population}</div>
      <h1>languages</h1>
      {showLanguages(countryToShow.languages)}
      <img src={countryToShow.flag} width="200" height="200"></img>
    </div>
    )
  }

  const showCountries = () => {

    if (filter.length > 0) {
      const countriesToShow = countries.filter(country => country.name.includes(filter))

      if (countriesToShow.length === 1) {
        return showCountryDetails(countriesToShow[0])
      }

      if (countriesToShow.length <= 10) {
        return countriesToShow.map(country =>
          <div key={country.alpha2Code}>{country.name}
            <button onClick={() => setFilter(country.name)}>show</button>
          </div>)
      } else {
        return <div>Too many matches, specify another filter</div>
      }
    }
  }


  return (
    <div >
      find countries <input onChange={(event) => setFilter(event.target.value)} />
      <div>{showCountries()}</div>
    </div>
  );
}

export default App;
