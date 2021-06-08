const app = new Vue({
    el: '#root',
    data: {
        url: '',
        movies: null,
        ricerca: '',
        query: '',
    },
    methods: {
         cerca() {
             this.url = `https://api.themoviedb.org/3/search/movie?api_key=2ad14df71d61543a5c0cbb44fb587a2c&query=${this.ricerca}`
             axios.get(this.url).then(resp =>{
                console.log(resp.data.results);
                this.movies = resp.data.results
            })
         }
    },
    mounted() {
       
    },
})