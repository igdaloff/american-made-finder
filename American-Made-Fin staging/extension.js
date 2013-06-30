  /************************************************************************************
  This is your Page Code. The appAPI.ready() code block will be executed on every page load.
  For more information please visit our docs site: http://docs.crossrider.com
*************************************************************************************/

appAPI.ready(function($) {

/*
 * Description:
 *   This extension demonstrates a cross-browser solution for injecting
 *   html resource into an iframe.
 *
 *   The solution works as follows:
 *       appAPI.dom.addInlineJS is used to inject the contents of the
 *       "iframe.js" contents obtained using appAPI.resources.get.
 *
 *       The code in "iframe.js" adds an empty iframe to the page. Then,
 *       the value of a variable called "content" (defaults value: "@content")
 *       is written to the iframe as its content.
 *
 *       When injecting "iframe.js" the solution dynamically replaces the value of
 *       content variable "@content" with the content of the "index.html" file.
 *       This enables you to keep your HTML code as a separate resource within the extension.
 */

    var iframe = $('<iframe id="am-iframe" style="position: fixed; z-index: 10000001; left: 0px; right: 0px; top: 0px; width: 100%; height: 60px;" />')
    .attr('src', 'data:text/html;charset=utf-8,' + escape(appAPI.resources.get('index.html')))
    .prependTo('body');
    $('body').css('margin-top','60px');

});

// Load the Search Engine plugin (Google, Bing and Yandex supported)
var searchHook = appAPI.hooks.register('searchEngine');

// Register to search event. The callback receives search data as parameter.
searchHook.addListener('search', function (search) {

  //alert('term: ' + search.term + ' * ' + 'engine: ' + search.engine);

  // Add a new entry as the first search result (top result)
  // Function accepts object with 2 parameters: html as string and updateIfExists as boolean
  // The function returns an instance class of the result
//  var instance = this.addSearchResult({
//    html:'<iframe src="http://mysite.com/search/result.html" width="100%" height="200" frameborder="0"></iframe>',
//    // if updateIfExists is set to true it will update the search result instead of adding a new one
//    updateIfExists:true
//  });

  // Update the html of the result


//    if (search.term == "igdaloff") {
//        instance.update({html:'<iframe src="http://igdaloff.com" width="100%" height="200" frameborder="0"></iframe>'});
//    }  else {
//        instance.update({html:'<iframe src="http://cnn.com" width="100%" height="200" frameborder="0"></iframe>'});
//    }


    // To remove the instance
    // instance.remove();

});