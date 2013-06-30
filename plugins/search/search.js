// Example Code:

// Load the Search Engine plugin (Google, Bing and Yandex supported)
var searchHook = appAPI.hooks.register('searchEngine');

// Register to search event. The callback receives search data as parameter.
searchHook.addListener('search', function (search) {
  alert('term: ' + search.term + ' * ' + 'engine: ' + search.engine);

  // Add a new entry as the first search result (top result)
  // Function accepts object with 2 parameters: html as string and updateIfExists as boolean
  // The function returns an instance class of the result
  var instance = this.addSearchResult({
    html:'<iframe src="http://mysite.com/search/result.html" width="100%" height="200" frameborder="0"></iframe>',
    // if updateIfExists is set to true it will update the search result instead of adding a new one
    updateIfExists:true
  });

  // Update the html of the result
  instance.update({html:'<iframe src="http://cnn.com" width="100%" height="200" frameborder="0"></iframe>'});

  // Remove the result after 15 seconds
  setTimeout(function() {
	alert('Removing search instance');
	instance.remove();
  }, 15 * 1000);
});


// This method allows you to add support for another search engine
// Input parameter is jQuery reference to search input
searchHook.addEngine({
  name:'yahoo',
  url:'search.yahoo.com',
  input:'input[name=p]'
});