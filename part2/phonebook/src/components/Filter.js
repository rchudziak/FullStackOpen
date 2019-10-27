import React from 'react'

const Filter = ({filter}) => {

    return (
        <div>filter shown with:
        <input onChange={(event) => filter(event.target.value)} />
        </div>
    )
}

export default Filter