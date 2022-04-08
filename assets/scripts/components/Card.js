class Card_Modal {
    constructor(movie, root) {
        this.root = root
        this.id = movie.id
        this.poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        this.title = movie.original_title
        this.genreID = movie.genre_ids[0]
        this.genre = ''
        this.overview= movie.overview
        this.releaseDate = movie.release_date
        this.rate = movie.vote_average
        this.trailerKey = ''
    }

    appendCardInHtml() {
        i++

        return this.root.innerHTML +=  ` 
        <div class="card">
            <div>
                <div class="poster">
                <img id="${i}" class="affiche" src="${this.poster}" alt="poster movie"></img>
            </div>

            <div class="details">
                <h2 class="card-title">${this.title}</h2>
                <h4 class="card-directed">Directed by</h4>

                <div class="rating">
                    <p class="card-stars">STARS</p>
                    <span class="card-rate">${this.rate}</span>
                </div>

                <div class="tags">
                    <span class="genres">${this.genre}</span>
                </div>

                <div class="info">
                    <p>${this.overview}</p>
                </div>

                <div class="casting">
                    <h4>Cast</h4>

                    <ul>
                        <li>Name1</li>
                        <li>Name2</li>
                        <li>Name3</li>
                    </ul>
                </div>
            </div>
        </div>`
    }

    createObj(){
        const obj = {
            id: i,
            trailer: this.trailerKey,
            movieStatus: 'Release',
            date: this.releaseDate,
            directedBy: 'Mme',
            cast: '1, 2, 3',
            title: this.title,
            synopsis: this.overview
        }

        arrObj.push(obj)
        
        return arrObj
    }
}