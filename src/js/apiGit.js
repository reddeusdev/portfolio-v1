const axios = require('axios');
const projects = document.querySelector('.projects-list')
const loader = document.querySelector('.push-pop');
axios.get('https://api.github.com/users/reddeusdev/repos')
      .then(function (response) {
            aaa(response.data);
      })
      .catch(function (error) {
            console.log(error);
      })


const aaa = (data) => {
      if (!data) {
            loader.style.display = "block";
      } else {
            data.forEach(element => {
                  const div = document.createElement('div')
                  div.classList.add('border', 'projects-item');

                  const link = document.createElement('div')
                  link.classList.add('projects-link');

                  const name = document.createElement('h3')
                  name.classList.add('projects-title');
                  name.textContent = element.name
                  div.appendChild(name);

                  const repo = document.createElement('a')
                  repo.textContent = 'Repo'
                  repo.classList.add('btr')
                  repo.href = element.html_url;
                  link.appendChild(repo);

                  const a = document.createElement('a');
                  a.textContent = 'Live'
                  a.classList.add('btr')
                  a.href = `https://reddeusdev.github.io/${element.name}`
                  link.appendChild(a);

                  div.appendChild(link);
                  projects.appendChild(div);
            });
      }
}