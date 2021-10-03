import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import { Btn } from './Btn'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { logIn } from '../features/Log'
import { AiOutlineEnter } from "react-icons/ai";


import React from 'react'

const Header = ({title, onAdd, showAdd}) => {
    const location = useLocation()
    const history = useHistory();
    const dispatch = useDispatch()

    const logout = () => {
        dispatch(logIn(false))
        localStorage.clear()
        // sessionStorage.removeItem('user')
        location.reload()
    }


    return (
        <div>
            <div onClick={logout} className="logout">
                <AiOutlineEnter
                        className="exit-btn"
                />
                Logout
            </div>
            <header className="header">
                <h1>{title}</h1>
                {location.pathname === '/tracker' && <Btn
                    color={showAdd ? 'red' : 'green'}
                    text={showAdd ? "Close" : "Add"}
                    onClick={onAdd}
                />}
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header

