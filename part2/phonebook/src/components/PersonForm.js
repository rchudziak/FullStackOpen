import React from 'react'
import personsService from '../services/persons'

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

        personsService
            .create(personObject)
            .then(person =>{
                setPersons(persons.concat(person))
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