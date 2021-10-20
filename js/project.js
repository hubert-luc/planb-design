
fetch("https://api.npoint.io/e0e65b68b7b40a71357f").then(response => {
    return response.json()
}).then(data => {
    const projects = data.projects;
console.log(projects)

})
