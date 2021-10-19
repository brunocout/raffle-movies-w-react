import React from 'react';
import axios from 'axios';

const API_REQ = 'https://api.themoviedb.org/3/search/movie?api_key=392f56ed610e68191dc6dd37d25782a6&language=pt-BR&query='

const IMG_REQ = 'https://image.tmdb.org/t/p/w200'

const ReqImgFilm = (req) => {

    axios.get(API_REQ + req).then((response) => {
        let Filmlist = response.data.results
        if (Filmlist[0] !== undefined) {
            let posterImg = ''
            posterImg += `
                <abbr title="${Filmlist[0].title}"><img src='${IMG_REQ}${Filmlist[0].poster_path}' alt="${Filmlist[0].title}" id="img"></abbr>
            `
            document.querySelector('.draw-list').innerHTML += posterImg
        }
    })
}
 
export default ReqImgFilm;