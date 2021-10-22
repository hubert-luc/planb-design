// set up text to print, each item in array is new line
var workshopTextArray = new Array(
    "Pracownia"
    );
    var contactTextArray = new Array(
        "Kontakt"
        );
        var projectsTextArray = new Array(
            "Projekty"
            );
    var iSpeed = 70; // time delay of print out
    var iScrollAt = 20; // start scrolling up at this many lines
  
    initialiseTextPositions = {
        "workshop-link": 0,
        "contact-link": 0,
        "projects-link": 0
    }

    const typewriter = (textArray, elementId) => {
        var iIndex = 0; // start printing array at this posision
        var iArrLength = textArray[0].length; // the length of the text array
        var sContents = ''; // initialise contents variable
        var iRow; // initialise current row
        sContents =  ' ';
        iRow = Math.max(0, iIndex-iScrollAt);
        var destination = document.getElementById(elementId);
         
         while ( iRow < iIndex ) {
          sContents += textArray[iRow++] + '<br />';
         }
         destination.innerHTML = sContents + textArray[iIndex].substring(0, initialiseTextPositions[elementId]);
         if ( initialiseTextPositions[elementId]++ == iArrLength ) {
            initialiseTextPositions[elementId] = 0;
          iIndex++;
          if ( iIndex != textArray.length ) {
           iArrLength = textArray[iIndex].length;
           setTimeout(() => typewriter(textArray, elementId), 500);
          }
         } else {
          setTimeout(() => typewriter(textArray, elementId), iSpeed);
         }
    }

setTimeout(() => {
    typewriter(projectsTextArray, 'projects-link');
}, 18 * iSpeed)

setTimeout(() => {
    typewriter(workshopTextArray, 'workshop-link');
}, 28 * iSpeed)

setTimeout(() => {
typewriter(contactTextArray, 'contact-link');
}, 39 * iSpeed)

projectsLink = document.getElementById('projects-link');
projectsLink.addEventListener('click', () => {
    window.scrollTo({top: window.innerHeight, left: 0, behavior: 'smooth'});
})

fetch("https://api.npoint.io/e0e65b68b7b40a71357f").then(response => {
    return response.json()
}).then(data => {
    const projects = data.projects;
    const list = document.getElementById('projects-list');

    Object.keys(projects).forEach(name => {
        console.log(name)
    const project = projects[name];
    const projectPreview = document.createElement('a');
    projectPreview.href = `/planb-design/project.html?name=${name}`
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
    const title = document.createElement('span');
    title.className = 'title';
    title.innerHTML = project.name;
    previewImageContainer.appendChild(title);
    // projectPreview.appendChild(previewTitle);
    // projectPreview.appendChild(previewShortDescription)
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