import React from 'react'
import Notes from './Notes'
export const Home = (props) => {

    return (
        <div>
            <div className='container'>
            <Notes role={props ? props.role:undefined}/>
            </div>
        </div>
    )
}