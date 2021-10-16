import React from 'react';
import axios from 'axios';

const API_REQ = 'https://api.themoviedb.org/3/search/movie?api_key=392f56ed610e68191dc6dd37d25782a6&language=pt-BR&query='

const IMG_REQ = 'https://image.tmdb.org/t/p/w200'



const ReqFilm = (req) => {

    axios.get(API_REQ + req).then((response) => {

        let drawFilm = response.data.results

        if (drawFilm[0].vote_average >= 8) {
           var rating = '&#129321;'
        } else if (drawFilm[0].vote_average >= 5) {
            rating = '&#128577;' 
        }  else {
            rating = '&#129326;'
        }
        if (drawFilm[0] !== undefined) {
            let drawDetails = ''
            drawDetails += `
                <div className="draw-container">
                    <h1>${drawFilm[0].title} <span>${drawFilm[0].release_date}</span></h1>
                    <img src='${IMG_REQ}${drawFilm[0].poster_path}' id="img-draw" alt="${drawFilm[0].title}">
                    <p>${drawFilm[0].overview}</p>
                    <span id="vote">${drawFilm[0].vote_average} ${rating}</span>
                </div>
            `
            document.querySelector('.popup').innerHTML += drawDetails
            console.log(response)
        }
    })
}
 
export default ReqFilm;