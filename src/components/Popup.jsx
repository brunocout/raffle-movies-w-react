import React from 'react';

import './Popup.css'

const Popup = (props) => {
    return ( props.trigger ) ? (
        <div className="popup-container">
            <div className="popup">
                <a href="/"><button className="close-popup" onClick={() => props.setTrigger(false)}><i class="fas fa-times"></i></button></a>
                { props.children }
            </div>
        </div>
     ) : ""
}
 
export default Popup;