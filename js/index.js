

fetch("https://api.npoint.io/e0e65b68b7b40a71357f").then(response => {
    return response.json()
}).then(data => {
    const projects = data.projects;
console.log(projects)
    const list = document.getElementById('projects-list');

    Object.keys(projects).forEach(name => {
    const project = projects[name];
    const projectPreview = document.createElement('a');
    projectPreview.href = `/project.html?name=${name}`
    projectPreview.className = 'project-preview-link';

    const previewImageContainer = document.createElement('div');
    previewImageContainer.className = 'preview-image-container';

    const previewImage = document.createElement('img');
    previewImage.src = project.defaultImage;

    const previewTitle = document.createElement('h5');
    previewTitle.className = 'preview-title';
    previewTitle.textContent = project.name;

    const previewShortDescription = document.createElement('p');
    previewShortDescription.className = 'preview-short-description';
    previewShortDescription.textContent = project.shortDescription;

    previewImageContainer.appendChild(previewImage);
    projectPreview.appendChild(previewImageContainer);
    projectPreview.appendChild(previewTitle);
    projectPreview.appendChild(previewShortDescription)
    const listItem = document.createElement('li');
    listItem.className = 'project-preview';
    listItem.appendChild(projectPreview);
    list.appendChild(listItem)
})
})



// <div class="polaroid">
//             <a href="#" title="Santorini">
//               <div class='preview-image-container'><img src="https://images.unsplash.com/photo-1533105079780-92b9be482077?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Santorini" title="Santorini" /></div>
//               <h5>Projekt</h5>
//               <p>To jest super melinka</p>
//             </a>
//           </div>