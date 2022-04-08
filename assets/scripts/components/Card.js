class Card_Modal {
    constructor(movie, root) {
        // element to append on html
        this.root = root

        // base url
        this.baseUrl = `https://image.tmdb.org/t/p/w500`

        // data from api
        this.id = movie.id

        // image
        this.poster = movie.poster_path

        // title
        this.originalTitle = movie.original_title
        this.originalName = movie.original_name
        this.title = movie.title

        // genre
        this.genreID = movie.genre_ids
        this.genre = 'no genre'

        this.overview= movie.overview
        this.releaseDate = movie.release_date
        this.rate = movie.vote_average
    }

    appendCardInHtml() {
        i++
        return this.root.innerHTML +=  ` 
        <div class="card">
            <div>
                <div class="poster">
                <img id="${i}" class="affiche" src="${this.baseUrl + this.poster}" alt="poster movie"></img>
            </div>

            <div class="details">
                <h2>${this.getTitle()}</h2>
                <h4>Directed by</h4>

                <div class="rating">
                    <p>STARS</p>
                    <span>${this.rate}</span>
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

    getTitle() {
        if (this.title !== undefined) {
            return this.title
        } else if (this.originalTitle !== undefined) {
            return this.originalTitle
        } else if (this.originalName !== undefined) {
            return this.originalName
        }
    }

    createObj() {
        const obj = {
            id: i,
            trailer: 'url',
            movieStatus: 'Release',
            date: this.releaseDate,
            directedBy: 'Mme',
            cast: '1, 2, 3',
            title: this.title,
            synopsis: this.overview
        }

        arrObj.push(obj)
    }
}