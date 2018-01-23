var moviesJSON = require('../movies.json');

//Home
exports.home = function(req,res){
   var movies = moviesJSON.movies;


    res.render('home',{
        title : " Star Wars Movies",
        movies: movies
    });
};

//movie_single
exports.movie_single = function(req,res){
    var episode_number = req.params.episode_number;

    var movies = moviesJSON.movies;
    if(episode_number>=1 && episode_number<=6){
        var movie = movies[episode_number -1]
        var title = movie.title
    
        //res.send("this is the page for episode " + episode_number);
        res.render("movie_single",{
        movies : movies,
        title : title,
        movie: movie
    });
    }else{
        res.render('notFound',{movies: movies,
        title :"This is not the page you are looking for!"});
    }
  
};

//not found
exports.not_found = function(req,res){

    var movies = moviesJSON.movies;
    res.render('notFound',{movies: movies,
        title :"This is not the page you are looking for!"});
};