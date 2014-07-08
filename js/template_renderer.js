define(function() {
  return {
    renderMovieItems: function(movies) {
      var source = $('#templates .movie-list').html();
      var template = Handlebars.compile(source);
      var html = $(template({movieList: movies}));
      $('.main').empty();
      $('.main').append(html);
    },

    renderMovieDetails: function (movie) {
      var source = $('#templates .movie-details').html();
      var template = Handlebars.compile(source);
      var html = $(template(movie));
      $('.main').empty();
      $('.main').append(html);
    }
  }
})