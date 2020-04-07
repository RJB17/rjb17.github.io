function darp_load() {
  showArticle(1);
}

var articleIndex = 1;

function plusArticles(n) {
  showArticle(articleIndex += n)
}

function currentArticle(n){
  showArticle(articleIndex = n)
}

function showArticle(n){
  var i;
  var articles = document.getElementsByClassName("article");
  var dots = document.getElementsByClassName("article-btn");
  if (n > articles.length) {articleIndex = 1;}
  if (n < 1) {articleIndex = articles.length;}
  for (i = 0; i < articles.length; i++) {
      articles[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  articles[articleIndex-1].style.display = "block";
  dots[articleIndex-1].className += " active";
}
