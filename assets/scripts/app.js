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

for (let index = 550; index <= 6038; index++) {
    const getData = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${index}?api_key=46077ce24d4f82dbcaa2828a33a34916`)
        return await data.json()
    }

    const root = document.getElementById('root')
          root.style.display = 'flex'
          root.style.flexWrap = 'wrap'

    const container = document.createElement('div')
          container.style.width = '200px'
          container.style.height = '950px'
          container.style.gap = '25px'
          container.style.border = '1px solid black'

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
            if (res.success !== false ) {

                if (res.original_title !== undefined && res.overview !== undefined
                && res.poster_path !== undefined && res.release_date !== undefined) {

                    cardTitle.innerText = res.original_title
                    cardReleaseDate.innerText = res.release_date
                    cardOverview.innerText = res.overview
                    cardImg.src = beginPath + res.poster_path

                    container.appendChild(cardImg)
                    container.appendChild(cardTitle)
                    container.appendChild(cardReleaseDate)
                    container.appendChild(cardOverview)
                    root.appendChild(container)
                }
            }
        })
        .catch(error => error)
}

console.log(title)
console.log(releaseDate)
console.log(overview)
console.log(poster)
console.log(title)