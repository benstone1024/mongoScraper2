var ourRequest = newXMLHttpRequest();
ourRequest.open('GET',("http://developer.nytimes.com/article_search_v2.json");
ourRequest.onload= function() {
    if (ourRequest.status >= 200 && ourRequest.status < 400) {
        var data = JSON.parse(ourRequest.status < 400) {
            var data = JSON.parse(ourRequest.responseText);
            console.log(data);

        }
    }
};

ourRequest.onerror = function(){

};

ourRequest.send();

function createHTML(newsArticles){
var articleTemplate = documnet.getElementbyId('ArticleClips').innerHTML;
var ArticleClips = Handlebars.compile(articleTemplate);
var newsPrintedHTML = ArticleClips(newData);

var newsContainer = document.getElementById('news-container');
petContainer.innerHTML= ourGeneratedHTML;
}