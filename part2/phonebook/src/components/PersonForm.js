import React from 'react'

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

        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')

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