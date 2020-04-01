function darp_load() {
  showPlot(1);
  showArticle(1);
}

var biPlotIndex = 1;
var articleIndex = 1;

function plusPlots(n) {
  showPlot(biPlotIndex +=n)
}
function plusArticles(n) {
  showArticle(articleIndex += n)
}

function currentPlot(n){
  showPlot(biPlotIndex = n)
}
function currentArticle(n){
  showArticle(articleIndex = n)
}

function showPlot(n){
  var i;
  var plots = document.getElementsByClassName("bi-plot");
  var dots = document.getElementsByClassName("bi-plot-btn");
  if (n > plots.length) {biPlotIndex = 1;}
  if (n < 1) {biPlotIndex = plots.length;}
  for (i = 0; i < plots.length; i++) {
      plots[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  plots[biPlotIndex-1].style.display = "block";
  dots[biPlotIndex-1].className += " active";
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
