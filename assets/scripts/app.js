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
const moviesData = []

for (let index = 550; index <= 650; index++) {
    const fetchData = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${index}?api_key=46077ce24d4f82dbcaa2828a33a34916`)
        return await data.json()
    }


    const beginPath = 'https://image.tmdb.org/t/p/w500/'
    let imagePath = ''

    fetchData()
        .then(response => {
            imagePath = beginPath + response.poster_path
            elementImg.src = imagePath

            const movie = {
                title: response.original_title,
                release: response.release_date,
                synopsis: response.overview,
                poster: beginPath + response.poster_path,
                genre: [
                    response.genres[0].name,
                    response.genres[1].name
                ],
            }
            moviesData.push(movie)
        })
        .then(() => console.log(moviesData[0].title))
        .catch(err => err)

    const elementImg = document.createElement('img')
          elementImg.width = 150
          elementImg.height = 150


    document.getElementById('root').appendChild(elementImg)
}

console.log(moviesData)

moviesData.forEach(el => console.log(el))