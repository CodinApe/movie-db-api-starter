function getPopularMovies() {
    let url = "https://api.themoviedb.org/3/movie/popular?api_key=8d3dfed711a9dddd0c1e92b5cb682db2&language=en-US&page=1"

    let popularMovies = document.getElementById("popular");
    let imageUrl = "https://image.tmdb.org/t/p/w500/";

    const data = null;

    const xhr = new XMLHttpRequest();
    // xhr.withCredentials = true;
    
    xhr.addEventListener('readystatechange', function () {
      if (this.readyState === this.DONE) {
        // console.log(this.responseText);

        let json = JSON.parse(this.responseText);
        console.log(json);

        let html = "";
        for (let i = 0; i < 4; i++) {
            html += `
                <figure>
                    <img src="${json.results[i].poster_path}" alt="">
                    <figcaption>${json.results[i].title}</figcaption>
                </figure>            
            `
        }

        popularMovies.innerHTML = html;
      }
    });
    
    xhr.open('GET', url);
    xhr.setRequestHeader('accept', 'application/json');
    // xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZDNkZmVkNzExYTlkZGRkMGMxZTkyYjVjYjY4MmRiMiIsInN1YiI6IjY1YmMxN2Y5Y2ZmZWVkMDE2M2FkNTNhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l4WI5WCHr_q-xpG7NCjT3AeAr_n6vMMQ4LJRgV3oQrM');
    
    xhr.send(data);
}

function getBirthYearMovies(e) {

}








window.addEventListener("load", function(){
	getPopularMovies();
	document.getElementById("yearBtn").addEventListener("click", getBirthYearMovies);
});