import React, { useState } from 'react';

import "./AddFilm.css"
import Button from './Button';
import ReqFilm from './ReqFilm'
import ReqImgFilm from './ReqImgFilm';
import Popup from './Popup';

const AddFilm = () => {

    const [ButtonPopup, setButtonPopup] = useState(false)
    const arr = []
    

    const handleGetNum = () => {
        const num = Math.floor(Math.random() * (arr.length - 0) + 0)
        return  num
    }

    const handleKeyDown = (e) => {
        if (e.key === 13 || e.key === 'Enter') {
            handleAddFilmList()
        }
    }

    const handleAddFilmList = () => {
        let value = document.querySelector('.add-film-input').value

        if (value.length !== 0 && arr.length < 10) {
            document.querySelector('.add-film-input').value = ''
            ReqImgFilm(value)
            arr.push(value)
        }
        
    }

    const handleDrawFilm = () => {

        if (arr.length >= 2 && arr.length !== 0) {
            let DrawFilm = arr[handleGetNum()]
            ReqFilm(DrawFilm)
            setButtonPopup(true)
            document.querySelector('.draw-list').innerHTML = ''
        }
        
    }

    return (
        <>
            <div className="input-container">
                <input type="text" className="add-film-input" placeholder="Adicione um filme..." onKeyDown={handleKeyDown} maxLength="40"/>
                <abbr title="Sortear filme..."><Button onClick={handleDrawFilm} className="button-draw" id="btn"><i class="fas fa-dice"></i></Button></abbr>
                <abbr title="Adicionar filme..."><Button onClick={handleAddFilmList}><i class="fas fa-arrow-right"></i></Button></abbr>
            </div> 
            <Popup trigger={ButtonPopup} setTrigger={setButtonPopup}>
                
            </Popup>
        </>
    );
}
 
export default AddFilm;