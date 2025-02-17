document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const postId = params.get("id");

  fetch("assets/data/posts.json")
      .then(response => response.json())
      .then(posts => {
          let post = posts.find(p => p.id == postId);
          if (post) {
              document.getElementById("post-title").innerText = post.title;
              document.getElementById("post-date").innerText = post.date;
              document.getElementById("post-image").src = post.image;
              document.getElementById("post-content").innerText = post.content;
          } else {
              document.querySelector(".post .container").innerHTML = "<p>Post não encontrado.</p>";
          }
      })
      .catch(error => console.error("Erro ao carregar post:", error));
});
