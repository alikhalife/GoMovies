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
    }

    appendCardInHtml() {
        i++
        return this.root.innerHTML +=  ` 
            <div>
                <h3>${this.title}</h3>
            </div>
            <div>
                <p>${this.genre}</p>
            </div>
            <div>
                <img id="${i}" class="affiche" src="${this.poster}" alt="image of movie">
                <div>
                    <p>${this.releaseDate}</p>
                    <p>${this.overview}</p>
                </div>
            </div> `
    }

    createObj(){
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

// class ModalVideo{
//     constructor(movie, vidHTML){
//         this.vidHTML = vidHTML
//         this.videoUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
//         this.name = movie.original_title
//         this.status = 'Release'
//         this.date = movie.release_date
//         this.directedBy = 'Mme'
//         this.distribution = '1, 2, 3'
//         this.synopsis = movie.overview
//     }

//     appendModalVideoInfosinHtml(){
//         return this.vidHTML.innerHTML += `        
//             <video id="trailer-vid" class="trailer-video" controls>
//                 <source src="${this.videoUrl}" type="video/mp4">
//                 Your browser does not support HTML video.
//             </video>
  
//             <div class="movie-details">
//                 <p>${this.status}</p>
//                 <p>${this.date}</p>
//                 <p>${this.directedBy}</p>
//                 <p>${this.distribution}</p>
//             </div>`
//     }

//     appendModalNameSynopsisinHtml(){
//         return this.vidHTML.innerHTML += `
//         <h4 class="movie-name"><strong>${this.name}</strong></h4>
  
//         <p class="synopsis">${this.synopsis}</p>`
//     }
// }