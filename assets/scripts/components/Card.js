class Card {
    constructor(movie, elementRoot) {
        this.elementRoot = elementRoot
        this.beginPath = 'https://image.tmdb.org/t/p/w500'
        this.image = movie.poster_path
        this.title = movie.original_title
        this.overview= movie.overview
        this.releaseDate = movie.release_date
    }

    createElementHtml() {
        return this.elementRoot.innerHTML +=  ` 
            <div>
                <h3>${this.title}</h3>
            </div>
            <div>
                <img src="${this.beginPath + this.image}" alt="image of movie">
                <div>
                    <p>${this.releaseDate}</p>
                    <p>${this.overview}</p>
                </div>
            </div> `
    }
}

let cardElement = document.getElementById('card')

const fetchTrendingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=46077ce24d4f82dbcaa2828a33a34916')
    return await data.json()
}

fetchTrendingMovies()
    .then(response => {
        console.log(response)
        response.results.forEach(el => {
            const newCard = new Card(el, cardElement)
            newCard.createElementHtml()
        })
    })