import React from 'react'

export const Button = props => (
    <button
        {...props}
        className={'button ' + (props.className || '')}
        style={style}
    />
)

const style = {
    background: 'none',
    backgroundColor: '#40b3ff',
    borderRadius: '5px',
    padding: '10px 5px',
    border: 'none',
    color: 'white',
}
