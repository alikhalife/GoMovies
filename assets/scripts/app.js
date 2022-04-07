let i = 0
const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
let arrObj = ['objVide']

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

fetchTrendingMovies()
    // .then(response => {
    //     console.log(response)
    //     response.results.forEach(el => {
    //         const card = new Card(el, cardElementRoot)
    //         card.appendCardInHtml()
    //         card.createObj()
    //     })
    // })
    // .catch(error => error)
    
    .then(fetchTrendingMovieResponse => {
        console.log(fetchTrendingMovieResponse)
        fetchTrendingMovieResponse.results.forEach(el => {
            arrayOfCard.push(new Card_Modal(el, cardElementRoot))
        })
        return fetchTrendingMoviesGenres()
    })
    .then(genreResponse => {
        arrayOfCard.forEach(el => {
            genreResponse.genres.forEach(elem => {
                if(el.genreID === elem.id){
                    el.genre = elem.name
                }
            })
            el.appendCardInHtml()
            el.createObj()
        })
        console.log(arrayOfCard)
    })
    .catch(error => error)


window.addEventListener('click', (event) => {
    if(event.target.matches('img.affiche')){
        console.log('bon div')
        div_modal.style.display = 'flex'

        arr.forEach(el => {
            if(el === event.target.getAttribute('id')){
                console.log(el)
                console.log(arrObj[el].title)

                trailer_infos.innerHTML = `
                    <iframe width="659.4" height="371" src="${arrObj[el].trailer}" title="${arrObj[el].title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

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
})