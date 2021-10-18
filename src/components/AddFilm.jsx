import React, { useRef } from 'react';

import "./AddFilm.css"
import Button from './Button';
import ReqFilm from './ReqFilm'
import ReqImgFilm from './ReqImgFilm';

const AddFilm = () => {

    const inputRef = useRef(null)
    const arr = []

    const handleKeyDown = (e) => {
        if (e.key === 13 || e.key === 'Enter') {
            handleAddFilmList()
        }
    }

    const handleAddFilmList = () => {
        let value = inputRef.current.value
        if (value.length !== 0 && arr.length < 10) {
            inputRef.current.value = ''
            ReqImgFilm(value)
            arr.push(value)
            console.log(arr.length)
        }
        
    }

    const handleDrawFilm = () => {
        const num = Math.floor(Math.random() * (arr.length))

        if (arr.length >= 2 && arr.length !== 0) {
            let DrawFilm = arr[num]
            ReqFilm(DrawFilm)
            document.querySelector('.container').innerHTML = '' 
        }
        
    }

    return (
        <>
            <div className="input-container">
                <input type="text" className="add-film-input" placeholder="Adicione um filme..." onKeyDown={handleKeyDown} maxLength="40" autoFocus ref={inputRef}/>
                <abbr title="Sortear filme..."><Button onClick={handleDrawFilm} className="button-draw" id="btn"><i class="fas fa-dice"></i></Button></abbr>
                <abbr title="Adicionar filme..."><Button onClick={handleAddFilmList}><i class="fas fa-arrow-right"></i></Button></abbr>
            </div> 
        </>
    );
}
 
export default AddFilm;