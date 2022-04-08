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
        this.trailerKey = 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmiro.medium.com%2Fmax%2F800%2F1*hFwwQAW45673VGKrMPE2qQ.png&imgrefurl=https%3A%2F%2Fuxdesign.cc%2Fhow-to-design-a-404-error-page-that-keeps-users-on-your-site-f3443a980ece&tbnid=LaedmNfkaCQO_M&vet=12ahUKEwj97cDxyYT3AhVC2aQKHe9KDiMQMygJegUIARDUAQ..i&docid=96NoSMawAqxa9M&w=800&h=600&q=image%20404&ved=2ahUKEwj97cDxyYT3AhVC2aQKHe9KDiMQMygJegUIARDUAQ'
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