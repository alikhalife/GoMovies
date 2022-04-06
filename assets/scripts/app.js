async function main() {
    let bannerMovies = await getBannerMovies()
    console.log(bannerMovies)
}

main()

async function getBannerMovies() {
    let bannerMovies = []
    for (let i = 550; i <= 552; i++) {
        let resp = await fetch(`https://api.themoviedb.org/3/movie/${i}?api_key=46077ce24d4f82dbcaa2828a33a34916`)

        let movie = await resp.json()
        bannerMovies.push(movie)
    }
    return bannerMovies;
}

