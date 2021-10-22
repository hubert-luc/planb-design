const projectName = window.location.search.split('=')[1];
const body = document.getElementById('container')
console.log(body)
fetch("https://api.npoint.io/e0e65b68b7b40a71357f").then(response => {
    return response.json()
}).then(data => {
    const project = data.projects[projectName]

    const title = document.getElementById('title');
    title.className = 'title-container';
    const name = document.createElement('h1');
    name.textContent = project.name;
    name.className = 'name';
    title.appendChild(name)
    
    const shortDescription = document.createElement('p');
    shortDescription.textContent = project.shortDescription;
    shortDescription.className = 'short-description';
    title.appendChild(shortDescription);

    // setTimeout(() => {
    //     window.scrollTo({top: window.innerHeight, left: 0, behavior: 'smooth'});
    // }, 4000)

    const imagesArray = JSON.parse(project.images);
    imagesArray.forEach(imageUrl => {
        console.log(imageUrl)
        const image = document.createElement('img');
        image.src = imageUrl;
        console.log(image)
        body.appendChild(image)
    })

})
