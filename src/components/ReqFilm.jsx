import axios from 'axios';

const API_REQ = 'https://api.themoviedb.org/3/search/movie?api_key=392f56ed610e68191dc6dd37d25782a6&language=pt-BR&query='

const IMG_REQ = 'https://image.tmdb.org/t/p/original'




const ReqFilm = (req) => {

    axios.get(API_REQ + req).then((response) => {

        let drawFilm = response.data.results

        let release = new Date(drawFilm[0].release_date)

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
                    <a href="" id="previous"><i class="fas fa-arrow-left"></i> Refazer</a>
                    <div id="draw-container">
                        <h1>${drawFilm[0].title}</h1>
                        <div id="draw-details"><span id="vote">${drawFilm[0].vote_average} ${rating}</span> <span id="date">${release.getFullYear()}</span></div>
                        
                        <img src='${IMG_REQ}${drawFilm[0].poster_path}' id="img-draw" alt="${drawFilm[0].title}">
                        <p>${drawFilm[0].overview}</p>
                    </div>
                    <div id="backdrop-gradient-v">
                    </div>
                    <img src='${IMG_REQ}${drawFilm[0].backdrop_path}' id="backdrop" alt="${drawFilm[0].title}">
            `
            document.querySelector('.container').innerHTML += drawDetails
            console.log(response)
        }
    }).catch((error) => {
        console.log(error)
    })
}
 
export default ReqFilm;