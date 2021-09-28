import PropTypes from 'prop-types'
import { Btn } from './Btn'


import React from 'react'

const Header = ({title}) => {

    const onClick = () => {
        console.log('click')
    }

    return (
        
        <header className="header">
            <h1>{title}</h1>
            <Btn color='green' text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header

