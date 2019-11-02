import React, { useState, useEffect } from 'react'
import Filter from './components/Filter.js'
import PersonForm from './components/PersonForm.js'
import Persons from './components/Persons.js'
import Notification from './components/Notification.js'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState({type: '',
                                         text: ''})

  useEffect(() => {
    personsService
      .getAll()
      .then(persons => {
        setPersons(persons)
      })
  }, [])


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message}/>
      <div><Filter filter={setFilter} /></div>
      <h2>Add a new</h2>
      <PersonForm setNewName={setNewName} newName={newName}
        setNewNumber={setNewNumber} newNumber={newNumber}
        setPersons={setPersons} persons={persons} setMessage={setMessage} />
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} filter={filter} setMessage={setMessage} />
    </div>
  )
}

export default App