import React from 'react'


const Header = (props) => {
    return (
        <div> 
            <h1>My Task List</h1>
            <h6>{props.subheader}</h6>
        </div>
    )
}

export default Header