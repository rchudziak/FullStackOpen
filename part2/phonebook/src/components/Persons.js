import React from 'react'
import personsService from '../services/persons'

const Persons = ({persons, setPersons, filter}) => {

    const deletePerson = (person) =>{
        if(window.confirm(`Do you really want to delete ${person.name}`)){
            personsService
                .deletePerson(person.id)
                .then( () =>{
                    const newPersons = persons.filter(p => p.id !== person.id);
                    setPersons(newPersons)
                })
        }
    }


    const showNumbers = () => {
        const peopleToShow = persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))
        return peopleToShow.map((person) => <div key={person.id}>{person.name} {person.number}<button onClick={() => deletePerson(person)}>Delete</button></div>)
    }

    return (
        <div>{showNumbers()}</div>
    )
}

export default Persons