import axios from "axios";

export function getStars(project, onSuccess) {

    axios.get("https://api.github.com/repos/" + project.repo)
        .then((response) => {

            project.stars = response.data.stargazers_count;
            onSuccess(project);
        })
        .catch((error) => {

            console.error("ERROR: Could not get stars from project " + project.repo + ". Error: " + error);
        });

}


export function filterProjects(projects, platform) {

    if (platform === "all") { return projects }

    var filteredProjects = []

    projects.forEach(project => {

        project.platforms.forEach(projectPlatform => {
            if (projectPlatform === platform) {
                filteredProjects.push(project);
                return
            }
        })
    })

    return filteredProjects;
}