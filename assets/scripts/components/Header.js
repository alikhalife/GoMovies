class Header {
    constructor(movie, root){
        this.root = root

        this.backdrop = movie.backdrop_path
        this.title = movie.original_title
        this.genreID = movie.genre_ids[0]
        this.genre = ''
        this.overview = movie.overview
        this.rate = movie.vote_average
    }

    appendHeaderInHtml = () => {
        return this.root.innerHtml += ``
    }
}