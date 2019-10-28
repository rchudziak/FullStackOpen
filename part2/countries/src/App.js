import React, { useState, useEffect } from 'react';
import axios from 'axios'


const App = () => {
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data);
      })
  }, [])


const searchCountry = (event) =>{

}



  return (
    <div >
      find countries <input onChange={searchCountry} />
      <div></div>
    </div>
  );
}

export default App;
