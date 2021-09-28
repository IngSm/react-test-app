import React from 'react'
import PropTypes from 'prop-types'

export const Btn = ({color, text, onClick}) => {
    return (
        <div>
            <button
              onClick={onClick}
              style={{backgroundColor: color}}
              className="btn"
            >
                {text}
            </button>
        </div>
    )
}

Btn.defaultProps = {
    color: 'steelBlue'
}

Btn.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}
