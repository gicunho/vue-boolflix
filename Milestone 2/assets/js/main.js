const app = new Vue({
    el: '#root',
    data: {
        moviesUrl: '',
        seriesUrl: '',
        movies: null,
        series: null,
        ricerca: '',
    },
    methods: {
         cerca() {
             this.moviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=2ad14df71d61543a5c0cbb44fb587a2c&query=${this.ricerca}`
             axios.get(this.moviesUrl).then(resp =>{
                console.log(resp.data.results);
                this.movies = resp.data.results
            }),
            this.seriesUrl = `https://api.themoviedb.org/3/search/tv?api_key=2ad14df71d61543a5c0cbb44fb587a2c&query=${this.ricerca}`
            axios.get(this.seriesUrl).then(response =>{
                this.series = response.data.results
            })
         }
    },
    mounted() {
       
    },
})