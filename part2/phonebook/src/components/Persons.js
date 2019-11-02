import React from 'react'
import personsService from '../services/persons'

const Persons = ({ persons, setPersons, filter, setMessage }) => {

    const deletePerson = (person) => {
        if (window.confirm(`Do you really want to delete ${person.name}`)) {
            personsService
                .deletePerson(person.id)
                .then(() => {
                    setPersons(persons.filter(p => p.id !== person.id))
                })
                .catch(error => {
                    setMessage(
                        {
                            type: 'E',
                            text: `Person ${person.name} has been already deleted from the server`
                        })
                        
                    setPersons(persons.filter(p => p.id !== person.id))
                })
        }
    }

    const showNumbers = () => {
        const peopleToShow = persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))
        return peopleToShow.map((person) => <div key={person.id}>{person.name} {person.number}
            <button onClick={() => deletePerson(person)}>Delete</button>
        </div>)
    }

    return (
        <div>{showNumbers()}</div>
    )
}

export default Persons