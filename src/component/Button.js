import React from 'react'

const Button = ({ name }) => {
    return (
        <div>

            <input type='button' value={name} className=' m-1 border border-gray-900 px-2 py-1 rounded-full bg-gray-200 ' />


        </div>
    )
}

export default Button