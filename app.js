const btns = document.querySelectorAll(".tab-btn");
const about = documen.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener('click', function (e) {
    const id = e.target.dataset.idl;
    if(id){
        btns.forEach(function(btn) {
            btn.classList.remove("active");
      e.target.classList.add("active");
        });
    // hide other articles
    articles.forEach(function(article) {
article.classList.remove('active')
})
const element = document.gerElementById(id);
element.classList.add("active");
  }
});
