async function getArticles() {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2024-04-03&sortBy=publishedAt&apiKey=b1f5dcada72e444cba1819cfcae92966"
    );
    const data = await response.json();
    console.log(data);
    const row = document.getElementById("articles");
    row.innerHTML += data.articles
      .map(
        (article) => `<div class="col gap-4">
    <div class="card" style="width: 18rem;">
    
     <img src="${article.urlToImage}" class="card-img-top">
        <div class="card-body">
             <h5 class="card-title">${article.title}</h5>
             <h6 class="card-subtitle mb-2 text-body-secondary">${moment(
               article.publishedAt
             ).fromNow()}</h6>
             <p class="card-text">${article.content}</p>
             <a href="${article.url}" class="btn btn-primary">Let's Read</a>
    </div>
    </div>
    </div> `
      )
      .join("");
  } catch (error) {
    console.log(error);
  }
}
getArticles();
