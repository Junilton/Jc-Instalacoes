document.addEventListener("DOMContentLoaded", function () {
  fetch("assets/data/posts.json")
      .then(response => response.json())
      .then(posts => {
          let postsContainer = document.getElementById("posts-container");
          posts.forEach(post => {
              let postElement = `
                  <div class="post-preview">
                      <img src="${post.image}" alt="${post.title}">
                      <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
                      <p>${post.date}</p>
                      <p>${post.content.substring(0, 100)}...</p>
                      <a href="post.html?id=${post.id}">Leia mais</a>
                  </div>
              `;
              postsContainer.innerHTML += postElement;
          });
      })
      .catch(error => console.error("Erro ao carregar posts:", error));
});
