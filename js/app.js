requirejs.config({
  baseUrl: 'js/',
});

requirejs(['api_calls', 'template_renderer'],
  function (ApiCalls, TemplateRenderer) {
    $(document).ready(function() {
      ApiCalls.getMovies(TemplateRenderer.renderMovieItems);
    })

    $(document).click('.movie', function() {
      ApiCalls.getMovieDetails($(this).data('id'), TemplateRenderer.renderMovieDetails)
    })
  }
);