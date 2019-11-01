import React from 'react'
import axios from 'axios'

const PersonForm = ({ setNewName, newName, setNewNumber, newNumber, setPersons, persons }) => {

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()

        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already added to phonebook`)
            return;
        }

        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        axios
            .post('http://localhost:3001/persons', personObject)
            .then(response =>{
                setPersons(persons.concat(response.data))
                setNewName('')
                setNewNumber('')
            })

      

    }

    return (
        <form onSubmit={addPerson}>
            <div>
                Name: <input value={newName} onChange={handleNameChange} />
            </div>
            <div>
                Number: <input value={newNumber} onChange={handleNumberChange} />
            </div>
            <div>
                <button type="submit" >add</button>
            </div>
        </form>
    )

}

export default PersonForm