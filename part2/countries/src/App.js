import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Country from './components/Country'


const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
      })
  }, [])

 

  return (
    <div >
      find countries <input onChange={(event) => setFilter(event.target.value)} />
      <Country countriesList={countries}  countryFilter={filter} setFilterFn={setFilter}/>
    </div>
  );
}

export default App;
