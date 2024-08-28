document.addEventListener("DOMContentLoaded", function() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      const featuredTitles = document.getElementById('featured-titles');
      const newReleases = document.getElementById('genre_lancamentos');

      data.featured.forEach(item => {
        const article = document.createElement('article');
        article.id = item.id;
        article.className = `item ${item.type}`;
        
        article.innerHTML = `
          <div class="poster">
            <img src="${item.image}" alt="${item.title}">
            <div class="rating">${item.rating}</div>
            <div class="featu">${item.feature}</div>
            <a href="${item.link}">
              <div class="see play1"></div>
            </a>
          </div>
          <div class="data dfeatur">
            <h3><a href="${item.link}">${item.title}</a></h3>
            <span>${item.year || item.date}</span>
          </div>
        `;
        
        featuredTitles.appendChild(article);
      });

      data.new_releases.forEach(item => {
        const article = document.createElement('article');
        article.id = item.id;
        article.className = `item ${item.type}`;
        
        article.innerHTML = `
          <div class="poster">
            <img src="${item.image}" alt="${item.title}">
            <div class="rating">${item.rating}</div>
            <div class="mepo"> </div>
            <a href="${item.link}">
              <div class="see play1"></div>
            </a>
          </div>
          <div class="data">
            <h3><a href="${item.link}">${item.title}</a></h3>
            <span>${item.date || ''}</span>
          </div>
        `;
        
        newReleases.appendChild(article);
      });
    })
    .catch(error => console.error('Error loading the JSON data:', error));
});
