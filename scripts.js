function getPopularMovies() {
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=8d3dfed711a9dddd0c1e92b5cb682db2&language=en-US&page=1"

    let popularMovies = document.getElementById("popular");
    let imageUrl = "https://image.tmdb.org/t/p/w500/";

    const data = null;

    const xhr = new XMLHttpRequest();
    
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {

        let json = JSON.parse(this.responseText);
        console.log(json);

        let html = "";
        for (let i = 0; i < 4; i++) {
            html += `
                <figure>
                    <img src="${imageUrl}${json.results[i].poster_path}" alt="">
                    <figcaption>${json.results[i].title}</figcaption>
                </figure>            
            `
        }

        popularMovies.innerHTML = html;
      }
    });
    
    xhr.open('GET', url);
    xhr.setRequestHeader('accept', 'application/json');
    
    xhr.send(data);
}

function getBirthYearMovies(e) {
    e.preventDefault();
    let year = encodeURI(document.getElementById("userYear"));


    let url = `https://api.themoviedb.org/3/discover/movie?api_key=8d3dfed711a9dddd0c1e92b5cb682db2&primary_release_year=${year}&sort_by=revenue.desc&language=en-US&page=1&include_adult=false`;

    let birthMovies = document.getElementById("birthYear");
    let imageUrl = "https://image.tmdb.org/t/p/w500/";



    const data = null;

    const xhr = new XMLHttpRequest();
    
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {

        let json = JSON.parse(this.responseText);
        console.log(json);

        let html = "";
        for (let i = 0; i < 4; i++) {
            html += `
                <figure>
                    <img src="${imageUrl}${json.results[i].poster_path}" alt="">
                    <figcaption>${json.results[i].title}</figcaption>
                </figure>            
            `
        }

        birthMovies.innerHTML = html;
      }
    });
    
    xhr.open('GET', url);
    xhr.setRequestHeader('accept', 'application/json');
   
    xhr.send(data);
}




window.addEventListener("load", function(){
	getPopularMovies();
	document.getElementById("yearBtn").addEventListener("click", getBirthYearMovies);
});