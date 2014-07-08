define(function(TR){
  var movies = [];

  return {
    getMovies: function(callback) {
      // $.ajax('path/to/request', params, function(data){
      //   callback(data);
      // });

      setTimeout(function(){
        var data = [{title: "Batman", id: 1}, {title: "Matrix", id: 2}];
        callback(data)
      }, 500);
    },

    getMovieDetails: function(id, callback) {

      // $.ajax('path/to/request', params, function(data){
      //   callback(data);
      // });

      setTimeout(function(){
        var movie;
        if (id == 1) {
          movie = {title: "Batman", rating: 5}
        } else {
          movie = {title: "Matrix", rating: 4}
        }
        callback(movie)
      }, 500)
    }
  }
});