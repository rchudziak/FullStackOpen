import React from 'react'

const Persons = ({persons, filter}) => {
    const showNumbers = () => {
        const peopleToShow = persons.filter(person => person.name.toUpperCase().includes(filter.toUpperCase()))
        return peopleToShow.map((person) => <div key={person.id}>{person.name} {person.number}</div>)
    }

    return (
        <div>{showNumbers()}</div>
    )
}

export default Persons