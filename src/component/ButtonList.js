import React from 'react'
import Button from './Button'


const ButtonList = () => {

    const list = ['Funny', 'Cricket', 'WWE', 'Music', 'Movies', 'News', 'Gaming', 'Science', 'Technology', 'Travel', 'Fitness', 'Fashion', 'Comedy', 'Beauty', 'Photography', 'Spirituality']

    return (

        <div className='flex'>
            {
                list.map((item, index) => {
                    return <Button key={index} name={item} />
                })

            }


        </div>
    )
}

export default ButtonList