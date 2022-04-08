let i = 0
const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
let arrObj = ['objVide']
let movie_id = 550
let j = 0
let arrIdTrailer = ['idVide']
let arrOfKeyTrailer = ['vide']

let a = 0

const arrayOfCard = []

let cardElementRoot = document.getElementById('card')
let trailer_infos = document.getElementById('div-trailer-infos')
let movie_infos = document.getElementById('movie-infos')



const fetchTrendingMovies = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/trending/all/week?${api_key}`)
    return await data.json()
}

const fetchTrendingMoviesGenres = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/genre/movie/list?${api_key}&language=US`)
    return await data.json()
}

let fetchMoviesTrailers = async () => {
    j++
    const data = await fetch(`https://api.themoviedb.org/3/movie/${arrIdTrailer[j]}/videos?${api_key}&language=en-US`)
    return await data.json()
}

fetchTrendingMovies()    
    .then(fetchTrendingMovieResponse => {
        console.log(fetchTrendingMovieResponse)
        fetchTrendingMovieResponse.results.forEach(el => {
            arrayOfCard.push(new Card_Modal(el, cardElementRoot))

        })
        return fetchTrendingMoviesGenres()
    })
    .then(genreResponse => {
        arrayOfCard.forEach(el => {
            movie_id = el.id
            arrIdTrailer.push(movie_id)
            
            genreResponse.genres.forEach(elem => {
                if(el.genreID === elem.id){
                    el.genre = elem.name
                }
            })
            
            fetchMoviesTrailers()
                .then(trailer => {
                    a++
                    // console.log('fetchMoviesTrailers')
                    // console.log(trailer.results[0].key)
                    // el.trailerKey = trailer.results[0].key
                    arrOfKeyTrailer.push(trailer.results[1].key)
                    console.log('a  ' + a)
                    console.log(trailer.results[1].key)
                    // console.log(el.trailerKey)
                })

            el.appendCardInHtml()
            el.createObj()
        })
        console.log(arrayOfCard)
        console.log(el.createObj())
    })
    .catch(error => error)


window.addEventListener('click', (event) => {
    if(event.target.matches('img.affiche') || event.target.matches('h2.card-title') || event.target.matches('h4.card-directed') || event.target.matches('p.card-stars') || event.target.matches('span.card-rate') || event.target.matches('span.genres')){
        console.log('bon div')
        console.log(window.innerWidth)
        console.log(arrOfKeyTrailer)

        if(window.innerWidth > 600){
            div_modal.style.display = 'flex'

            arr.forEach(el => {
                if(el === event.target.getAttribute('id')){
                    console.log(el)
                    console.log(arrObj[el].title)
                    console.log(arrObj[el])
                    console.log(arrOfKeyTrailer[el])
    
                    trailer_infos.innerHTML = `
                    
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/${arrOfKeyTrailer[el]}" title="${arrObj[el].title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        
                        <div class="movie-details">
                            <p>${arrObj[el].statusMovie}</p>
                            <p>${arrObj[el].date}</p>
                            <p>${arrObj[el].directedBy}</p>
                            <p>${arrObj[el].cast}</p>
                        </div>`
    
                    movie_infos.innerHTML = `
                        <h4 class="movie-name"><strong>${arrObj[el].title}</strong></h4>
                        <p class="synopsis">${arrObj[el].synopsis}</p>`
                }
            })
        }        
    } 
})