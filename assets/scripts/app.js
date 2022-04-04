// const movie_id = 6038
//
// const fetchData = async () => {
//     const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=46077ce24d4f82dbcaa2828a33a34916`)
//     return await data.json()
// }
//
// const imgPath = 'https://image.tmdb.org/t/p/w500/'
// let imgFullPath = ''
//
// fetchData()
// .then(r => {
//     imgFullPath = imgPath + r["poster_path"]
//     img.src = imgFullPath
// })
//
// const img = document.createElement('img')
//       img.width = 150
//       img.height = 150
// document.getElementById('root').appendChild(img)


// const moviesData = []
//
// for (let index = 550; index <= 650; index++) {
//     const fetchData = async () => {
//         const data = await fetch(`https://api.themoviedb.org/3/movie/${index}?api_key=46077ce24d4f82dbcaa2828a33a34916`)
//         return await data.json()
//     }
//
//
//     const beginPath = 'https://image.tmdb.org/t/p/w500/'
//     let imagePath = ''
//
//     fetchData()
//         .then(response => {
//             imagePath = beginPath + response.poster_path
//             elementImg.src = imagePath
//
//             const movie = {
//                 title: response.original_title,
//                 release: response.release_date,
//                 synopsis: response.overview,
//                 poster: beginPath + response.poster_path,
//                 genre: [
//                     response.genres[0].name,
//                     response.genres[1].name
//                 ],
//             }
//             moviesData.push(movie)
//         })
//         .then(() => console.log(moviesData[0].title))
//         .catch(err => err)
//
//     const elementImg = document.createElement('img')
//           elementImg.width = 150
//           elementImg.height = 150
//
//
//     document.getElementById('root').appendChild(elementImg)
// }
//
// console.log(moviesData)
//
// movies
// Data.forEach(el => console.log(el))

const saveData =  (array) => {
    title.push(array.original_title)
    releaseDate.push(array.release_date)
    overview.push(array.overview)
    poster.push(beginPath + array.poster_path)
}

const title = []
const releaseDate = []
const overview = []
const poster = []
const beginPath = 'https://image.tmdb.org/t/p/w500'

for (let index = 550; index <= 700; index++) {
    const getData = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${index}?api_key=46077ce24d4f82dbcaa2828a33a34916`)
        return await data.json()
    }

    const root = document.getElementById('root')
    const cardTitle = document.createElement('h3')
    const cardReleaseDate = document.createElement('p')
    const cardOverview = document.createElement('p')
    const cardImg = document.createElement('img')
          cardImg.width = 200
          cardImg.height = 200

    getData()
        .then(res => {
            console.log(res)
            saveData(res)
            cardTitle.innerText = res.original_title
            cardReleaseDate.innerText = res.release_date
            cardOverview.innerText = res.overview
            cardImg.src = beginPath + res.poster_path
        })
        .catch(error => error)

    root.appendChild(cardTitle)
    root.appendChild(cardReleaseDate)
    root.appendChild(cardOverview)
    root.appendChild(cardImg)
}

console.log(title)
console.log(releaseDate)
console.log(overview)
console.log(poster)
console.log(title)