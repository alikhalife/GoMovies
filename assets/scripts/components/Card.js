let i = 0
let arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20']
let arrObj = ['objVide']

class Card {
    constructor(movie, elementRoot) {
        this.elementRoot = elementRoot
        this.sourceUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        this.title = movie.original_title
        this.overview= movie.overview
        this.releaseDate = movie.release_date
    }

    appendCardInHtml() {
        i++
        return this.elementRoot.innerHTML +=  ` 
            <div>
                <h3>${this.title}</h3>
            </div>
            <div>
                <img id="${i}" class="affiche" src="${this.sourceUrl}" alt="image of movie">
                <div>
                    <p>${this.releaseDate}</p>
                    <p>${this.overview}</p>
                </div>
            </div> `
    }

    createObj(){
        let obj = {
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

let cardElementRoot = document.getElementById('card')
let trailer_infos = document.getElementById('div-trailer-infos')
let movie_infos = document.getElementById('movie-infos')

const fetchTrendingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=46077ce24d4f82dbcaa2828a33a34916')
    return await data.json()
}

fetchTrendingMovies()
    .then(response => {
        console.log(response)
        response.results.forEach(el => {
            const card = new Card(el, cardElementRoot)
            card.appendCardInHtml()
            card.createObj()
            // const info1 = new ModalVideo(el, trailer_infos)
            // info1.appendModalVideoInfosinHtml()
            // const info2 = new ModalVideo(el, movie_infos)
            // info2.appendModalNameSynopsisinHtml()
        })
    })
    .catch(error => error)


window.addEventListener('click', (event) => {
    // console.log(arrObj)

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