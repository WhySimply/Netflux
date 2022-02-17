const LinkGenericAPIMovies = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_KEY_ITMBD}&language=fr&include_adult=false&include_video=true&page=1`
export const LinkAPIListGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_KEY_ITMBD}&language=fr`
export const LinkAPIListMoviesByGenres = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.VUE_APP_KEY_ITMBD}&language=fr`

export const LinkAPIMovies = {
    SortByPopularity: `${LinkGenericAPIMovies}&sort_by=popularity.desc`,
    SortByRevenue: `${LinkGenericAPIMovies}&sort_by=revenue.desc`,
    CurrentWatching: `${LinkGenericAPIMovies}&sort_by=vote_average.desc&vote_count.gte=1000`
}
