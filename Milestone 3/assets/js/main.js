const app = new Vue({
    el: '#root',
    data: {
        moviesUrl: '',
        seriesUrl: '',
        api_key: '2ad14df71d61543a5c0cbb44fb587a2c',
        movies: null,
        series: null,
        ricerca: '',
        posterUrl: 'http://image.tmdb.org/t/p/w342/',
        error: null
    },
    methods: {
         cerca() {
             this.moviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=2ad14df71d61543a5c0cbb44fb587a2c&query=${this.ricerca}`
             axios.get(this.moviesUrl).then(resp =>{
                //console.log(resp.data.results);
                this.movies = resp.data.results
            }).catch(e =>{
                console.error(e);
                this.error = 'Si è verificato un errore'
            }),
            this.seriesUrl = `https://api.themoviedb.org/3/search/tv?api_key=2ad14df71d61543a5c0cbb44fb587a2c&query=${this.ricerca}`
            axios.get(this.seriesUrl).then(response =>{
                this.series = response.data.results
            }).catch(er =>{
                console.error(er);
                this.error = 'Si è verificato un errore'
            })
         }
    },
    mounted() {
       
    },
})