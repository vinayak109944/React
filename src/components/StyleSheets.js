import React from 'react'
import './mystyles.css'

function StyleSheets(props) {
    let className = props.primary ? 'primary' : ''
    return(
        <div>
            <h1 className={`${className} font`}>StyleSheets</h1>
        </div>
    )
    
}
export default StyleSheets