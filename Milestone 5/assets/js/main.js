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
        error: null,
        serieCast: []
    },
    methods: {
         cerca() {
             this.moviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=2ad14df71d61543a5c0cbb44fb587a2c&query=${this.ricerca}`
             axios.get(this.moviesUrl).then(resp =>{
                console.log(resp.data.results);
                this.movies = resp.data.results;
                const starTotal = 5;
                const starPercentage = resp.data.results
                for(let i in resp.data.results) {
                    let ratings = resp.data.results[i].vote_average;
                    let rating = ratings;
                    console.log(rating);  
                    const starPercentage = (rating / starTotal) * 100;
                    const starPercentageRounded = `${(Math.round(starPercentage / 10) * 10)/2}%`;
/*                     document.querySelector(".stars-inner").style.width = starPercentageRounded;
 */                    console.log(starPercentageRounded);
 console.log(document.getElementsByClassName("stars-inner"));
 console.log(document.querySelector(`.movie .stars-inner`));
 document.getElementsByClassName('stars-inner').style.width = starPercentageRounded;

                  }
            }).catch(e =>{
                console.error(e);
                this.error = 'Si è verificato un errore'
            });
            this.seriesUrl = `https://api.themoviedb.org/3/search/tv?api_key=2ad14df71d61543a5c0cbb44fb587a2c&query=${this.ricerca}`
            axios.get(this.seriesUrl).then(response =>{
                this.series = response.data.results;
                console.log(response.data.results);
                this.series.forEach(el => {
                    axios.get(`https://api.themoviedb.org/3/tv/${el.id}/credits?api_key=${this.api_key}`)
                    .then(resp =>{
                        console.log(el.id);
                         for (let index = 0; index < 5; index++) {
                            console.log(resp.data.cast[index].name);
                            let cast = [...cast]
                            cast =[... cast, resp.data.cast[index].name]
                            console.log(cast);
                            Vue.set(el, 'cast', resp.data.cast[index].name)
                            //el.cast += `${resp.data.cast[index].name} `
                        
                    }
                    })
                });
               
            }).catch(er =>{
                console.error(er);
                this.error = 'Si è verificato un errore'
               
            })
         }
    },
    mounted() {
       
    },
})