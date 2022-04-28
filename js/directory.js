const main = document.querySelector('main');
let html = '';

for ( let i = 0; i < projects.length; i++ ) {
    let project = projects[i];
    html += `
    <section class="bubble">
    <img src="${project.photo}" alt="${project.alt}">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}"><button class="hvr-grow-shadow">View Site</button></a>
    </section>
    `;
}

console.log(html);

main.insertAdjacentHTML('beforeend', html);
