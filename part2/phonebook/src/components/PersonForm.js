import React from 'react'
import personsService from '../services/persons'

const PersonForm = ({ setNewName, newName, setNewNumber, newNumber, setPersons, persons }) => {

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const updatePerson = () => {
        const person = persons.find(p => p.name === newName)
        const id = person.id
        const changedPerson = { ...person, number: newNumber }
        personsService
            .update(id, changedPerson)
            .then(returnedPerson => {
                setPersons(persons.map(person => person.id !== id ? person : returnedPerson))
                setNewName('')
                setNewNumber('')
            })
    }

    const addNewPerson = () => {
        const personObject = {
            name: newName,
            number: newNumber,
            id: persons.length + 1
        }

        personsService
            .create(personObject)
            .then(person => {
                setPersons(persons.concat(person))
                setNewName('')
                setNewNumber('')
            })
    }

    const addPerson = (event) => {
        event.preventDefault()

        if (persons.some(person => person.name === newName)) {
            if (window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)) {
                updatePerson()
            }
            return;
        }

        addNewPerson();
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