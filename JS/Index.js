const apiKey = 'bf87ca36';
//  Fetching api and data //
   $('#searchButton').on('click', function() {
     const searchQuery = $('#searchInput').val();
     if (searchQuery.trim() !== '') {
       const apiUrl = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchQuery}`;

       $.ajax({
         url: apiUrl,
         method: 'GET',
         dataType: 'json',
         success: function(response) {
           // Handle the response data and display the results on the page
           displayResults(response);
         },
         error: function(error) {
           console.error('Error fetching data from OMDB API:', error);
         }
       });
     }
   });

   // displaying result

   function displayResults(data) {
     const resultsContainer = $('#results');
     resultsContainer.empty();


     if (data && data.Search && data.Search.length > 0) {

       data.Search.forEach(movie => {


         const movieElement = `<div class="element-parrent">
         <div class="element">

         <img src="${movie.Poster}" alt="${movie.Title}" class="poster">
         <div class="data">
                                 <h2 class="title">${movie.Title}</h2>
                                 <p class="year">${movie.Year}</p>
                                 </div>
                                 </div>
                               </div>`;

         resultsContainer.append(movieElement);
       });
     } else {
       resultsContainer.append('<p>No results found.</p>');
     }
   }
