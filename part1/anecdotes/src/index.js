import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = ({ text }) =>
    (
        <div>
            <h1>{text}</h1>
        </div>
    )

const Button = ({ click, text }) =>
    (
        <button onClick={click}>{text}</button>
    )

const App = (props) => {
    const anecdotesAmount = props.anecdotes.length;
    const [selected, setSelected] = useState(0)
    const [all, setAll] = useState(new Array(anecdotesAmount).fill(0))
    const [mostVoted, setMostVoted] = useState(0)

    const generateAnecdote = () => {
        const index = Math.floor(Math.random() * anecdotesAmount);
        setSelected(index);
    }

    const vote = () => {
        const allCopy = [...all]; //Copies an array
        allCopy[selected] = allCopy[selected] += 1;
        setAll(allCopy);

        const indexOfMaxValue = allCopy.indexOf(Math.max(...allCopy));
        setMostVoted(indexOfMaxValue);
    }

    return (
        <div>
            <Header text="Anecdote of the day" />
            {props.anecdotes[selected]} has {all[selected]} votes
            <div>
                <Button text="next anecdote" click={generateAnecdote} />
                <Button text="vote" click={vote} />
            </div>
            <Header text="Anecdote with most votes" />
            {props.anecdotes[mostVoted]} has {all[mostVoted]} votes
        </div>
    )
}


const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
    <App anecdotes={anecdotes} />,
    document.getElementById('root')
)