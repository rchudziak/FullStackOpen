import React from 'react'

const Header = (props) => {
    return (<div>
        <h2>{props.course}</h2>
    </div>)
}

const Part = (props) => {
    return (<div>
        <p>
            {props.part} {props.exercises}
        </p>
    </div>)
}

const Content = ({ parts }) => {

    const showParts = () => {
        return parts.map(part => <Part key={part.id} part={part.name} exercises={part.exercises} />);
    }

    return (<div>
        {showParts()}
    </div>)
}

const Total = ({ parts }) => {

    const sum = parts.reduce((acc, obj) => {
        return acc + obj.exercises
    }, 0);

    return (
        <div>
            <p><b>total of {sum} exercises</b></p>
        </div>)
}


const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

export default Course