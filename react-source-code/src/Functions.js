import axios from "axios"

export async function getProjectsStars(projects, onSuccess){

    var stars = [];

    projects.forEach(project => {
        
        axios.get("https://api.github.com/repos/" + project)
            .then((response)=>{
            
                stars[project] = response.data.stargazers_count

                if(Object.keys(stars).length === projects.length){
                
                    onSuccess(stars);
                }
            })
            .catch((error)=>{
            
                console.error("ERROR: Could not get stars from project " + project + ". Error: " + error);
            });
    });
}