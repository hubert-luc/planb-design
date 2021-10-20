const projectName = window.location.search.split('=')[1];

fetch("https://api.npoint.io/e0e65b68b7b40a71357f").then(response => {
    return response.json()
}).then(data => {
    const project = data.projects[projectName]
    console.log(project)
    
})
