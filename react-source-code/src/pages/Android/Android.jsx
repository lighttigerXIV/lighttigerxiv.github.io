
import SimpleMP from "../../images/simple-mp.png"


import { MediumVerticalSpacer } from "../../components/Spacers";
import { openInNewWindow } from "../Home/HomeVM";
import { useEffect, useState } from "react";
import { getProjectsStars } from "../../Functions";
import StarCount from "../../components/StarCount";
import { ProjectCard } from "../../components/ProjectCard";

export default function AndroidPage() {

    const [projectsStars, setProjectsStars] = useState({})

    useEffect(() => {

        if (Object.keys(projectsStars).length === 0) {

            getProjectsStars(
                ["lighttigerxiv/simplemp-compose"],
                (stars) => {

                    setProjectsStars(stars);
                }
            )
        }

    }, []);


    

    return (
        <div className="container-fluid medium-padding">
            <div className="row no-spacing">
                <div className="col"></div>
                <div className="col-lg-6 col-md-8 col-sm-10 col-12">

                    <h2>Android Projects</h2>

                    <ProjectCard
                        stars={projectsStars}
                        repo="https://github.com/lighttigerXIV/SimpleMP-Compose"
                        title="Simple MP"
                        project="lighttigerxiv/simplemp-compose"
                        about="Simple MP is a music player built with kotlin and jetpack compose.
                            It's very easy to use and can be customized with material you colors."
                        image={SimpleMP}
                    />
                </div>
                <div className="col"></div>
            </div>
        </div>
    )
}