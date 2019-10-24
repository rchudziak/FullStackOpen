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


const Statistics = ({ text, value }) =>
    (<tr>
        <td>{text}</td>
        <td>{value}</td>
    </tr> );

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allClicks, setAll] = useState([])

    const feedback = {
        good: "good",
        neutral: "neutral",
        bad: "bad",
        all: "all",
        average: "average",
        positive: "positive",
        none: "no feedback given"
    }

    const handleGoodClick = () => {
        setGood(good + 1);
        setAll(allClicks.concat('G'))
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1);
        setAll(allClicks.concat('N'))
    }

    const handleBadClick = () => {
        setBad(bad + 1);
        setAll(allClicks.concat('B'))
    }

    const calculateAverage = () => {
        return (good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad);
    }

    const calculatePositive = () => {
     const calc =   ( good / (good + neutral + bad) ) * 100;
     return `${calc} %`;
    } ;
    
    if (allClicks.length > 0) {
        return (
            <div>
                <Header text="give feedback" />
                <Button text={feedback.good} click={handleGoodClick} />
                <Button text={feedback.neutral} click={handleNeutralClick} />
                <Button text={feedback.bad} click={handleBadClick} />
                <Header text="statistics" />
                <table>
                    <Statistics text={feedback.good} value={good} />
                    <Statistics text={feedback.neutral} value={neutral} />
                    <Statistics text={feedback.bad} value={bad} />
                    <Statistics text={feedback.all} value={allClicks.length} />
                    <Statistics text={feedback.average} value={calculateAverage()} />
                    <Statistics text={feedback.positive} value={calculatePositive()} />
                </table>
            </div>
        )

    } else {
        return (
            <div>
                <Header text="give feedback" />
                <Button text={feedback.good} click={handleGoodClick} />
                <Button text={feedback.neutral} click={handleNeutralClick} />
                <Button text={feedback.bad} click={handleBadClick} />
                <Header text="statistics" />
                <Statistics text={feedback.none} />
            </div>)
    }
}

ReactDOM.render(<App />,
    document.getElementById('root')
)